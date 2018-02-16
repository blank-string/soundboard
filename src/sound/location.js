import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Location = ({updateFile}) => <input
  onChange={evt => updateFile(evt.target.files[0])}
  className={`input ${styles.name()}`}
  type='file'
  placeholder='Sound Location'
  accept='.mp3'
/>

Location.propTypes = {
  updateFile: PropTypes.func.isRequired
}

export default Location
