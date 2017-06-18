const categories = (state = {items: []}, action) => {
  switch (action.type) {
    case 'LOAD_CATEGORIES':
      return Object.assign({}, state, {
        items: action.json.items
      });
    default:
      return state
  }
}

export default categories
