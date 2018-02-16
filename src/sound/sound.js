import React from 'react'
import styles from './styles'
import Camera from '../icons/camera'
import Add from '../icons/add'
import Save from '../icons/save'
import Delete from '../icons/delete'

const Sound = ({sound, updateName, updateFile, updateImage, saveSound}) => <section className='section'>
  <div className='container'>
    <input id='image' type='file' onChange={(evt) => updateImage(evt.target.files[0])} />
    {sound.img ? <div className={styles.newImage()} onClick={() => document.getElementById('image').click()}>
      <img alt={sound.name} src={sound.img} />
    </div>
      : <div className={styles.newImage()} onClick={() => document.getElementById('image').click()}>
        <Camera className={styles.newImageCamera()} />
        <Add className={styles.newImageAdd()} />
      </div>
    }
    <input
      onChange={(evt) => updateName(evt.target.value)}
      className={`input ${styles.name()}`}
      type='text'
      value={sound.name}
      placeholder='Sound Name'
    />
    <input
      className={`input ${styles.name()}`}
      type='text'
      placeholder='Tag'
    />
    <div className='select'>
      <select>
        <option>Category</option>
        <option>New Category</option>
      </select>
    </div>
    <div className='select'>
      <select>
        <option>Position</option>
        <option>0</option>
      </select>
    </div>
    <input
      className={`input ${styles.name()}`}
      type='text'
      value={sound.keyboardShortcut}
      placeholder='Keyboard Shortcut'
    />
    <input
      onChange={evt => updateFile(evt.target.files[0])}
      className={`input ${styles.name()}`}
      type='file'
      placeholder='Sound Location'
      accept='.mp3'
    />
    <button onClick={() => saveSound(sound)} className={`button is-large is-info ${styles.save()}`}>
      <span className='icon'>
        <Save className={styles.saveImage()} />
      </span>
      <span>Save</span>
    </button>
    <button onClick={() => saveSound(sound)} className={`button is-large is-danger ${styles.save()}`}>
      <span className='icon'>
        <Delete className={styles.saveImage()} />
      </span>
      <span>Delete</span>
    </button>
  </div>
</section>

export default Sound
