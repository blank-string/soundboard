import React from 'react'
import audio from '../icons/audio.svg'

const Soundboard = ({soundboard}) => {
  console.log(soundboard)
  return <section className='section'>
    <div className='container'>
      {soundboard.sounds.map(row => <div className='columns'>{
        row.map(sound => <div className='column'>
          <div className='box'>
            <button>J</button>
            <img src={audio} />
            <span>{sound.name}</span>
            <button>S</button>
            <button>P</button>
            <button>Y</button>
          </div>
        </div>)
      }</div>
      )}
    </div>
  </section>
}

export default Soundboard
