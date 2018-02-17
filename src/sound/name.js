import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Name = ({updateName, name}) => <div className='field'>
  <div className='control'>
    <label className='label'>Name</label>
    <input
      onChange={(evt) => updateName(evt.target.value)}
      className='input'
      type='text'
      value={name}
      placeholder='Sound Name'
    />
  </div>
</div>

Name.propTypes = {
  updateName: PropTypes.func,
  name: PropTypes.string
}

export default Name
