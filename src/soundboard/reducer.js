export default (state, action) => {
  state.soundboard = state.soundboard || {sounds: []}
  const sounds = window.api.getSounds()
  const rows = []
  let row = []
  sounds.forEach((sounds, i) => {
    row.push(sounds)
    if (row.length === 3) {
      rows.push(row)
      row = []
    }
  })
  if (row.length > 0) rows.push(row)
  state.soundboard.sounds = rows
  return state
}
