import React from 'react'

const Sound = ({name, src}) => <div>
    <button onClick={() => {
        const audio = document.getElementById('audio')
        audio.pause()
        audio.src = src
        audio.play()
    }}>{name}</button>
</div>

export default Sound