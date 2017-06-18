import { connect } from 'react-redux'
import { setCategoryFilter } from '../actions'
import Category from '../components/Category'

const mapStateToProps = (state, ownProps) => {
  return {
    categoryTitle: ownProps.categoryTitle
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setCategoryFilter(ownProps.categoryId))
    }
  }
}

const CategoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Category)

export default CategoryContainer
