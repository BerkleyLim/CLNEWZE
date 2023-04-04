const InitState = {
  cno:undefined,
  startDate:undefined,
  endDate:undefined,
  detail:undefined,
};

function careerReducer(state = InitState, action) {
  switch (action.type) {
    case "setCareer":
      return { ...state, 
        cno: (!!action.cno) ? state.cno : action.cno,
        startDate:(!!action.startDate) ? state.startDate : action.startDate,
        endDate:(!!action.endDate) ? state.endDate : action.endDate,
        detail:(!!action.endDate) ? state.endDate : action.endDate,
      };
    case "getCareer":
      return { ...state };
    default:
      return { state };
  }
}

export default careerReducer;