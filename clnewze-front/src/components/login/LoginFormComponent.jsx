import React, { useEffect, useState } from "react";
import styles from "./login.module.scss"

import SignIn from "./SignIn";
import SignOn from "./SignOn";

const LoginFormComponent = ({setLoginIsModal}) => {
  const [changeState, setChangeState] = useState(false);
  const [view, setView] = useState();

  // 초기 설정
  useEffect(() => {
    setView(<SignIn setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
  },[])

  const changeView = (index) => {
    if (index === 1) {
      setView(<SignIn setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
      setChangeState(!changeState)
    }
    else if (index === 2) {
      setView(<SignOn setLoginIsModal={setLoginIsModal} changeView={changeView}/>)
      setChangeState(!changeState)
    }
  }

  return (
    <div className={`${styles?.modalLogin}`}>
      {view}
    </div>
  );
};

export default LoginFormComponent;
