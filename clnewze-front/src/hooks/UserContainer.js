import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../recoil/state/userState";
import UserService from "../service/UserService";
import { myPageMenuState } from "../recoil/state/myPageHeaderState";
import UseApi from "../util/UseApi"

// container 부분
const UserContainer = () => {
  const [user, setUser] = useRecoilState(userState);
  const logout = useResetRecoilState(userState);
  const myPageMenuRefresh = useResetRecoilState(myPageMenuState); // 마이페이지 번호 default로 변경
  const { signIn, createToken, userInfo } = UserService();

  // 로그인 처리 함수
  const handlerLogin = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    // resolve 상태 : true 리턴 (모달 닫기, 사용자 페이지 회원 정보 접근 허용)
    // reject 상태 : false 리턴 (모달 유지, 사용자 페이지 회원 정보 접근 차단)
    
    
    
    const token = await createToken(inputs)
    sessionStorage.setItem('token',token)
    // console.log(sessionStorage.getItem('token'))
    // console.log(isLogin)
    // }
    // const data = await createToken(inputs)
    const isLogin = await signIn(inputs)

    // 이 함수는 로그인 성공시 모달 창 닫게 하기 위한 용도
    let isReturnSuccessLogin = false;
    if (isLogin) {
      const data = await userInfo();
      if (!!data) {
        // 아직 로그인 구현 중이니 순수 하드코딩으로만 로그인 처리 된 것처럼 만들기
        // 하드코딩으로 테스트 하기
        alert("로그인 성공")
        setUser({
          ...user,
          uno: data?.uno,
          id: data?.id,
          role_admin: "ROLE_USER",
          userName: data?.userName,
          birthday: data?.birthday,
  
          isLogin: true // 순수 프론트엔드에서만 로그인 중인지만 확인
        })
        isReturnSuccessLogin = true;
      } else {
        alert("로그인 실패, bearer token 백엔드에 저장되도록 구현해야함, 하드코딩 로그인")
        setUser({
          ...user,
          uno: 2,
          id: "admin",
          role_admin: "ROLE_USER",
          userName: "관리자",
          birthday: "1993-11-11",
  
          isLogin: true // 순수 프론트엔드에서만 로그인 중인지만 확인
        })
        isReturnSuccessLogin = true;
      }
    } else {
      alert("로그인 실패")
    }
    myPageMenuRefresh(); // 로그인 시 myPage 메뉴 default 값으로 변경
    // return data;
    return isReturnSuccessLogin;
  }

  // 회원정보 다시 확인용 로그인 처리 함수 (API 호출은 필요 없다.)
  const handlerMyPageLogin = async (inputs) => {
    const data = await signIn(inputs)
    if (data) {
      alert("로그인 성공")
    } else {
      alert("로그인 실패")
    }
    return data;
  }



  // 로그아웃 함수
  const handlerLogout = () => {
    delete UseApi.defaults.headers['Authorization'];

    // debugger;
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("refresh_token");
    logout() // 로그아웃 시 state 값 초기화
    myPageMenuRefresh(); // 로그 아웃 시 myPage 메뉴 default 값 변경
  }

  return {handlerLogin, handlerLogout, handlerMyPageLogin}
}

export default UserContainer