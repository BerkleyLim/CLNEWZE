import React from "react";
import styles from "../../../css/main/main.module.scss";
import { ListGroup } from "reactstrap";
import menuData from '../../../data/menu/menuData'
import MainListGroupItemView from "./item/MainListGroupItemView";
const MainMenuComponent = () => {
  return (
    <div className={`${styles?.mainMenu}`}>
      <h1 className={`${styles?.mainMenuHeader}`}>클뉴즈 관리</h1>
      <ListGroup>
        {
          menuData?.map((data, index) => 
            <MainListGroupItemView key={index} menuData={data} />
          )
        }
      </ListGroup>
    </div>
  );
};

export default MainMenuComponent;
