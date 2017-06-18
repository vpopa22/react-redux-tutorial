const categoryFilter = (state = 0, action) => {
  switch (action.type) {
    case 'SET_CATEGORY_FILTER':
    console.log(action.categoryId);
      return action.categoryId
    default:
      return state
  }
}

export default categoryFilter
