import { useRecoilState } from 'recoil';
import URI from '../util/URI'
import { userState } from '../recoil/state/userState';

const UserService = () => {
  // 필요한 state 설정
  const [user, setUser] = useRecoilState(userState);

  // 1) 로그인 여부 설정
  const isExistUserService = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    return await URI.post(process.env.REACT_APP_API_ROOT + "auth/simplelogin", {
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
      } else {
        alert("로그인 실패")
      }
      return response.data
    })
    .catch((e) => { 
      console.error(e) 
      return false
    });
  }

  return {
    isExistUserService,
  }
}

export default UserService