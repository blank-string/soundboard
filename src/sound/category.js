import React from 'react'
import PropTypes from 'prop-types'
import Delete from '../icons/delete'

const Suggestion = ({label, useSuggestion}) => <button className='button is-fullwidth' onClick={useSuggestion}>{label}</button>

const Category = ({
  updateCategory,
  showAllCategories,
  hideAllCategories,
  categories,
  category = ''
}) => <div className='field'>
  <div className='control'>
    <label className='label'>Category</label>
    <input
      className='input'
      type='text'
      onFocus={() => {
        if (category === '') showAllCategories()
        else updateCategory(category)
      }}
      onKeyDown={evt => {
        if (evt.key === 'Enter' || evt.key === 'Escape') hideAllCategories()
      }}
      onChange={(evt) => {
        updateCategory(evt.target.value)
        if (evt.target.value === '') showAllCategories()
      }}
      value={category}
      placeholder='Category' />
    <div>{categories.map(value => <Suggestion
      key={value}
      label={value}
      useSuggestion={() => {
        updateCategory(value)
        hideAllCategories()
      }}
    />)}
    </div>
    {categories.length > 0 ? <button onClick={hideAllCategories} className='button is-fullwidth is-info'>
      <span className='icon'><Delete /></span>
      <span>Close Suggestions</span>
    </button> : null}
  </div>
</div>

Category.propTypes = {
}

export default Category
