const validKeys = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"£$%^&*()-_=+[{]};:\'@#~,<>/?\\|`¬'

export default (dispatch, {history}) => {
  return {
    updateName: name => {
      dispatch({
        type: '@@sound/UPDATE_NAME',
        payload: {name}
      })
    },
    updateFile: file => {
      dispatch({
        type: '@@sound/UPDATE_FILE',
        payload: {file}
      })
    },
    updateImage: file => {
      dispatch({
        type: '@@sound/UPDATE_IMAGE',
        payload: {file}
      })
    },
    saveSound: sound => {
      window.api.saveSound(sound)
      history.push('/')
    },
    removeSound: sound => {
      window.api.removeSound(sound.uuid)
      history.push('/')
    },
    updateTag: tag => {
      dispatch({
        type: '@@sound/UPDATE_TAG',
        payload: {tag}
      })
    },
    addTag: tag => {
      dispatch({
        type: '@@sound/ADD_TAG',
        payload: {tag}
      })
    },
    removeTag: tag => {
      dispatch({
        type: '@@sound/REMOVE_TAG',
        payload: {tag}
      })
    },
    showAllTags: () => {
      dispatch({
        type: '@@sound/SHOW_ALL_TAGS'
      })
    },
    hideAllTags: () => {
      dispatch({
        type: '@@sound/HIDE_ALL_TAGS'
      })
    },
    updateCategory: category => {
      dispatch({
        type: '@@sound/UPDATE_CATEGORY',
        payload: {category}
      })
    },
    showAllCategories: () => {
      dispatch({
        type: '@@sound/SHOW_ALL_CATEGORIES'
      })
    },
    hideAllCategories: () => {
      dispatch({
        type: '@@sound/HIDE_ALL_CATEGORIES'
      })
    },
    updateIndex: index => {},
    updateKeyboardShortcut: (keys) => {
      if (
        validKeys.includes(keys.key) ||
        keys.key === 'Backspace' ||
        keys.key === 'Escape' ||
        keys.key === 'Delete'
      ) {
        dispatch({
          type: '@@sound/KEYBOARD_SHORTCUT',
          payload: {
            keys
          }
        })
      }
    }
  }
}
