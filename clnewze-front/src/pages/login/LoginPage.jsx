import React, { useEffect, useState } from "react";
import styles from "../../scss/login/login.module.scss"
import SignInComponent from "../../components/login/SignInComponent";
import SignOnComponent from "../../components/login/SignOnConponent";
import { Modal } from "reactstrap";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isLoginOpenState } from "../../recoil/state/commonState";
import CommonContaier from "../../hooks/CommonContainer";


const LoginPage = () => {
  // 로그인 - 모달 수행
  const {toggleIsLoginOpen} = CommonContaier();
  const isLoginOpen = useRecoilValue(isLoginOpenState);

  const [changeState, setChangeState] = useState(false);
  const [view, setView] = useState();

  // 초기 설정
  useEffect(() => {
    setView(<SignInComponent changeView={changeView}/>)
  },[])

  // 각 메뉴마다 로그인 수행
  // 1 = 로그인 화면
  // 2 = 회원가입 화면
  const changeView = (index) => {
    if (index === 1) {
      setView(<SignInComponent changeView={changeView}/>)
      setChangeState(!changeState)
    }
    else if (index === 2) {
      setView(<SignOnComponent changeView={changeView}/>)
      setChangeState(!changeState)
    }
  }

  return (
    <Modal isOpen={isLoginOpen} toggle={toggleIsLoginOpen} centered={true}>
      <div className={`${styles?.modalLogin}`}>
        {view}
      </div>
    </Modal>
  );
};

export default LoginPage;
