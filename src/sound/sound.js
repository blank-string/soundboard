import React from 'react'
import PropTypes from 'prop-types'

import Image from './image'
import Name from './name'
import Tags from './tags'
import Category from './category'
import KeyboardShortcut from './keyboard-shortcut'
import Location from './location'
import Save from './save'
import Delete from './delete'

const Sound = ({sound, updateName, updateFile, updateImage, saveSound, removeSound}) => <section className='section'>
  <div className='container'>
    <Image updateImage={updateImage} name={sound.name} img={sound.img} />
    <Name updateName={updateName} name={sound.name} />
    <Tags />
    <Category />
    <KeyboardShortcut />
    <Location updateFile={updateFile} />
    <Save saveSound={saveSound} />
    <Delete removeSound={removeSound} sound={sound} />
  </div>
</section>

Sound.propTypes = {
  sound: PropTypes.object.isRequired,
  updateName: PropTypes.func.isRequired,
  updateFile: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
  saveSound: PropTypes.func.isRequired,
  removeSound: PropTypes.func.isRequired
}

export default Sound
