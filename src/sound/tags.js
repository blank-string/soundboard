import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'

const Tags = ({updateTags, tags}) => <div className='field'>
  <label className='label'>Tags</label>
  <div>
    <div className={`field has-addons ${styles.addTag()}`}>
      <p className='control'>
        <span className='select'>
          <select>
            <option>Tag 1</option>
            <option>Tag 2</option>
            <option>Tag 3</option>
          </select>
        </span>
      </p>
      <p className='control'>
        <a className='button is-info'>Add</a>
      </p>
    </div>
    <div className={`field has-addons ${styles.addTag()}`}>
      <p className='control'>
        <input className='input' type='text' placeholder='Tag' />
      </p>
      <p className='control'>
        <a className='button is-info'>Add</a>
      </p>
    </div>
  </div>
  <div className={styles.tag()}>
    <div className='tags has-addons'>
      <span className='tag is-info'>Tag 4</span>
      <a className={`tag is-delete is-danger ${styles.deleteTag()}`} />
    </div>
  </div>
  <div className={styles.tag()}>
    <div className='tags has-addons'>
      <span className='tag is-info'>Tag 5</span>
      <a className={`tag is-delete is-danger ${styles.deleteTag()}`} />
    </div>
  </div>
</div>

Tags.propTypes = {
  updateTags: PropTypes.func.isRequired,
  tags: PropTypes.array
}

export default Tags
