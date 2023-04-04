const InitState = {
  userId: undefined,
  userNm: undefined,
  nickNm: undefined,
  role_admin: undefined,
  user_company: undefined,
  isLogin: false,  // 현재 로그인중인지 알려준다
  validated: false // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
}

const user2Reducer = (state = InitState, action) => {
  switch (action.type) {
    case "setUser2": 
      return { ...state, 
      userId: (!!action.userId) ? state.userId : action.userId,
      userNm:(!!action.userNm) ? state.userNm : action.userNm,
      nickNm:(!!action.nickNm) ? state.nickNm : action.nickNm,
      role_admin:(!!action.role_admin) ? state.role_admin : action.role_admin,
      user_company:(!!action.user_company) ? state.user_company : action.user_company,
      isLogin:(!!action.isLogin) ? state.isLogin : action.isLogin,
      validated:(!!action.validated) ? state.validated : action.validated,
    };
    case "getUser2":
      return { ...state };
    default:
      return state;
  }
}

export default user2Reducer;