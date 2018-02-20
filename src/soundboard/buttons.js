import React from 'react'
import Stop from '../icons/stop'
import Play from '../icons/play'
import Sync from '../icons/sync'
import Wrench from '../icons/wrench'
import {Link} from 'react-router-dom'
import styles from './styles'

const Buttons = ({location, uuid}) => <div className={styles.buttons()}>
  <button className='button' onClick={() => {
    let audio = document.getElementById('audio')
    if (audio.src !== location) audio.src = location
    audio.currentTime = 0
    audio.pause()

    audio = document.getElementById(uuid)
    audio.currentTime = 0
    audio.pause()
  }}>
    <span className='icon'>
      <Stop className={styles.icon()} />
    </span>
  </button>
  <button className='button' onClick={() => {
    const audio = document.getElementById('audio')
    if (audio.src !== location) audio.src = location
    audio.currentTime = 0
    audio.play()
  }}>
    <span className='icon'>
      <Play className={styles.icon()} />
    </span>
  </button>
  <button className='button' onClick={() => {
    const audio = document.getElementById(uuid)
    audio.currentTime = 0
    audio.play()
  }}>
    <span className='icon'>
      <Sync className={styles.icon()} />
    </span>
  </button>
  <Link to={`/sound/${uuid}`} className='button'>
    <span className='icon'>
      <Wrench className={styles.icon()} />
    </span>
  </Link>
</div>

export default Buttons
