import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./login.module.scss"
import URI from "../util/URI";

const LoginComponent = ({setLoginIsModal}) => {
  const [inputs, setInputs] = useState();
  const dispatch = useDispatch();

  // 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const loginButton = () => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    URI.post(process.env.REACT_APP_API_ROOT + "/api/auth/simplelogin", {
      id: inputs.id,
      password: inputs.password,
    })
    .then((response) => {
      if (response.data) {
        alert("로그인 성공")
        dispatch({type:"setUser", isLogin:response.data, userId:"admin", role_admin:"admin", userNm:"admin"});
        setLoginIsModal(false);
      } else {
        alert("로그인 실패")
      }
    })
    .catch((e) => console.error(e));
  };

  return (
    <div className={`${styles?.modalLogin}`}>
      <div className={`${styles?.loginLogo}`}></div>
      <div className={`${styles?.loginTitle}`}>로그인을 하여 주시기 바랍니다.</div>
      <div className={`${styles?.loginForm}`}>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>id : </label>
          <input
            id="exampleId"
            name="id"
            placeholder="id"
            type="id"
            className={`${styles?.flexLabelRight}`}
            onChange={onChange}
          />
        </div>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>Password : </label>
          <input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            className={`${styles?.flexLabelRight}`}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={`${styles?.loginButtonComponent}`}>
        <button
          className={`primary ${styles?.commonButton} ${styles?.loginButton}`}
          onClick={loginButton}
        >
          로그인
        </button>
        <button className={`secondary ${styles?.commonButton} ${styles?.signInButton}`}>
          회원가입
        </button>
        <button className={`secondary ${styles?.commonButton} ${styles?.findIdPasswordButton}`}>
          아이디/비밀번호 찾기
        </button>
      </div>
    </div>
  );
};

export default LoginComponent;
