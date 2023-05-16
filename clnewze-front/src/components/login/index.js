import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./login.scss"
import URI from "../util/URI";

const LoginComponent = () => {
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
        dispatch({type:"setUser", isLogin:response.data, userId:"admin", role_admin:"admin"});
      } else {
        alert("로그인 실패")
      }
    })
    .catch((e) => console.error(e));
  };

  return (
    <div className="modal-login">
      <div className="login-logo"></div>
      <div className="login-title">로그인을 하여 주시기 바랍니다.</div>
      <div className="login-form">
        <div className="flex-input">
          <label className="flex-label-left">id : </label>
          <input
            id="exampleId"
            name="id"
            placeholder="id"
            type="id"
            className="flex-label-right"
            onChange={onChange}
          />
        </div>
        <div className="flex-input">
          <label className="flex-label-left">Password : </label>
          <input
            id="examplePassword"
            name="password"
            placeholder="Password"
            type="password"
            className="flex-label-right"
            onChange={onChange}
          />
        </div>
      </div>
      <div className="login-button-component">
        <button
          className="primary common-button login-button"
          onClick={loginButton}
        >
          로그인
        </button>
        <button className="secondary common-button sign-in-button">
          회원가입
        </button>
        <button className="secondary common-button find-id-password-button">
          아이디/비밀번호 찾기
        </button>
      </div>
      {/* <div style={{padding:"20px 20px 20px 20px"}}>
            <br></br>
            <p># 다음은 로그인 폼 UI를 어떻게 할지, 또는 권한을 무엇으로 드려야 할지 고민중입니다.</p>
            <p> berkleylim16@gmail.com 으로 아이디어를 제시해주시면 감사드립니다. </p>
          </div> */}
    </div>
  );
};

export default LoginComponent;
