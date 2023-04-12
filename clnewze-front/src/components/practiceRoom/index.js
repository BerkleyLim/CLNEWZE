import React, { useEffect, useState } from "react";
// import { Navbar } from "reactstrap";

import Title from "./title/index";
import Menu from "./contents/menu/index";
import Board from "./contents/board/index";
// import BoardForm from "./contents/board/form";
import Paging from "./contents/board/paging";
import "./practiceRoom.scss";
// import { Modal } from "reactstrap";

import sample from "./data/sample";

const PracticeRooms = (props) => {
  const [boards, setBoards] = useState();
  // Pagination 관련
  const [page, setPage] = useState(1); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  // Pagination 관련 끝

  const postsData = (posts) => {
    if (!!posts) {
      let result = posts?.slice(offset, offset + limit);
      return result;
    }
  };

  useEffect(() => {
    setBoards(sample);
  }, [setBoards]);
  // console.log(boards);
  // console.log(sample);
  return (
    <div>
      <Title />

      <div className="contain">
        <Menu />

        <div className="contents">
          <Board
            boards={postsData(boards)}
            // openDetail={openDetail}
            // closeDetail={closeDetail}
          />

          {/* 모달 상세 출력 */}
          {/* <Modal><BoardForm/></Modal> */}

          <Paging
            limit={limit}
            page={page}
            totalPosts={boards?.length}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PracticeRooms;
