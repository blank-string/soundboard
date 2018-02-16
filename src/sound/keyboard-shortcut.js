import React from 'react'
import PropTypes from 'prop-types'

const KeyboardShortcut = ({updateKeyboardShortcut, keyboardShortcut}) => <div>
    KeyboardShortcut
</div>

KeyboardShortcut.propTypes = {
  updateKeyboardShortcut: PropTypes.func.isRequired,
  keyboardShortcut: PropTypes.string
}

export default KeyboardShortcut
