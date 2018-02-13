import React from 'react'
import audio from '../icons/audio.svg'

const Soundboard = ({soundboard}) => {
  console.log(soundboard)
  return <section className='section'>
    <div className='container'>
      {soundboard.sounds.map(row => <div className='columns'>{
        row.map(sound => <div className='column'>
          <div className='box'>
            <img src={audio} />
          </div>
        </div>)
      }</div>
      )}
    </div>
  </section>
}

export default Soundboard
