import React from 'react'
import PropTypes from 'prop-types'

const KeyboardShortcut = ({updateKeyboardShortcut, keyboardShortcut, unavailableKeyboardShortcut}) => <div className='field'>
  <label className='label'>Keyboard Shortcut</label>
  <div className='control'>
    <input
      readOnly
      className='input'
      type='text'
      placeholder='Keyboard Shortcut'
      value={window.api.keyboardShortcutToString(keyboardShortcut)}
      onKeyDown={(evt) => {
        evt.stopPropagation()
        updateKeyboardShortcut({
          ctrlKey: evt.ctrlKey,
          altKey: evt.altKey,
          shiftKey: evt.shiftKey,
          metaKey: evt.metaKey,
          key: evt.key
        })
      }}
    />
  </div>
  {unavailableKeyboardShortcut ? <p className='help is-danger'>This keyboard shortcut is either protected or already taken, it will not be saved</p> : null }
</div>

KeyboardShortcut.propTypes = {
  updateKeyboardShortcut: PropTypes.func.isRequired,
  keyboardShortcut: PropTypes.object
}

export default KeyboardShortcut
