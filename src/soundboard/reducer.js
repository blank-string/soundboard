
import uuid from 'uuid/v4'

export default (state, action) => {
  state.soundboard = state.soundboard || {sounds: []}
  const sounds = window.api.getSounds()
  const rows = []
  let row = []
  sounds.forEach((sound, i) => {
    sound.uuid = uuid()
    sound.src = sound.location.replace('/home/luke/Projects/blank-string/soundboard/public', '')
    row.push(sound)
    if (row.length === 5) {
      rows.push(row)
      row = []
    }
  })
  if (row.length > 0) rows.push(row)
  state.soundboard.sounds = rows
  return state
}
