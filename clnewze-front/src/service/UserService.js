import restApiAllUser from '../util/restApiAllUser'
import restApiAuthJwt from '../util/restApiAuthJwt'

const UserService = () => {
  // 1) 로그인 여부 설정
  const isExistUserService = async (inputs) => {
  // const authRequest = async (inputs) => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    const options = {
      headers: {
        "Content-Type": "application/json",
        "X-Requested-With": "XMLHttpRequest"  
      }
    }
    // return await restApiAllUser.post(process.env.REACT_APP_API_ROOT + "user/singin", {
    return await restApiAuthJwt.post(process.env.REACT_APP_API_ROOT + "user/singin", {
      id: inputs.id,
      password: inputs.password,
    }, options)
    .then((response) => {
      // console.log(response.data)
      return response.data
    })
    .catch((e) => { 
      console.error(e) 
      return false
    });
  }
  // const isExistUserService = async (inputs) => {
  //   // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
  //   return await restApiAllUser.post(process.env.REACT_APP_API_ROOT + "auth/simplelogin", {
  //     id: inputs.id,
  //     password: inputs.password,
  //   })
  //   .then((response) => {
  //     return response.data
  //   })
  //   .catch((e) => { 
  //     console.error(e) 
  //     return false
  //   });
  // }

  return {
    isExistUserService,
  }
}

export default UserService