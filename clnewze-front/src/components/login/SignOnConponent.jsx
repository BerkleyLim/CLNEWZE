import React, { useState } from "react";
import styles from "../../scss/login/login.module.scss"

const SignOnComponent = ({changeView}) => {
  const [inputs, setInputs] = useState();

  // 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  return (
    <>
      <div className={`${styles?.loginLogo}`}></div>
      <div className={`${styles?.loginTitle}`}>회원가입안내</div>
      <div className={`${styles?.loginForm}`}>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>id : </label>
          <input
            name="id"
            placeholder="id"
            type="text"
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
          />
        </div>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>Username : </label>
          <input
            name="username"
            placeholder="username"
            type="text"
            className={`${styles?.flexLabelRight}`}
            onChange={onChange}
          />
        </div>
        <div className={`${styles?.flexInput}`}>
          <label className={`${styles?.flexLabelLeft}`}>Phone : </label>
          <input
            name="phone"
            placeholder="phone"
            type="text"
            className={`${styles?.flexLabelRight}`}
            onChange={onChange}
          />
        </div>
      </div>
      <div className={`${styles?.loginButtonComponent}`}>
        <button
          className={`primary ${styles?.commonButton} ${styles?.loginButton}`}
          onClick={() => changeView(1)}
        >
          이전화면
        </button>
        <button className={`secondary ${styles?.commonButton} ${styles?.signInButton}`}>
          회원가입
        </button>
        <button className={`secondary ${styles?.commonButton} ${styles?.findIdPasswordButton}`}>
          다음
        </button>
      </div>
    </>
  );
}

export default SignOnComponent