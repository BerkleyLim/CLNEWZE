import { useRecoilState } from 'recoil';
import URI from '../util/URI'
import { userState } from '../recoil/state/userState';

const UserService = () => {
  // 필요한 state 설정
  const [user, setUser] = useRecoilState(userState);


  // 1) 로그인 여부 설정
  const isExistUserService = (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    // resolve 상태 : false 리턴 (모달 닫기, 사용자 페이지 회원 정보 접근 허용)
    // reject 상태 : true 리턴 (모달 유지, 사용자 페이지 회원 정보 접근 차단)
    URI.post(process.env.REACT_APP_API_ROOT + "auth/simplelogin", {
      id: inputs.id,
      password: inputs.password,
    })
    .then((response) => {
      if (response.data) {
        alert("로그인 성공")
        setUser({
          ...user,
          userId: "admin",
          role_admin: "admin",
          userNm: "admin",
          isLogin: true
        })
        return false;
      } else {
        alert("로그인 실패")
      }
    })
    .catch((e) => { 
      console.error(e) 
      return true;
    });
  }

  return {
    isExistUserService,
  }
}

export default UserService