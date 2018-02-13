export default (dispatch) => {
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
    saveSound: sound => {
      window.api.saveSound(sound)
    }
  }
}
