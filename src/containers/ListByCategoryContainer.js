import { connect } from 'react-redux'
import ListByCategory from '../components/ListByCategory'

const getVisibleResults = (searchResults, categoryFilter) => {
  if(parseInt(categoryFilter) !== 0 && searchResults.items.length > 0){
    return searchResults.items.filter(result => result.snippet.categoryId === categoryFilter);
  }else{
    return searchResults.items;
  }

}

const mapStateToProps = state => {
  console.log(state);
  return {
    searchResults: getVisibleResults(state.searchResults, state.categoryFilter)
  }
}

const ListByCategoryContainer = connect(
  mapStateToProps
)(ListByCategory)

export default ListByCategoryContainer
