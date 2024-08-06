let defaultState = {
  newsData: null,
  filteredNews: null,
  userDetail: {
    profile: null,
  },
  myLanguage: null,
};

const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_NEWS_DATA": {
      console.log("news added");
      return {
        ...state,
        newsData: action.payload,
      };
    }

    case "ADD_FILTERED_NEWS": {
      console.log("Add filtered news");
      return {
        ...state,
        filteredNews: action.payload,
      };
    }

    case "ADD_USER_DETAIL": {
      return {
        ...state,
        userDetail: action.payload,
      };
    }

    case "CHANGE_LANGUAGE": {
      return {
        ...state,
        myLanguage: action.payload,
      };
    }

    default:
      return state;
  }
};

export default newsReducer;
