import React from 'react'
import PropTypes from 'prop-types'

const Category = ({updateCategory, updateIndex, category, index}) => <div>
    Category
</div>

Category.propTypes = {
  updateIndex: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  category: PropTypes.string,
  index: PropTypes.string
}

export default Category
