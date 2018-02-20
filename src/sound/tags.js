import React from 'react'
import Suggestions from '../suggestions'

const Tags = (
  {
    addTag,
    updateTag,
    showAllTags,
    hideAllTags,
    tags,
    tag,
    soundTags
  }
) => {
  console.log('tag:', tag, 'tags:', tags, 'soundTags:', soundTags)
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
  </div>
}

export default Tags
