- npm install
- npm i react-thunk
- npm i redux
- npm i react-autosuggest
- npm i fetch-jsonp
- npm start

Builded using create-react-app

Didnt get a chance to do:
 - error handling for video results calls
 - error handling for categorylist call
 - a way to visualy identify the current selected category
 - save button should disappear for persistent list(or be replaced by a remove button)
 - constants directory for better transparency
 - tests would be nice

Things i`m not proud of:
 - saving to storage
 - documentation
 - proptypes implementation not complete

State structure:
- autocomplete: used https://github.com/moroshko/react-autosuggest
  - isLoading: bool
  - suggestions: []
  - value: string (inputValue\query)
- categories:
  - items: [] - contains the response items from : www.googleapis.com/youtube/v3/videoCategories
- searchResults:
  - isLoading: bool
  - items: [] - contains the response items from : www.googleapis.com/youtube/v3/videos?part=statistics,snippet&id=[list of comma separated video ids] after a call to www.googleapis.com/youtube/v3/search?part=id&type=video to get the videoIds
- storageList: [] - contains the videoIds that will be saved to localStorage
- categoryFilter: - contains the current categoryId


Project structure is the same with the one in the tutorial (Presentation Components(components)/ Container Components(containers)/reducers/actions/utils)

My first react app yeey :D !
