import React from 'react'
import Audio from '../icons/audio'
import Stop from '../icons/stop'
import Play from '../icons/play'
import Sync from '../icons/sync'
import Wrench from '../icons/wrench'
import styles from './styles'

const Soundboard = ({soundboard}) => {
  console.log(soundboard)
  return <section className='section'>
    <div className='container'>
      {soundboard.sounds.map(row => <div className='columns'>{
        row.map(sound => <div className='column is-half-mobile is-one-third-tablet is-one-quatr'>
          <div className='box'>
            <div className={styles.imageContainer()}>
              <figure className={`image ${styles.image()}`}>
                <Audio className={styles.audio()} />
              </figure>
            </div>
            <h1 className={`title ${styles.title()}`}>{sound.name}</h1>
            <div className={styles.buttons()}>
              <button className='button'>
                <span className='icon'>
                  <Stop className={styles.icon()} />
                </span>
              </button>
              <button className='button'>
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
          </div>
        </div>)
      }</div>
      )}
    </div>
  </section>
}

export default Soundboard
