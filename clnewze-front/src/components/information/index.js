import React, { useEffect, useState } from "react";

import Title from "./title/index";
import Menu from "./contents/menu/index";
import Board from "./contents/board/index";
import BoardForm from "./contents/board/form";
import Paging from "./contents/board/paging";
import "./information.scss";

import URI from "../util/URI";
import { Modal } from "reactstrap";


const Informations = (props) => {
  const [boards, setBoards] = useState();
  // Pagination 관련
  const [page, setPage] = useState(1); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  // Pagination 관련 끝
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState();

  const postsData = (posts) => {
    if (!!posts) {
      let result = posts?.slice(offset, offset + limit);
      return result;
    }
  };

  useEffect(() => {
    URI.get(process.env.REACT_APP_API_ROOT + "/api/information/selectList")
      .then((res) => setBoards(res.data))
      .catch((e) => console.error(e));
  }, [setBoards]);

  const onClickView = (board) => {
    setModalData(board);
    setIsModal(!isModal);
  };

  const toggle = () => setIsModal(!isModal)

  return (
    <div>
      <Title />

      <div className="contain">
        <Menu />

        <div className="contents">
          <Board
            boards={postsData(boards)}
            onClickView={onClickView}
          />

          {/* 모달 상세 출력 */}
          <Modal isOpen={isModal} toggle={toggle} centered={true} size="xl">
            <BoardForm information={modalData}/>
          </Modal>

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

export default Informations;
