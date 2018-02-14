import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 100
  },
  image: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    width: 80,
    height: 80,
    borderRadius: 90,
    backgroundColor: '#d2d2d2'
  },
  audio: {
    fill: '#333',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0,
    bottom: 0,
    height: 40,
    width: 40
  },
  title: {
    textAlign: 'center'
  },
  buttons: {
    textAlign: 'center'
  },
  icon: {
    fill: '#333'
  }
})

export default {
  imageContainer: () => css(styles.imageContainer),
  image: () => css(styles.image),
  audio: () => css(styles.audio),
  title: () => css(styles.title),
  buttons: () => css(styles.buttons),
  icon: () => css(styles.icon)
}
