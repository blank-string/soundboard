import React from 'react'
import PropTypes from 'prop-types'
import Camera from '../icons/camera'
import Add from '../icons/add'
import styles from './styles'

const NewImage = () => <div
  className={styles.imageContainer()}
  onClick={() => document.getElementById('image').click()}>
  <Camera className={styles.newImageCamera()} />
  <Add className={styles.newImageAdd()} />
</div>

const ExistingImage = ({name, img}) => <div
  className={styles.imageContainer()}
  onClick={() => document.getElementById('image-file').click()}>
  <img
    id='img'
    className={styles.image()}
    alt={name}
    src={img}
    onError={() => { document.getElementById('img').src = '/images/audio.svg' }} />
</div>

ExistingImage.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string
}

const Image = ({updateImage, name, img}) => <div>
  <input
    className={styles.hiddenFile()}
    id='image-file'
    type='file'
    onChange={(evt) => updateImage(evt.target.files[0])} />
  {img ? <ExistingImage name={name} img={img} /> : <NewImage />}
</div>

Image.propTypes = {
  updateImage: PropTypes.func.isRequired,
  name: PropTypes.string,
  img: PropTypes.string
}

export default Image
