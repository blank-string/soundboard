import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
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
    height: 60
  },
  newImageAdd: {
    position: 'absolute',
    bottom: 0,
    right: 40,
    height: 30,
    top: 0,
    margin: 'auto',
    transform: 'translateY(25px)'
  },
  name: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 20
  },
  save: {
    width: '90%',
    marginLeft: '5%',
    marginTop: 20
  },
  saveImage: {
    marginRight: 5,
    marginTop: -3
  }
})

export default {
  newImage: () => css(styles.newIamge),
  newImageCamera: () => css(styles.newImageCamera),
  newImageAdd: () => css(styles.newImageAdd),
  name: () => css(styles.name),
  save: () => css(styles.save),
  saveImage: () => css(styles.saveImage)
}
