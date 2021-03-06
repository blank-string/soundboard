const fs = require('fs-extra')
const path = require('path')
const Loki = require('lokijs')
const uuid = require('uuid/v4')
const fuzzy = require('fuzzy')

const API = () => {
  const db = new Loki(process.cwd() + '/.soundboard/soundboard.json')
  db.loadDatabase()
  db.addCollection('sounds')
  db.addCollection('categories')
  db.addCollection('tags')
  db.addCollection('keyboard')

  const soundboardDir = path.resolve(process.cwd(), '.soundboard')
  if (!fs.existsSync(soundboardDir)) {
    fs.mkdirSync(soundboardDir)
  }
  return {
    save () {
      db.saveDatabase()
    },
    saveSound (sound) {
      const sounds = db.addCollection('sounds')
      const categories = db.addCollection('categories')
      const tags = db.addCollection('tags')
      const keyboard = db.addCollection('keyboard')

      const found = sounds.findOne({
        uuid: sound.uuid
      })

      if (found === null) {
        sound.uuid = uuid()
        delete sound.new
        if (!this.keyboardShortcutIsAvailable(sound.keyboardShortcut)) sound.keyboardShortcut = {}
        sounds.insert(sound)
      } else {
        found.name = sound.name
        found.location = sound.location
        found.img = sound.img
        found.position = sound.position
        if (found.keyboardShortcut !== sound.keyboardShortcut && this.keyboardShortcutIsAvailable(sound.keyboardShortcut)) {
          found.keyboardShortcut = sound.keyboardShortcut
        }
        found.tags = sound.tags
        found.category = sound.category
        sounds.update(found)
      }

      if (sound.category) {
        const category = categories.findOne({
          value: sound.category
        })
        if (category === null) {
          categories.insert({
            value: sound.category
          })
        }
      }

      if (sound.tags) {
        sound.tags.forEach(tag => {
          const t = tags.findOne({
            value: tag
          })
          if (t === null) {
            tags.insert({
              value: tag
            })
          }
        })
      }

      if (this.keyboardShortcutToString(sound.keyboardShortcut) !== '' && this.keyboardShortcutIsAvailable(sound.keyboardShortcut)) {
        keyboard.insert(sound.keyboardShortcut)
      }

      keyboard.removeWhere(keys => {
        const count = sounds.where(s => {
          return s.keyboardShortcut.ctrlKey === keys.ctrlKey &&
            s.keyboardShortcut.shiftKey === keys.shiftKey &&
            s.keyboardShortcut.altKey === keys.altKey &&
            s.keyboardShortcut.metaKey === keys.metaKey &&
            s.keyboardShortcut.key === keys.key
        }).length
        return count === 0
      })

      categories.removeWhere(({value}) => {
        const count = sounds.find({
          category: value
        }).length
        return count === 0
      })

      tags.removeWhere(({value}) => {
        const count = sounds.where(s => s.tags.includes(value)).length
        return count === 0
      })

      db.saveDatabase()
    },
    getSounds (obj = {}) {
      let sounds = db.getCollection('sounds')

      const categories = obj.categories || []
      const tags = obj.tags || []
      const name = obj.name || ''

      // const data = sounds.where(sound => {
      //   if (categories.length > 0 && !categories.includes(sound.category)) return false
      //   if (tags.length > 0 && !tags.some(tag => sound.tags.includes(tag))) return false
      //   // if (fuzzy.match(name, sound.label))
      //   return true
      // })
      const data = sounds.data
      data.forEach(sound => {
        sound.exists = fs.existsSync(sound.location)
      })
      if (process.env.NODE) {
        data.forEach(sound => {
          sound.location = sound.location.replace(path.join(process.cwd(), 'public'), '')
          const location = sound.location
          const fullPath = path.join(process.cwd(), 'public', location)
          sound.exists = fs.existsSync(fullPath)
          sound.img = sound.img.replace(path.join(process.cwd(), 'public'), '')
        })
      }
      return data
    },
    getSound (uuid) {
      const sounds = db.getCollection('sounds')
      return sounds.findOne({uuid})
    },
    removeSound (uuid) {
      const sounds = db.getCollection('sounds')
      const sound = sounds.findOne({uuid})
      sounds.remove(sound)

      const keyboard = db.addCollection('keyboard')
      keyboard.removeWhere(keys => {
        const count = sounds.where(s => {
          return s.keyboardShortcut.ctrlKey === keys.ctrlKey &&
            s.keyboardShortcut.shiftKey === keys.shiftKey &&
            s.keyboardShortcut.altKey === keys.altKey &&
            s.keyboardShortcut.metaKey === keys.metaKey &&
            s.keyboardShortcut.key === keys.key
        }).length
        return count === 0
      })

      const categories = db.addCollection('categories')
      categories.removeWhere(({value}) => {
        const count = sounds.find({
          category: value
        }).length
        return count === 0
      })

      const tags = db.addCollection('tags')
      tags.removeWhere(({value}) => {
        const count = sounds.where(s => s.tags.includes(value)).length
        return count === 0
      })

      db.saveDatabase()
    },
    getCategories (value) {
      if (value === null) return []
      if (value === '') return []
      const categories = db.getCollection('categories').data.map(d => d.value)
      if (typeof value === 'undefined') return categories
      return fuzzy.filter(value, categories).map(d => d.string)
    },
    keyboardShortcutIsAvailable (keys) {
      const keyboard = db.addCollection('keyboard')
      return keyboard.findOne({
        ctrlKey: keys.ctrlKey,
        shiftKey: keys.shiftKey,
        altKey: keys.altKey,
        metaKey: keys.metaKey,
        key: keys.key
      }) === null
    },
    keyboardShortcutToString (keys) {
      let shortcut = []
      if (keys.ctrlKey) shortcut.push('Ctrl')
      if (keys.shiftKey) shortcut.push('Shift')
      if (keys.altKey) shortcut.push('Alt')
      if (keys.metaKey) shortcut.push('Meta')
      if (keys.key !== 'Control' && keys.key !== 'Shift' && keys.key !== 'Alt' && keys.key !== 'Meta') shortcut.push(keys.key)
      return shortcut.join(' + ')
    },
    getTags (value) {
      if (value === null) return []
      if (value === '') return []
      const tags = db.getCollection('tags').data.map(d => d.value)
      if (typeof value === 'undefined') return tags
      return fuzzy.filter(value, tags).map(d => d.string)
    }
  }
}

window.api = API()
