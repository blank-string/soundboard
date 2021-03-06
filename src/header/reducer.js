const locationChange = '@@router/LOCATION_CHANGE'

export default (state, action) => {
  state.header = state.header || {
    soundboard: 'active',
    sound: 'inactive'
  }

  if (action.type === locationChange) {
    const pathname = action.payload.pathname
    state.header = {
      soundboard: pathname === '/' ? 'active' : 'inactive',
      sound: pathname === '/sound' ? 'active' : 'inactive'
    }
  }
  return state
}
