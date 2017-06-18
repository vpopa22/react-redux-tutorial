import {connect} from 'react-redux'
import {getCategories} from '../actions'
import CategoryList from '../components/CategoryList'

const mapStateToProps = (state) => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCategories: () => {
      dispatch(getCategories())
    }
  }
}

const CategoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList)

export default CategoryListContainer
