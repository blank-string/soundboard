import React from 'react'
import styles from './styles'
import camera from '../icons/camera.svg'
import add from '../icons/add.svg'
import save from '../icons/save.svg'

const Sound = ({sound, updateName, updateFile, saveSound}) => <section className='section'>
  <div className='container'>
    <div className={styles.newImage()}>
      <img alt='new' className={styles.newImageCamera()} src={camera} />
      <img alt='' className={styles.newImageAdd()} src={add} />
    </div>
    <input
      onChange={(evt) => updateName(evt.target.value)}
      className={`input ${styles.name()}`}
      type='text'
      value={sound.name}
      placeholder='Sound Name'
    />
    <span>{sound.location}</span>
    <input
      onChange={evt => updateFile(evt.target.files[0])}
      className={`input ${styles.name()}`}
      type='file'
      placeholder='Sound Location'
      accept='.mp3'
    />
    <button onClick={() => saveSound(sound)} className={`button is-large is-info ${styles.save()}`}>
      <img alt='save' className={styles.saveImage()} src={save} />
      <span>Save</span>
    </button>
  </div>
</section>

export default Sound
