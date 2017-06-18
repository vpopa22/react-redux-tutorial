import {filterObjDuplicatesInArray, filterDuplicatesInArray} from '../utils/filterDuplicates'

export const loadState = () => {
  try{
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch(err){
    return undefined;
  }
};

export const saveState = (state,idArray) => {
  try{
    //could be much better but not at 2 am :D
    if(idArray.length > 0 && state.searchResults.hasOwnProperty('items') && state.searchResults.items.length > 0){
      let filteredState;
      let serializedState;
      const loadedState = loadState();

      if(typeof loadedState === 'undefined'){
        filteredState = {
          searchResults:{
            items: []
          },
          storageList: []
        }
      }else{
        filteredState = loadedState;
      }

      filteredState.searchResults.items = filterObjDuplicatesInArray(filteredState.searchResults.items.concat(state.searchResults.items.filter(video => idArray.indexOf(video.id) !== -1)));
      filteredState.storageList = filterDuplicatesInArray(filteredState.storageList.concat(idArray));
      serializedState = JSON.stringify(filteredState);
      localStorage.setItem('state', serializedState);
    }

  } catch(err){
    //ignore write errors
  }
}
