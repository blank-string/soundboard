import React from 'react'

const Control = ({ label, children }) => <div className='field'>
    <label className='label'>{label}</label>
    <div className='control'>
        {children}
    </div>
</div>

export default Control