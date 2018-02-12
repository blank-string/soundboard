const locationChange = '@@router/LOCATION_CHANGE'

export default (state, action) => {
  state.header = state.header || {
    soundboard: 'active',
    manager: 'inactive'
  }

  if (action.type === locationChange) {
    const pathname = action.payload.pathname
    state.header = {
      soundboard: pathname === '/' ? 'active' : 'inactive',
      manager: pathname === '/manager' ? 'active' : 'inactive'
    }
  }
  return state
}
