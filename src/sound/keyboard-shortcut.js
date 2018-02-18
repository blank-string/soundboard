import React from 'react'
import PropTypes from 'prop-types'

const KeyboardShortcut = ({updateKeyboardShortcut, keyboardShortcut}) => <div className='field'>
  <div className='control'>
    <label className='label'>Keyboard Shortcut</label>
    <input className='input' type='text' placeholder='Keyboard Shortcut' />
  </div>
</div>

KeyboardShortcut.propTypes = {
  updateKeyboardShortcut: PropTypes.func.isRequired,
  keyboardShortcut: PropTypes.string
}

export default KeyboardShortcut
