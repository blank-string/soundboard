import React from 'react'
import styles from './styles'
import SaveIcon from '../icons/save'

const Save = ({saveSound, sound}) => <button
  onClick={() => saveSound(sound)}
  className={`button is-large is-info ${styles.save()}`}>
  <span className='icon'>
    <SaveIcon className={styles.saveImage()} />
  </span>
  <span>Save</span>
</button>

export default Save
