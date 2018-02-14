import React from 'react'
import AudioIcon from '../icons/audio'
import Stop from '../icons/stop'
import Play from '../icons/play'
import Sync from '../icons/sync'
import Wrench from '../icons/wrench'
import styles from './styles'

const Soundboard = ({soundboard}) => {
  console.log(soundboard)
  return <section className='section'>
    <audio id='audio' />
    <div className='container'>
      {soundboard.sounds.map(row => <div className='columns'>{
        row.map(sound => <div className={`column ${styles.sound()}`}>
          <audio id={sound.uuid} />
          <div className={styles.imageContainer()}>
            <figure className={`image ${styles.image()}`}>
              <AudioIcon className={styles.audio()} />
            </figure>
          </div>
          <h1 className={`title ${styles.title()}`}>{sound.name}</h1>
          <div className={styles.buttons()}>
            <button className='button' onClick={() => {
              const audio = document.getElementById('audio')
              audio.currentTime = 0
              audio.pause()
            }}>
              <span className='icon'>
                <Stop className={styles.icon()} />
              </span>
            </button>
            <button className='button' onClick={() => {
              const audio = document.getElementById('audio')
              if (audio.src !== sound.src) audio.src = sound.src
              audio.currentTime = 0
              audio.play()
            }}>
              <span className='icon'>
                <Play className={styles.icon()} />
              </span>
            </button>
            <button className='button'>
              <span className='icon'>
                <Sync className={styles.icon()} />
              </span>
            </button>
            <button className='button'>
              <span className='icon'>
                <Wrench className={styles.icon()} />
              </span>
            </button>
          </div>
        </div>)
      }</div>
      )}
    </div>
  </section>
}

export default Soundboard
