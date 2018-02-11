import React from 'react'
import Control from './control'

const Setup = ({
    onNameChange,
    onCategoryChange,
    onKeyboardShortcutChange,
    onFileChange,
    onAdd
}) => <section className='section'>
    <div className='container'>
        <Control label='Name'>
            <input className='input' type='text' placeholder='Name' />
        </Control>
        <Control label='Category'>
            <div className='select is-fullwidth'>
                <select>
                    <option></option>
                    <option>New Category</option>
                </select>
            </div>
        </Control>
        <Control label='Keyboard Shortcut'>
            <input className='input' type='text' placeholder='Keyboard Shortcut' />
        </Control>
        <Control label='File'>
            <div className='file has-name is-fullwidth'>
                <label className='file-label'>
                    <input accept='.mp3' className='file-input' type='file' />
                    <span className='file-cta'>
                        <span className='file-label'>Choose a file…</span>
                    </span>
                    <span className='file-name'>No File Chosen</span>
                </label>
            </div>
        </Control>
        <Control>
            <button className='button is-info is-fullwidth'>Add</button>
        </Control>
    </div>
</section>

export default Setup

// once you enter something then it will update the sounds