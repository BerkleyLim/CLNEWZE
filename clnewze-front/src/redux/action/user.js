const InitState = {
  userId: undefined,
  userNm: undefined,
  nickNm: undefined,
  role_admin: undefined,
  user_company: undefined,
  isLogin: false,  // 현재 로그인중인지 알려준다
  validated: false // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
}

const userReducer = (state = InitState, action) => {
  switch (action.type) {
    case "setUser": 
      return {
      userId: (!!action.userId) ? action.userId : state.userId,
      userNm:(!!action.userNm) ? action.userNm : state.userNm,
      nickNm:(!!action.nickNm) ? action.nickNm : state.nickNm,
      role_admin:(!!action.role_admin) ? action.role_admin : state.role_admin,
      user_company:(!!action.user_company) ? action.user_company : state.user_company,
      isLogin:(!!action.isLogin) ? action.isLogin : state.isLogin,
      validated:(!!action.validated) ? action.validated : state.validated,
    };
    case "getUser":
      return { ...state };
    case "logout":
      return InitState;
    default:
      return state;
  }
}

export default userReducer;