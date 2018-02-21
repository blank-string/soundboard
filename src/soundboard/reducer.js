export default (state, action) => {
  state.soundboard = state.soundboard || {sounds: []}
  state.soundboard.categories = state.soundboard.categories || window.api.getCategories().map(label => ({label, active: 'active'}))
  const sounds = window.api.getSounds()
  sounds.forEach((sound, i) => {
    if (process.env.NODE) sound.location = sound.location.replace(process.cwd(), '')
  })
  state.soundboard.sounds = sounds

  if (action.type === '@@soundboard/TOGGLE_CATEGORY') {
    state.soundboard.categories = state.soundboard.categories
      .map(({label, active}) => {
        if (action.payload.category === label) active = active === 'active' ? 'inactive' : 'active'
        return {
          label,
          active
        }
      })
  }

  return state
}
