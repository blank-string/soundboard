import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  hiddenFile: {
    display: 'none'
  },
  newIamge: {
    overflow: 'hidden',
    backgroundColor: '#e0e0e0',
    width: 200,
    height: 200,
    borderRadius: 200,
    position: 'relative',
    left: 0,
    right: 0,
    margin: 'auto',
    transition: 'background-color 0.1s',
    ':hover': {
      cursor: 'pointer',
      backgroundColor: '#d2d2d2'
    }
  },
  newImageCamera: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0,
    bottom: 0,
    height: 100,
    width: 100,
    fill: '#333',
    transform: 'translateY(-10px)'
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0,
    bottom: 0,
    height: 100,
    width: 'auto',
    fill: '#333',
    transform: 'translateY(-10px)'
  },
  newImageAdd: {
    fill: '#3273dc',
    position: 'absolute',
    bottom: 0,
    right: 32,
    height: 30,
    width: 30,
    top: 0,
    margin: 'auto',
    transform: 'translateY(26px)'
  },
  saveImage: {
    fill: '#fff'
  },
  tag: {
    display: 'inline-flex',
    marginRight: 5,
    marginBottom: 0
  },
  deleteTag: {
    marginLeft: -1,
    border: 0,
    ':hover': {
      backgroundColor: '#ff2b56',
      cursor: 'pointer'
    }
  }
})

export default {
  hiddenFile: () => css(styles.hiddenFile),
  imageContainer: () => css(styles.newIamge),
  image: () => css(styles.image),
  newImageCamera: () => css(styles.newImageCamera),
  newImageAdd: () => css(styles.newImageAdd),
  saveImage: () => css(styles.saveImage),
  tag: () => css(styles.tag),
  deleteTag: () => css(styles.deleteTag)
}
