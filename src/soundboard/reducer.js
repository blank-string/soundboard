export default (state, action) => {
  state.soundboard = state.soundboard || {sounds: []}
  const sounds = window.api.getSounds()
  sounds.forEach((sound, i) => {
    if (process.env.NODE) sound.location = sound.location.replace(process.cwd(), '')
  })
  state.soundboard.sounds = sounds
  return state
}
