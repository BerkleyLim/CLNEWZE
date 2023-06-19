import React from "react";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownPaging from "./dropdown";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
import styles from "../../sheetmusic.module.scss";
const ContentsMenu = () => {
  return (
    <Navbar className={`${styles?.listMenu}`}>
      <h2>전체 악보 목록</h2>
      <div className={`${styles?.subMenu}`}>
        <div className={`${styles?.sortList}`}>
          <div className={`${styles?.view_mode}`}>
            <Button>
              <FontAwesomeIcon
                icon={faTableCellsLarge}
                // style={{ padding: "-10px 0 0 -10px" }}
              />
              {/* <!-- <span>카드형</span> --> */}
            </Button>
            <Button>
              {/* <FontAwesomeIcon icon="fa-solid fa-list" /> */}
              <FontAwesomeIcon icon={faList} />
              {/* <!-- <span>게시판형</span> --> */}
            </Button>
            <DropdownPaging />
          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default ContentsMenu;
