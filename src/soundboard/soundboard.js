import React from 'react'
import styles from './styles'
import Image from './image'
import Buttons from './buttons'

const Soundboard = ({soundboard}) => <section>
  <audio id='audio' />
  <div className='container'>
    <div className={styles.sounds()}>
      {soundboard.sounds.map(sound => <div key={sound.uuid} className={styles.sound(sound.exists)}>
        <audio id={sound.uuid} src={sound.location} />
        <Image img={sound.img} title={sound.title} />
        <h1 className={`subtitle ${styles.title()}`}>{sound.name}</h1>
        <div className='has-text-centered'>{sound.tags.map(tag => <span key={tag} className={`tag is-info ${styles.tag()}`}>{tag}</span>)}</div>
        <div className='has-text-centered'>
          <span className='has-text-grey'>{
            window.api.keyboardShortcutToString(sound.keyboardShortcut)
          }</span>
        </div>
        <Buttons location={sound.location} uuid={sound.uuid} />
      </div>)
      }
    </div>
  </div>
</section>

export default Soundboard
