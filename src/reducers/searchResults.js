const initialState = {
  items:[],
  isLoading: false
}

const searchResults = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_API_RESULTS':
      return Object.assign({}, state, {
        items: action.json.items
      });
    case 'LOAD_RESULTS_BEGIN':
      return {
        ...state,
        isLoading: true
      };
    case 'LOAD_RESULTS_END':
      return {
        ...state,
        isLoading: false
      };
    default:
      return state
  }
}

export default searchResults
