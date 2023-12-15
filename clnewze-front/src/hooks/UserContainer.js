import { useRecoilState, useResetRecoilState } from "recoil";
import { userState } from "../recoil/state/userState";
import UserService from "../service/UserService";

// container 부분
const UserContainer = () => {
  const [user, setUser] = useRecoilState(userState);
  const logout = useResetRecoilState(userState);
  const { isExistUserService } = UserService()

  // 로그인 처리 함수
  const handlerLogin = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    // resolve 상태 : true 리턴 (모달 닫기, 사용자 페이지 회원 정보 접근 허용)
    // reject 상태 : false 리턴 (모달 유지, 사용자 페이지 회원 정보 접근 차단)
    return await isExistUserService(inputs);
  }

  // 회원정보 다시 확인용 로그인 처리 함수 (API 호출은 필요 없다.)
  const handlerMyPageLogin = (inputs) => {
    return isExistUserService(inputs);
  }



  // 로그아웃 함수
  const handlerLogout = () => {
    logout()
    
  }

  return {handlerLogin, handlerLogout, handlerMyPageLogin}
}

export default UserContainer