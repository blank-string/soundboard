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
    updateTags: tags => {},
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
    updateKeyboardShortcut: keyboardShortcut => {}
  }
}
