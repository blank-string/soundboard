import React from 'react'
import PropTypes from 'prop-types'

const Category = ({updateCategory, updateIndex, category, index}) => <div>
  <label>Category</label>
  <div className='select'>
    <select>
      <option />
      <option>Category A</option>
      <option>Category B</option>
      <option>New Category</option>
    </select>
  </div>
  <label>Index</label>
  <div className='select'>
    <select>
      <option />
      <option>0</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </select>
  </div>
  <input className='input' type='text' placeholder='New Category' />
</div>

Category.propTypes = {
  updateIndex: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  category: PropTypes.string,
  index: PropTypes.string
}

export default Category
