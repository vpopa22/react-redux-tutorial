import { combineReducers } from 'redux'
import searchResults from './searchResults'
import categoryFilter from './categoryFilter'
import autocomplete from './autocomplete'
import categories from './categories'
import storageList from './storageList'

const searchApp = combineReducers({
  searchResults,
  autocomplete,
  categories,
  categoryFilter,
  storageList
})

export default searchApp
