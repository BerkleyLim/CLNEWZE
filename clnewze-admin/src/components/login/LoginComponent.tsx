import React, { useState } from 'react'
import styles from "../../css/login/login.module.scss";
import { Button, Form, Input } from "reactstrap";
import UserContainer from '../../hooks/UserContainer';
import { useNavigate } from 'react-router-dom';
import { LoginType } from '../../type/user';


const LoginComponent = () => {
  const {handlerLogin} = UserContainer();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState<LoginType | null>({id:"", password:""})

  // 아이디와 비밀번호 입력 시 이벤트 발생
  const toggleUserInfoOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInputs({
      ...inputs as LoginType,
      [name]: value
    })

    // console.log(inputs)
  }

  return (
    <Form className={`${styles?.loginFormContainer}`}>
      <div className={`p-5`}>
        <div className={`mb-3`}>
          <h2>클뉴즈 관리자 로그인</h2>
        </div>
        <div className={`mb-3`}>
          <Input
            name="id"
            type="text"
            defaultValue={inputs?.id}
            className={`form-control w-100 p-3`}
            placeholder="아이디를 입력해 주세요."
            onChange={toggleUserInfoOnchange}
          ></Input>
        </div>
        <div className={`mb-4`}>
          <Input
            name="password"
            type="password"
            defaultValue={inputs?.password}
            className={`form-control w-100 p-3`}
            placeholder="비밀번호를 입력해 주세요."
            onChange={toggleUserInfoOnchange}
          ></Input>
        </div>
        {/* 로그인 구현 처리 완료, But 아직은 로그인 처리가 불완전함, 
            jwt 인증 받고나서 다음페이지로 넘어가, 유저정보 저장이 안되는 문제가 가끔 발생 */}
        <Button size={`lg`} className={`w-100 mb-4`} onClick={() => {handlerLogin(inputs)}}>로그인</Button>
        {/* 회원가입 페이지 버튼 클릭 */}
        <Button size={`lg`} className={`w-100`} onClick={() => {navigate('/signon')}}>회원가입</Button>

      </div>
    </Form>
  )
}

export default LoginComponent