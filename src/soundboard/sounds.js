import React from 'react'

const Sounds = ({sounds}) => <div>
  <audio id='audio' />
  {Object.keys(sounds)
    .sort((left, right) => {
      if (left === 'No Category') return -2
      if (right === 'No Category') return 2
      if (left < right) return -1
      if (right < left) return 1
      return 0
    })
    .map(key => {
      const category = sounds[key]
      return <div className='card'>
        <header className='card-header'>
          <p className='card-header-title'>
            {category.label}
          </p>
          <a href='#' className='card-header-icon' aria-label='more options'>
            <span className='icon'>
              D
            </span>
          </a>
          <a href='#' className='card-header-icon' aria-label='more options'>
            <span className='icon'>
              X
            </span>
          </a>
        </header>
        <div className='card-content'>
          {category.sounds.map(sound => {
            return <span>{sound.name}</span>
          })}
        </div>
      </div>
    })}
</div>

export default Sounds

/*

import styles from './styles'
import Image from './image'
import Buttons from './buttons'

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
</div> */
