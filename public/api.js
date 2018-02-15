const fs = require('fs-extra')
const path = require('path')
const Loki = require('lokijs')
const uuid = require('uuid/v4')

const API = () => {
  const db = new Loki(process.cwd() + '/.soundboard/soundboard.json')
  db.loadDatabase()

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
        sounds.insert(sound)
      } else {
        found.name = sound.name
        found.location = sound.location
        found.img = sound.img
        found.index = sound.index
        found.keyBinding = sound.keyBinding
        sounds.update(found)
      }

      db.saveDatabase()
    },
    getSounds () {
      let sounds = db.getCollection('sounds')
      if (sounds === null) sounds = db.addCollection('sounds')
      const data = sounds.data
      if (process.env.NODE) {
        data.forEach(sound => {
          sound.location = sound.location.replace(path.join(process.cwd(), 'public'), '')
        })
      }
      return data
    },
    getSound (uuid) {
      const sounds = db.getCollection('sounds')
      return sounds.findOne({uuid})
    }
  }
}

window.api = API()
