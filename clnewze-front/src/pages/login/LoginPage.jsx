import React, { useEffect, useState } from "react";
import styles from "../../scss/login/login.module.scss"
import SignInComponent from "../../components/login/SignInComponent";
import SignOnComponent from "../../components/login/SignOnConponent";
import { Modal } from "reactstrap";


const LoginPage = () => {
  // 로그인
  const [loginIsModal, setLoginIsModal] = useState(false);
  const modalToggle = () => setLoginIsModal(!loginIsModal);

  const [changeState, setChangeState] = useState(false);
  const [view, setView] = useState();

  // 초기 설정
  useEffect(() => {
    setView(<SignInComponent setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
  },[])

  const changeView = (index) => {
    if (index === 1) {
      setView(<SignInComponent setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
      setChangeState(!changeState)
    }
    else if (index === 2) {
      setView(<SignOnComponent setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
      setChangeState(!changeState)
    }
  }

  return (
    <Modal isOpen={loginIsModal} toggle={modalToggle} centered={true}>
      <div className={`${styles?.modalLogin}`}>
        {view}
      </div>
    </Modal>
  );
};

export default LoginPage;
