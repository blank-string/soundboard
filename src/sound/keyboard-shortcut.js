import React from 'react'
import PropTypes from 'prop-types'

const KeyboardShortcut = ({updateKeyboardShortcut, keyboardShortcut}) => <div>
  <input className='input' type='text' placeholder='Keyboard Shortcut' />
</div>

KeyboardShortcut.propTypes = {
  updateKeyboardShortcut: PropTypes.func.isRequired,
  keyboardShortcut: PropTypes.string
}

export default KeyboardShortcut
