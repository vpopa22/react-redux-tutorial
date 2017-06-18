const storageList = (state = [], action) => {
  switch (action.type) {
    case 'ADD_VIDEO_ID_TO_LIST':
      return [...state,action.videoId]
    default:
      return state
  }
}

export default storageList
