import React from "react";
import { Button, Navbar } from "reactstrap";
import DropdownPaging from "./dropdown"
const ContentsMenu = () => {
  return (
    <Navbar className="listMenu">
      <h2>전체 곡 목록</h2>
      <div className="sub-menu">
        <div className="sort-list">
          <div className="view_mode">
            <Button
              // className="feed-type fas fa-bars on"
              data-viewtype="3"
            >
              {/* <!-- <span>카드형</span> --> */}
            </Button>
            <Button
              type="button"
              // className="list-type fas fa-th-large"
              data-viewtype="1"
            >
              {/* <!-- <span>게시판형</span> --> */}
            </Button>
          </div>
          <DropdownPaging />
          {/* <div className="selectBox">
            <a href="javascript:;" className="selected">
              20개
            </a>
            <ul className="select-layer" data-align="left">
              <li>
                <a href="javascript:;">10개</a>
              </li>
              <li>
                <a href="javascript:;">20개</a>
              </li>
              <li>
                <a href="javascript:;">30개</a>
              </li>
              <li>
                <a href="javascript:;">40개</a>
              </li>
            </ul>
          </div> */}
        </div>
      </div>
    </Navbar>
  );
};

export default ContentsMenu;
