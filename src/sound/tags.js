import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Tags = ({updateTags, tags}) => <div className={styles.tags()}>
  <div className='field has-addons'>
    <div className='control'>
      <input className='input' type='text' placeholder='Tag' />
    </div>
    <div className='control'>
      <a className='button is-info'>Add</a>
    </div>
  </div>
  <div className='tags has-addons'>
    <span className='tag is-info'>Alex Smith</span>
    <a className='tag is-delete is-danger' />
  </div>
  <div className='tags has-addons'>
    <span className='tag is-info'>Alex Smith</span>
    <a className='tag is-delete is-danger' />
  </div>
</div>

Tags.propTypes = {
  updateTags: PropTypes.func.isRequired,
  tags: PropTypes.array
}

export default Tags
