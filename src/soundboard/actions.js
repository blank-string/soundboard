export default (dispatch) => {
  return {
    toggleCategory (category) {
      dispatch({
        type: '@@soundboard/TOGGLE_CATEGORY',
        payload: {category}
      })
    },
    toggleTag (tag) {
      dispatch({
        type: '@@soundboard/TOGGLE_TAG',
        payload: {tag}
      })
    }
  }
}
