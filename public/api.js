const fs = require('fs-extra')
const path = require('path')
const Loki = require('lokijs')

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
        name: sound.name
      })

      if (found === null) {
        sounds.insert(sound)
      } else {
        found.name = sound.name
        found.location = sound.location
        found.img = sound.img
        sounds.update(found)
      }

      db.saveDatabase()
    },
    getSounds () {
      let sounds = db.getCollection('sounds')
      if (sounds === null) sounds = db.addCollection('sounds')
      console.log(sounds.data)
    }
  }
}

window.api = API()
