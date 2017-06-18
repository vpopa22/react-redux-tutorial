import React from 'react'
import CategoryListContainer from '../containers/CategoryListContainer'
import AutocompleteContainer from '../containers/AutocompleteContainer'
import ListByCategoryContainer from '../containers/ListByCategoryContainer'
import '../css/App.css'

const App = () => (
  <div>
    <AutocompleteContainer />
    <CategoryListContainer />
    <ListByCategoryContainer />
  </div>
)

export default App
