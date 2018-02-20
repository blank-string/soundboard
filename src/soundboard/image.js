import React from 'react'
import Audio from '../icons/audio'
import styles from './styles'

const Image = ({img, title}) => <div className={styles.imageContainer()}>
  <figure className={`image ${styles.figure()}`}>
    {img ? <img className={styles.image()} alt={title} src={img} /> : <Audio className={styles.audio()} />}
  </figure>
</div>

export default Image
