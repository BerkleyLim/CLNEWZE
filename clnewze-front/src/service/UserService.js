import axios from 'axios'
import UseApi from '../util/UseApi'


// 이부분은 API 호출하는 파일
const UserService = () => {
  /**
   * 1) 로그인 시 토큰을 생성하여 진행 한다.
   */
  const createToken = async (user) => {
    return await UseApi.post(process.env.REACT_APP_API_ROOT + 'auth/authenticate' ,user)
    // return await UseApi.post('/api/auth/authenticate' ,user)
      .then((response) => {
        return response.data.data
      })
      .catch ((e) => {
        console.error(e)
        return null;
      })
  }

  /**
   * 2) 로그인 시도를 위한 API를 호출 한다.
   */
  const signIn = async (user) => {
    return await UseApi.post(process.env.REACT_APP_API_ROOT + 'user/signin' ,user)
    // return await UseApi.post('/api/user/signin' ,user)
      .then((response) => {
        return response.data.data
      })
      .catch((e) => {
        console.error(e)
        return null;
      })
  }

  /**
   * 3) 로그인 이후, 사용자 정보를 받아온다.
   */
  const userInfo = async (user) => {
    return await UseApi.get(process.env.REACT_APP_API_ROOT + 'user/myinfo', {withCredentials: true})
    // return await UseApi.get('/api/user/myinfo')
      .then(async (response) => {
        return await response.data.data
      })
      .catch((e) => {
        console.error(e)
        return null;
      })
  }

  /**
   * 4) 회원 가입을 위한 API를 호출한다.
   */
  const signUp = async (user) => {
    return await UseApi.post(process.env.REACT_APP_API_ROOT + 'user/signup', user)
    // return await UseApi.post('/api/user/signup', user)
    .then((response) => {
      return response.data
    })
    .catch((e) => {
      console.error(e)
      return null;
    })
  }

  /**
   * 5) 로그인 하지 않은 사용자 및 타 사용자가 접근한다.
   *   프로필 조회 할때 쓰이는 API
   */
  const getMyProfileUserInfo = async (id) => {
    return await UseApi.get(process.env.REACT_APP_API_ROOT + "user/profile?"
      + "id=" + id
    ).then((response) => {
      return response.data.data
    })
    .catch((e) => {
      console.error(e);
      return null;
    })
  }

  return {createToken, signIn, userInfo, signUp, getMyProfileUserInfo}
}

export default UserService