import React from 'react'
import PropTypes from 'prop-types'

const Category = ({updateCategory, category, index}) => <div>
    Category
</div>

Category.propTypes = {
  updateCategory: PropTypes.func.isRequired,
  category: PropTypes.string,
  index: PropTypes.string
}

export default Category
