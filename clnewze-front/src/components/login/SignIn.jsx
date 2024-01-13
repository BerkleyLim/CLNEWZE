import React, { useState } from "react";
import styles from "./login.module.scss"
import UserContainer from "../../hooks/UserContainer";

const SignIn =  ({setLoginIsModal, changeView}) => {
  const [inputs, setInputs] = useState();
  const { handlerLogin } = UserContainer();

  // 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // password 입력 후 enter 로직
  const onKeyDownEnter = (e) => {
    if (e.keyCode === 13) {
      loginButton();
    }
  }


  // 로그인 버튼 클릭 시
  const loginButton = async () => {
    // 입력 (차후 복잡한 권한을 부여 받을 예정 => jwt 도입 예정)
    const isNotClose = await handlerLogin(inputs)
    await setLoginIsModal(!isNotClose) 
  };

  return (
    <>
      <div className={`${styles?.loginLogo}`}></div>
      <div className={`${styles?.loginTitle}`}>로그인을 하여 주시기 바랍니다.</div>
      <div className={`${styles?.loginForm}`}>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>id : </label>
          <input
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
            name="password"
            placeholder="Password"
            type="password"
            className={`${styles?.flexLabelRight}`}
            onChange={onChange}
            onKeyDown={(e) => {
              onKeyDownEnter(e)
            }}
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
        <button className={`secondary ${styles?.commonButton} ${styles?.signInButton}`}
          onClick={() => changeView(2)}>
          회원가입
        </button>
        <button className={`secondary ${styles?.commonButton} ${styles?.findIdPasswordButton}`}>
          아이디/비밀번호 찾기
        </button>
      </div>
    </>
  );
};

export default SignIn;
