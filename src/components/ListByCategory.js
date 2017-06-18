import React from 'react'
import PropTypes from 'prop-types'
import ResultContainer from '../containers/ResultContainer'

const ListByCategory = ({ searchResults }) => (
  <div>
    {searchResults.map(result => (
      <ResultContainer key={result.id} result={result} />
    ))}
  </div>
)

ListByCategory.propTypes = {
  searchResults: PropTypes.array.isRequired
}

export default ListByCategory
