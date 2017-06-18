import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ categoryTitle, onClick }) => {
  return (
    <button
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {categoryTitle}
    </button>
  )
}

Category.propTypes = {
  categoryTitle: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Category
