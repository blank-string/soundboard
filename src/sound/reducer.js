const validKeys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"£$%^&*()-_=+[{]};:\'@#~,<>/?\\|`¬'

export default (state, action) => {
  state.tags = state.tags || []
  state.tag = state.tag || ''
  state.sound = state.sound || {
    new: false,
    img: '',
    name: '',
    location: '',
    category: '',
    keyboardShortcut: {},
    tags: []
  }
  state.categories = state.categories || []

  if (action.type === '@@router/LOCATION_CHANGE') {
    const pathname = action.payload.pathname
    if (pathname === '/') {
      state.categories = []
      state.tag = ''
      state.tags = []
    }
    let uuid = pathname.replace('/sound/', '')
    if (uuid === '/' || uuid === '/sound') uuid = 'new'
    if (uuid === 'new') {
      state.sound = {
        new: true,
        img: '',
        name: '',
        location: '',
        keyboardShortcut: {},
        tags: []
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

  if (action.type === '@@sound/UPDATE_TAG') {
    state.tag = action.payload.tag
    state.tags = window.api.getTags(action.payload.tag)
  }
  if (action.type === '@@sound/ADD_TAG') {
    state.tag = ''
    state.tags.push(action.payload.tag)
    state.tags = Array.from(
      new Set(
        state.tags
          .map(tag => tag.toLowerCase())
      )
    ).filter(tag => tag !== '')
    state.sound.tags = Array.from(
      new Set(state.sound.tags.concat(state.tags))
    )
  }

  if (action.type === '@@sound/HIDE_ALL_TAGS') {
    state.tags = []
  }

  if (action.type === '@@sound/SHOW_ALL_TAGS') {
    state.tags = window.api.getTags()
  }

  return state
}
