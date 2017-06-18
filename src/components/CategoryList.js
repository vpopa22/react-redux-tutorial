import React, { Component } from 'react';
import CategoryContainer from '../containers/CategoryContainer'
import '../css/CategoryList.css'

class CategoryList extends Component {
  componentDidMount() {
    this.props.loadCategories()
  }
  render(){
    return (
      <div className='categoryList'>
        <CategoryContainer key='begv76wqevwq7yte' categoryId='0' categoryTitle='All Categories' />
        {this.props.categories.items.map(category => (
          <CategoryContainer
            key = {category.id}
            categoryId = {category.id}
            categoryTitle = {category.snippet.title}
          />
        ))}
      </div>
    )
  }
}

export default CategoryList
