import {css, StyleSheet} from 'aphrodite'

const styles = StyleSheet.create({
  add: {
    fill: '#3273dc'
  }
})

export default {
  add: () => css(styles.add)
}
