const fs = require('fs-extra')
const path = require('path')
const Loki = require('lokijs')
const uuid = require('uuid/v4')

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
      let sounds = db.getCollection('sounds')
      if (sounds === null) sounds = db.addCollection('sounds')

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
        sounds.update(found)
      }

      db.saveDatabase()
    },
    getSounds () {
      let sounds = db.getCollection('sounds')
      if (sounds === null) sounds = db.addCollection('sounds')
      const data = sounds.data
      data.forEach(sound => {
        const location = sound.location
        sound.exists = fs.existsSync(location)
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
    }
  }
}

window.api = API()
