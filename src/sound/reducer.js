export default (state, action) => {
  state.sound = state.sound || {
    img: '/fallback.png',
    name: '',
    location: ''
  }

  if (action.type === '@@router/LOCATION_CHANGE') {
    const pathname = action.payload.pathname
    let uuid = pathname.replace('/sound/', '')
    if (uuid === '/' || uuid === '/sound') uuid = 'new'
    if (uuid === 'new') {
      state.sound = {
        img: '/fallback.png',
        name: '',
        location: ''
      }
    } else {
      const sound = window.api.getSound(uuid)
      state.sound = sound
    }
  }
  if (action.type === '@@sound/UPDATE_NAME') state.sound.name = action.payload.name
  if (action.type === '@@sound/UPDATE_IMAGE') state.sound.img = action.payload.file.path
  if (action.type === '@@sound/UPDATE_FILE') state.sound.location = action.payload.file.path

  return state
}
