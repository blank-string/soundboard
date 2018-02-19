const validKeys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"£$%^&*()-_=+[{]};:\'@#~,<>/?\\|`¬'

export default (state, action) => {
  state.sound = state.sound || {
    new: false,
    img: '',
    name: '',
    location: '',
    category: '',
    keyboardShortcut: {}
  }
  state.categories = state.categories || []

  if (action.type === '@@router/LOCATION_CHANGE') {
    const pathname = action.payload.pathname
    if (pathname === '/') {
      state.categories = []
    }
    let uuid = pathname.replace('/sound/', '')
    if (uuid === '/' || uuid === '/sound') uuid = 'new'
    if (uuid === 'new') {
      state.sound = {
        new: true,
        img: '',
        name: '',
        location: '',
        keyboardShortcut: {}
      }
    } else if (pathname.startsWith('/sound/')) {
      const sound = window.api.getSound(uuid)
      state.sound = sound
    }
  }

  if (action.type === '@@sound/UPDATE_NAME') state.sound.name = action.payload.name
  if (action.type === '@@sound/UPDATE_IMAGE') state.sound.img = action.payload.file.path
  if (action.type === '@@sound/UPDATE_FILE') state.sound.location = action.payload.file.path

  if (action.type === '@@sound/UPDATE_CATEGORY') {
    state.sound.category = action.payload.category
    state.categories = window.api.getCategories(state.sound.category)
  }

  if (action.type === '@@sound/SHOW_ALL_CATEGORIES') {
    state.categories = window.api.getCategories()
  }

  if (action.type === '@@sound/HIDE_ALL_CATEGORIES') {
    state.categories = []
  }

  if (action.type === '@@sound/KEYBOARD_SHORTCUT') {
    let keys = action.payload.keys
    if (keys.key === 'Backspace' || keys.key === 'Escape' || keys.key === 'Delete') keys = {}
    else if (!validKeys.includes(keys.key)) keys = state.sound.keyboardShortcut || {}
    state.sound.unavailableKeyboardShortcut = !window.api.keyboardShortcutIsAvailable(keys)
    state.sound.keyboardShortcut = keys
  }
  return state
}
