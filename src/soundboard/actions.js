export default (dispatch) => {
  return {
    toggleCategory (category) {
      dispatch({
        type: '@@soundboard/TOGGLE_CATEGORY',
        payload: {category}
      })
    }
  }
}
