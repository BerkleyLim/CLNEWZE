import React from "react";
import styles from "../../../scss/common/login/login.module.scss"
import SignInComponent from "../../../components/commom/login/SignInComponent";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { useRecoilValue } from "recoil";
import { isLoginOpenState } from "../../../recoil/state/commonState";
import CommonContainer from "../../../hooks/CommonContainer";


const LoginPage = () => {
  // 로그인 - 모달 수행
  const {toggleIsLoginOpen} = CommonContainer();
  const isLoginOpen = useRecoilValue(isLoginOpenState);

  return (
    <Modal isOpen={isLoginOpen} toggle={toggleIsLoginOpen} centered={true}>
      <ModalHeader toggle={toggleIsLoginOpen}>Clnewze 로그인</ModalHeader>
      <ModalBody className={`${styles?.modalLogin}`}>
        <SignInComponent />
      </ModalBody>
    </Modal>
  );
};

export default LoginPage;
