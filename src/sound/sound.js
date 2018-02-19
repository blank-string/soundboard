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

const Sound = ({
  sound,
  categories,
  updateImage,
  updateName,
  updateTags,
  updateCategory,
  showAllCategories,
  hideAllCategories,
  updateIndex,
  updateKeyboardShortcut,
  updateFile,
  saveSound,
  removeSound
}) => <section className='section'>
  <div className='container'>
    <Image updateImage={updateImage} name={sound.name} img={sound.img} />
    <Name updateName={updateName} name={sound.name} />
    <Location updateFile={updateFile} location={sound.location} />
    <Tags updateTags={updateTags} tags={sound.tags} />
    <Category
      categories={categories}
      updateCategory={updateCategory}
      category={sound.category}
      showAllCategories={showAllCategories}
      hideAllCategories={hideAllCategories}
    />
    <KeyboardShortcut
      updateKeyboardShortcut={updateKeyboardShortcut}
      keyboardShortcut={sound.keyboardShortcut}
      unavailableKeyboardShortcut={sound.unavailableKeyboardShortcut}
    />
    <Save saveSound={saveSound} sound={sound} />
    <Delete removeSound={removeSound} sound={sound} />
  </div>
</section>

Sound.propTypes = {
  sound: PropTypes.object.isRequired,
  categories: PropTypes.array.isRequired,
  updateName: PropTypes.func.isRequired,
  updateFile: PropTypes.func.isRequired,
  updateImage: PropTypes.func.isRequired,
  saveSound: PropTypes.func.isRequired,
  removeSound: PropTypes.func.isRequired,
  updateTags: PropTypes.func.isRequired,
  updateIndex: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  updateKeyboardShortcut: PropTypes.func.isRequired
}

export default Sound
