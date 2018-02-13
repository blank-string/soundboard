export default (state, action) => {
  state.sound = state.sound || {
    img: '/fallback.png',
    name: '',
    location: ''
  }

  if (action.type === '@@router/LOCATION_CHANGE') {
    state.sound = {
      img: '/fallback.png',
      name: '',
      location: ''
    }
  }
  if (action.type === '@@sound/UPDATE_NAME') state.sound.name = action.payload.name
  if (action.type === '@@sound/UPDATE_FILE') state.sound.location = action.payload.file.path

  return state
}
