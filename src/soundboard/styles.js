import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 45
  },
  figure: {
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    width: 40,
    height: 40,
    borderRadius: 90,
    backgroundColor: '#d2d2d2',
    overflow: 'hidden'
  },
  audio: {
    fill: '#333',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0,
    bottom: 0,
    height: 15,
    width: 15
  },
  image: {
    fill: '#333',
    position: 'absolute',
    left: 0,
    right: 0,
    margin: 'auto',
    top: 0,
    bottom: 0,
    height: 30,
    width: 'auto'
  },
  title: {
    textAlign: 'center',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    height: 20,
    fontSize: 16,
    overflow: 'hidden',
    marginBottom: 5
  },
  buttons: {
    textAlign: 'center'
  },
  icon: {
    fill: '#333'
  },
  sounds: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  sound: {
    margin: 15,
    width: 160,
    overflow: 'hidden',
    borderRadius: 4
  },
  soundError: {
    backgroundColor: 'rgba(232, 44, 12, 0.7)'
  },
  tag: {
    marginRight: 1
  },
  tabs: {
    margin: 5
  }
})

export default {
  imageContainer: () => css(styles.imageContainer),
  figure: () => css(styles.figure),
  image: () => css(styles.image),
  audio: () => css(styles.audio),
  title: () => css(styles.title),
  buttons: () => css(styles.buttons),
  icon: () => css(styles.icon),
  sounds: () => css(styles.sounds),
  sound: (exists) => `${css(styles.sound)} ${exists ? '' : css(styles.soundError)}`,
  tag: () => css(styles.tag),
  tabs: () => css(styles.tabs)
}
