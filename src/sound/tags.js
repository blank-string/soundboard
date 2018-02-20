import React from 'react'
import Suggestions from '../suggestions'
import styles from './styles'

const Tags = ({
  addTag,
  removeTag,
  updateTag,
  showAllTags,
  hideAllTags,
  tags,
  tag,
  soundTags
}) => {
  return <div>
    <Suggestions
      update={updateTag}
      showAll={showAllTags}
      hideAll={hideAllTags}
      suggestions={tags}
      value={tag}
      label='Tags'
      add={addTag}
    />
    <div>
      {soundTags.map(soundTag => <div key={soundTag} className={`tags has-addons ${styles.tag()}`}>
        <span className='tag is-info'>{soundTag}</span>
        <button className={`tag is-delete is-danger ${styles.deleteTag()}`} onClick={() => removeTag(soundTag)} />
      </div>)}
    </div>
  </div>
}

export default Tags
