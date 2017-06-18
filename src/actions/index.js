import fetchJsonp from 'fetch-jsonp'
require('es6-promise').polyfill();

////////////////////////
//searchResults actions//
//////////////////////

export const searchYoutubeApiForIds = query => {
  return (dispatch,getState) => {
      if(!getState().searchResults.isLoading){
        dispatch(loadResultsBegin());
        return fetchJsonp("https://www.googleapis.com/youtube/v3/search?part=id&type=video&maxResults=50&q="+ encodeURIComponent(query) +"&key=AIzaSyDBbDDgYqgElsf8exGl-uaZSBTe8IJeM7s")
          .then(response => response.json())
          .then(json => dispatch(getVideosByIds(json)));
      }else{
        return Promise.resolve()
      }
    }
}

export const getVideosByIds = json => {
  let idList = '';
  json.items.map(result => (
    idList+=result.id.videoId + ', '
  ));
  idList= idList.substr(0, idList.length-2);

  return dispatch => {
      return fetchJsonp("https://www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id="+ encodeURIComponent(idList) +"&key=AIzaSyDBbDDgYqgElsf8exGl-uaZSBTe8IJeM7s")
        .then(response => response.json())
        .then(json => {
          dispatch(loadResultsEnd());
          return dispatch(receivePosts(json));
        });
    }
}

export const receivePosts = json => {
  console.log(json);
  return{
    type: 'SET_API_RESULTS',
    json: json
  }
}

export const loadResultsBegin = () => {
  return {
    type: 'LOAD_RESULTS_BEGIN'
  };
}

export const loadResultsEnd = () => {
  return {
    type: 'LOAD_RESULTS_END'
  };
}

////////////////////////
//autocomplete actions: //
////////////////////////

export const loadSuggestions = value => {
  return dispatch => {
    dispatch(loadSuggestionsBegin());
    return fetchJsonp("//clients1.google.com/complete/search?hl=en&output=youtube&q=" + value)
      .then(response => response.json())
      .then(function(json) {
        if(json.length > 2){
          let suggestions = [];
          let response = json[1];
          if(response.length > 4){
            response = response.slice(0,4);
          }
          response.forEach((entry)=>{
            suggestions.push({name: entry[0]});
          });
          dispatch(maybeUpdateSuggestions(suggestions, value));
        }
      })
  };
}

export const updateInputValue = value => {
  return {
    type: 'UPDATE_INPUT_VALUE',
    value
  };
}

export const clearSuggestions = () => {
  return {
    type: 'CLEAR_SUGGESTIONS'
  };
}

export const loadSuggestionsBegin = () => {
  return {
    type: 'LOAD_SUGGESTIONS_BEGIN'
  };
}

export const maybeUpdateSuggestions = (suggestions, value) => {
  return {
    type: 'MAYBE_UPDATE_SUGGESTIONS',
    suggestions,
    value
  };
}

////////////////////////
//categories actions: //
////////////////////////
export const getCategories = json => {
  return dispatch => {
      return fetchJsonp("https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=RO&key=AIzaSyDBbDDgYqgElsf8exGl-uaZSBTe8IJeM7s")
        .then(response => response.json())
        .then(json => dispatch(loadCategories(json)));
    }
}

export const loadCategories = json => {
  console.log(json);
  return{
    type: 'LOAD_CATEGORIES',
    json: json
  }
}


////////////////////////
//categoryFilter actions: //
////////////////////////


export const setCategoryFilter = categoryId => {
  return {
    type: 'SET_CATEGORY_FILTER',
    categoryId: categoryId
  }
}


////////////////////////
//storageList actions: //
////////////////////////

export const saveVideoToStorage = videoId => {
  return {
    type: 'ADD_VIDEO_ID_TO_LIST',
    videoId: videoId
  }
}
