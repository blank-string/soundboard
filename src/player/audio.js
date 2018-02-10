import React, {Component} from 'react'

class Audio extends Component {
    render () {
        return <audio id="audio" />
    }
}

Audio.play = (src) => {
    const audio = document.getElementById('audio')
    audio.currentTime = 0
    audio.src = src
    audio.play()
}

Audio.pause = () => {
    const audio = document.getElementById('audio')
    audio.pause()
}

Audio.seek = (percent) => {
    const audio = document.getElementById('audio')
}

Audio.stop = (percent) => {
    const audio = document.getElementById('audio')
    audio.pause()
    audio.currentTime = 0
}

export default Audio