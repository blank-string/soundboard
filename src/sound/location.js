import React from 'react'
import PropTypes from 'prop-types'

const Location = ({updateFile, location}) => <div className='field'>
  <div className='control'>
    <label className='label'>Sound</label>
    <div className='file is-fullwidth has-name'>
      <label className='file-label'>
        <input accept='audio/*' className='file-input' type='file' onChange={evt => updateFile(evt.target.files[0])} />
        <span className='file-cta'>
          <span className='file-icon'>
            <i className='fas fa-upload' />
          </span>
          <span className='file-label'>Choose a file…</span>
        </span>
        <span className='file-name'>{location}</span>
      </label>
    </div>
  </div>
</div>

Location.propTypes = {
  updateFile: PropTypes.func.isRequired,
  location: PropTypes.string
}

export default Location
