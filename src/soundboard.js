import React from 'react'
import Sound from './sound'
const Soundboard = ({sounds}) => <div>
    <audio id="audio" />
    <button onClick={() => {
        const audio = document.getElementById('audio')
        audio.pause()
        audio.currentTime = 0
    }}>Stop</button>
    <button onClick={() => {
        const audio = document.getElementById('audio')
        audio.play()
    }}>Play</button>
    <button onClick={() => {
        const audio = document.getElementById('audio')
        audio.pause()
    }}>Pause</button>
    {sounds.map(sound =>  <Sound key={sound.name} {...sound} />)}
</div>


export default Soundboard