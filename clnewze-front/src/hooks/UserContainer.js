import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../recoil/state/userState";
import UserService from "../service/UserService";
import { myPageMenuState } from "../recoil/state/myPageHeaderState";

// container 부분
const UserContainer = () => {
  const [user, setUser] = useRecoilState(userState);
  const logout = useResetRecoilState(userState);
  const myPageMenuRefresh = useResetRecoilState(myPageMenuState); // 마이페이지 번호 default로 변경
  const { isExistUserService } = UserService();

  // 로그인 처리 함수
  const handlerLogin = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    // resolve 상태 : true 리턴 (모달 닫기, 사용자 페이지 회원 정보 접근 허용)
    // reject 상태 : false 리턴 (모달 유지, 사용자 페이지 회원 정보 접근 차단)
    const data = await isExistUserService(inputs)
    if (data) {
      alert("로그인 성공")
      setUser({
        ...user,
        userId: "admin",
        role_admin: "admin",
        userNm: "admin",
        isLogin: true
      })
    } else {
      alert("로그인 실패")
    }
    myPageMenuRefresh(); // 로그인 시 myPage 메뉴 default 값으로 변경
    return data;
  }

  // 회원정보 다시 확인용 로그인 처리 함수 (API 호출은 필요 없다.)
  const handlerMyPageLogin = async (inputs) => {
    const data = await isExistUserService(inputs)
    if (data) {
      alert("로그인 성공")
    } else {
      alert("로그인 실패")
    }
    return data;
  }



  // 로그아웃 함수
  const handlerLogout = () => {
    logout() // 로그아웃 시 state 값 초기화
    myPageMenuRefresh(); // 로그 아웃 시 myPage 메뉴 default 값 변경
  }

  return {handlerLogin, handlerLogout, handlerMyPageLogin}
}

export default UserContainer