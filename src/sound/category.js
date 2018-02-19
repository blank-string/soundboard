import React from 'react'
import Suggestions from '../suggestions'

const Category = (
  {
    updateCategory,
    showAllCategories,
    hideAllCategories,
    categories,
    category
  }
) => <Suggestions
  update={updateCategory}
  showAll={showAllCategories}
  hideAll={hideAllCategories}
  suggestions={categories}
  value={category}
  label='Categories'
/>

export default Category
