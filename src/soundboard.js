import React from 'react'
import Sound from './sound'

const Soundboard = ({ sounds }) => <div>
    <input
        multiple
        type="file"
        accept=".mp3"
        onChange={(evt) => {
            // console.log(evt.target.files)
            const url = window.URL.createObjectURL(evt.target.files[0])
            const audio = document.getElementById('audio')
            audio.src = url
            audio.play()
        }} />
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
    {sounds.map(sound => <Sound key={sound.name} {...sound} />)}
</div>


export default Soundboard