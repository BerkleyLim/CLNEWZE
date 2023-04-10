const InitState = {
  language : "ko"
}

const userReducer = (state = InitState, action) => {
  switch (action.type) {
    case "setLanguage": 
      return {
      language:(!!action.language) ? action.language : state.language,
    };
    case "getLanguage":
      return { ...state };
    default:
      return state;
  }
}

export default userReducer;