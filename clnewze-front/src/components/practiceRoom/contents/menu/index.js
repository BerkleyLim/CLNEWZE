import React from "react";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownPaging from "./dropdown";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import styles from "../../practiceRoom.module.scss";
const ContentsMenu = () => {
  return (
    <Navbar className={`${styles?.listMenu}`}>
      <h2>전체 연습실</h2>
      <div className={`${styles?.subMenu}`}>
        <div className={`${styles?.sortList}`}>
          <div className={`${styles?.view_mode}`}>
            <Button>
              <FontAwesomeIcon
                icon={faTableCellsLarge}
              />
              {/* <!-- <span>카드형</span> --> */}
            </Button>
            <Button>
              {/* <FontAwesomeIcon icon="fa-solid fa-list" /> */}
              <FontAwesomeIcon icon={faList} />
              {/* <!-- <span>게시판형</span> --> */}
            </Button>
          </div>
          <DropdownPaging />
        </div>
      </div>
    </Navbar>
  );
};

export default ContentsMenu;
