import React from "react";
import { Button, Navbar } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DropdownPaging from "./dropdown";
// import { faGrid2 } from "@fortawesome/free-regular-svg-icons";
import { faList, faTableCellsLarge } from "@fortawesome/free-solid-svg-icons";
// import { faGrid2 } from "@fortawesome/free-regular-svg-icons";

const ContentsMenu = () => {
  return (
    <Navbar className="listMenu">
      <h2>전체 곡 목록</h2>
      <div className="sub-menu">
        <div className="sort-list">
          <div className="view_mode">
            <Button
              // className="feed-type fas fa-bars on"
              // data-viewtype="3"
            >
              <FontAwesomeIcon
                icon={faTableCellsLarge}
                // style={{ padding: "-10px 0 0 -10px" }}
              />
              {/* <!-- <span>카드형</span> --> */}
            </Button>
            <Button
            // className="list-type fas fa-th-large"
            // data-viewtype="1"
            // style={{backgroundColor:"#fff"}}
            >
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
