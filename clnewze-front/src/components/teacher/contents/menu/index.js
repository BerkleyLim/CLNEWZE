import React from "react";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownPaging from "./dropdown";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";

const ContentsMenu = () => {
  return (
    <Navbar className="listMenu">
      <h2>선생님 조회</h2>
      <div className="sub-menu">
        <div className="sort-list">
          <div className="view_mode">
            <Button>
              <FontAwesomeIcon icon={faTableCellsLarge} />
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
