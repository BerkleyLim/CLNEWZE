const InitState = {
  bno:undefined,
  startDate:undefined,
  endDate:undefined,
  detail:undefined,
};

function blogReducer(state = InitState, action) {
  switch (action.type) {
    case "setBlog":
      return { ...state, 
        cno: (!!action.cno) ? state.cno : action.cno,
        startDate:(!!action.startDate) ? state.startDate : action.startDate,
        endDate:(!!action.endDate) ? state.endDate : action.endDate,
        detail:(!!action.endDate) ? state.endDate : action.endDate,
      };
    case "getBlog":
      return { ...state };
    default:
      return { state };
  }
}

export default blogReducer;