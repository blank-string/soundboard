import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Name = ({updateName, name}) => <input
  onChange={(evt) => updateName(evt.target.value)}
  className={`input ${styles.name()}`}
  type='text'
  value={name}
  placeholder='Sound Name'
/>

Name.propTypes = {
  updateName: PropTypes.func,
  name: PropTypes.string
}

export default Name
