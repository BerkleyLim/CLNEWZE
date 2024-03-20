// 유저 타입
export interface UserType {
  uno: number,
  id: (undefined | string),
  userName: (undefined | string),
  nickName: (undefined | string),
  role_admin: (undefined | string),
  birthday: (undefined | string),
  user_company: (undefined | string),
  isLogin: boolean,  // 현재 로그인중인지 알려준다
  validated: boolean // 이 값은 현재 로그인중인지 아닌지 한번 서버측에 검증했음을 의미
}

// 로그인 타입
export interface LoginType {
  id: (undefined | string) ,
  password: (undefined | string)
}