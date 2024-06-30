import {useDispatch, useSelector} from "react-redux";
import {setUser} from "../redux/slice/userSlice";
import {RootState} from "../redux/store";
import UserService from "../services/UserService";
import {UserType} from "../type/user";
import {persistor} from "../index";

const UserContainer = () => {
  // api 호출할 hooks 서비스 불려오기
  const {createToken, signIn, userInfo} = UserService();
  const user: UserType = useSelector((state: RootState) => state.user)

  const dispatch = useDispatch()

  // 로그인 버튼 클릭시 메인으로 진입, 새로고침시 다시 로그인으로 돌아감
  // 여기는 Login 창을 위한 메소드, 로그인 클릭 시 동작 됨
  const handlerLogin = async (inputs: any) => {
    // 아래는 jwt 토큰을 발급 받고, 로그인 까지 성공
    // 하지만, user 정보를 myinfo API 호출 하는 과정에서
    // Bearer token 값은 front에서 넣어지지만,
    // Backend에서는 인증 토큰이 null 값 발생
    // 성공시 user 정보 출력하여 setUser에 저장로직 사용 예정

    const token = await createToken(inputs)
    sessionStorage.setItem('token', token)
    console.log(sessionStorage.getItem('token'))
    const isLogin = await signIn(inputs);
    console.log(isLogin)
    if (isLogin) {
      const data = await userInfo(inputs);
      console.log(data)
      let userObject: UserType = {
        ...user,
        uno: data?.uno,
        userName: data?.userName,
        nickName: data?.nickName,
        isLogin: true,
      }

      dispatch(setUser(userObject))
      // setUser(userObject);
      // debugger
      console.log(user)
      window.location.href = "/admin-server/main";
    } else {
      alert("로그인 실패")
    }
  };

  // 로그아웃 로직 걸침
  const logout = async () => {
    // resetUser()
    await persistor.purge()
    sessionStorage.removeItem('token'); // jwt token 제거
    sessionStorage.removeItem('refreshToken'); // jwt refreshToken 제거
    window.location.href = "/admin-server/login"
  }
  return {handlerLogin, logout};
};

export default UserContainer;
