import React, { useEffect, useState } from "react";
import styles from "./login.module.scss"

import SignIn from "./SignIn";
import SignOn from "./SignOn";

const LoginComponent = ({setLoginIsModal}) => {
  const [changeState, setChangeStae] = useState(false);
  const [view, setView] = useState();

  // 초기 설정
  useEffect(() => {
    setView(<SignIn setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
  },[])

  const changeView = (index) => {
    if (index === 1) {
      setView(<SignIn setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
      setChangeStae(!changeState)
    }
    else if (index === 2) {
      setView(<SignOn setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
      setChangeStae(!changeState)
    }
  }

  return (
    <div className={`${styles?.modalLogin}`}>
      {view}
    </div>
  );
};

export default LoginComponent;
