import React from 'react'
import Tabs from './tabs'
import Sounds from './sounds'

const Soundboard = ({toggleCategory, toggleTag, soundboard}) => <section>
  <div className='container'>
    <Tabs tabs={soundboard.categories} toggle={toggleCategory} />
    <Tabs tabs={soundboard.tags} toggle={toggleTag} />
    <Sounds sounds={soundboard.sounds} />
  </div>
</section>

export default Soundboard
