import { useSetRecoilState } from 'recoil'
import restApiAllUser from '../util/restApiAllUser'
import restApiAuthJwt from '../util/restApiAuthJwt'
import { tokenState } from '../recoil/state/userState'

const UserService = () => {
  const setToken = useSetRecoilState(tokenState);
  // 1) 로그인 여부 설정
  const createToken = async (inputs) => {
  // const authRequest = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    const options = {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"  
      }
    }
    // return await restApiAllUser.post(process.env.REACT_APP_API_ROOT + "user/singin", {
    // return await restApiAuthJwt.post(process.env.REACT_APP_API_ROOT + "user/singin", {
    return await restApiAuthJwt.post(process.env.REACT_APP_API_ROOT + "auth/authenticate", {
      id: inputs.id,
      password: inputs.password,
    }, options)
    .then((response) => {
      setToken(response.data.data.token)
      console.log(response.data.data.token)
      return true;
    })
    .catch((e) => { 
      console.error(e)
      return false; 
    });

  }

  // 로그인 확인
  const signIn = async (inputs) => {
    return await restApiAuthJwt.post(process.env.REACT_APP_API_ROOT + "user/singin", {
      id: inputs.id,
      password: inputs.password
    })
    .then((response) => {
      console.log(response)
      return response.data.data
    })
    .catch((e)=> {
      console.error(e);
      return false;
    })
  }

  // 로그인 이후 
  const getMyUserInfo = async () => {
    return await restApiAuthJwt.get(process.env.REACT_APP_API_ROOT+"user/myinfo")
    .then((response) => {
      console.log(response)
      return response.data.data
    })
    .catch((e) => {
      console.error(e)
      return null
    })
  }

  return {
    createToken,
    signIn,
    getMyUserInfo
  }
}

export default UserService