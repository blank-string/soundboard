import React from 'react'
import styles from './styles'
import SaveIcon from '../icons/save'

const Save = ({saveSound, sound}) => <div className='field'>
  <div className='control'>
    <button
      onClick={() => saveSound(sound)}
      className='button is-info is-fullwidth'>
      <span className='icon'>
        <SaveIcon className={styles.saveImage()} />
      </span>
      <span>Save</span>
    </button>
  </div>
</div>

export default Save
