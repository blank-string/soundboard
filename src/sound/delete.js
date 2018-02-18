import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import DeleteIcon from '../icons/delete'

const DeleteButton = ({removeSound, sound}) => <div className='field'>
  <div className='control'>
    <button
      onClick={() => removeSound(sound)}
      className='button is-danger is-fullwidth'>
      <span className='icon'>
        <DeleteIcon className={styles.saveImage()} />
      </span>
      <span>Delete</span>
    </button>
  </div>
</div>

DeleteButton.propTypes = {
  removeSound: PropTypes.func.isRequired,
  sound: PropTypes.object.isRequired
}

const Delete = ({removeSound, sound}) => sound.new ? null : <DeleteButton removeSound={removeSound} sound={sound} />

Delete.propTypes = {
  removeSound: PropTypes.func.isRequired,
  sound: PropTypes.object.isRequired
}

export default Delete
