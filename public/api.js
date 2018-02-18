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
        sounds.insert(sound)
      } else {
        found.name = sound.name
        found.location = sound.location
        found.img = sound.img
        found.position = sound.position
        found.keyboardShortcut = sound.keyboardShortcut
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

      db.saveDatabase()
    },
    getSounds () {
      let sounds = db.getCollection('sounds')
      if (sounds === null) sounds = db.addCollection('sounds')
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
      db.saveDatabase()
    },
    getCategories: value => {
      if (value === null) return []
      if (value === '') return []
      const categories = db.getCollection('categories').data.map(d => d.value)
      if (typeof value === 'undefined') return categories
      return fuzzy.filter(value, categories).map(d => d.string)
    }
  }
}

window.api = API()
