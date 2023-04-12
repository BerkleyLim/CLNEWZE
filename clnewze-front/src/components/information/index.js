import React, { useEffect, useState } from "react";
// import { Navbar } from "reactstrap";

import Title from "./title/index";
import Menu from "./contents/menu/index";
import Board from "./contents/board/index";
// import BoardForm from "./contents/board/form";
import Paging from "./contents/board/paging";
import "./information.scss";
// import { Modal } from "reactstrap";

import sample from "./data/sample";

const Informations = (props) => {
  // const [informations, setInformations] = useState([]);
  const [boards, setBoards] = useState();
  // Pagination 관련
  const [page, setPage] = useState(1); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  // Pagination 관련 끝

  const postsData = (posts) => {
    if (posts) {
      let result = posts.slice(offset, offset + limit);
      return result;
    }
  };

  useEffect(() => {
    setBoards(sample);
  }, []);
  return (
    <div>
      <Title />

      <div className="contain">
        <Menu />

        <div className="contents">
          {boards?.map((board, index) => (
            <Board key={index} board={board} />
          ))}

          {/* 모달 상세 출력 */}
          {/* <Modal><BoardForm/></Modal> */}

          <Paging
            limit={limit}
            page={page}
            // totalPosts={boards.length}
            setPage={setPage}
          />

          {/* <section className="board-srh_wrap">
            <div className="paging">
              <a className="page-item on" href="#">
                1
              </a>
              <a className="page-item" href="#">
                2
              </a>
              <a className="page-item" href="#">
                3
              </a>
              <a className="page-item" href="#">
                4
              </a>
              <a className="page-item" href="#">
                5
              </a>
              <a className="page-item" href="#">
                6
              </a>
              <a className="page-item" href="#">
                7
              </a>
              <a className="page-item" href="#">
                8
              </a>
              <a className="page-item" href="#">
                9
              </a>
              <a className="page-item" href="#">
                10
              </a>
              <span>...</span>
              <a className="page-item" href="#">
                15
              </a>
              <a className="page-item next" href="#">
                다음
              </a>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default Informations;
