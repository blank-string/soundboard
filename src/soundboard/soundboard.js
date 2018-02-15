import React from 'react'
import Audio from '../icons/audio'
import Stop from '../icons/stop'
import Play from '../icons/play'
import Sync from '../icons/sync'
import Wrench from '../icons/wrench'
import styles from './styles'
import {Link} from 'react-router-dom'

const Soundboard = ({soundboard}) => <section className='section'>
  <audio id='audio' />
  <div className='container'>
    <div className={styles.sounds()}>
      {soundboard.sounds.map(sound => <div key={sound.uuid} className={styles.sound()}>
        <audio id={sound.uuid} src={sound.location} />
        <div className={styles.imageContainer()}>
          <figure className={`image ${styles.image()}`}>
            <Audio className={styles.audio()} />
          </figure>
        </div>
        <h1 className={`subtitle ${styles.title()}`}>{sound.name}</h1>
        <div className={styles.buttons()}>
          <button className='button' onClick={() => {
            let audio = document.getElementById('audio')
            if (audio.src !== sound.location) audio.src = sound.location
            audio.currentTime = 0
            audio.pause()

            audio = document.getElementById(sound.uuid)
            audio.currentTime = 0
            audio.pause()
          }}>
            <span className='icon'>
              <Stop className={styles.icon()} />
            </span>
          </button>
          <button className='button' onClick={() => {
            const audio = document.getElementById('audio')
            if (audio.src !== sound.location) audio.src = sound.location
            audio.currentTime = 0
            audio.play()
          }}>
            <span className='icon'>
              <Play className={styles.icon()} />
            </span>
          </button>
          <button className='button' onClick={() => {
            const audio = document.getElementById(sound.uuid)
            audio.currentTime = 0
            audio.play()
          }}>
            <span className='icon'>
              <Sync className={styles.icon()} />
            </span>
          </button>
          <Link to={`/sound/${sound.uuid}`} className='button'>
            <span className='icon'>
              <Wrench className={styles.icon()} />
            </span>
          </Link>
        </div>
      </div>)
      }
    </div>
  </div>
</section>

export default Soundboard
