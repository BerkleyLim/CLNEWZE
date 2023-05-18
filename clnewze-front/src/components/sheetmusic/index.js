import React, { useEffect, useState } from "react";
// import { Navbar } from "reactstrap";

import Title from "./title/index";
import Menu from "./contents/menu/index";
import Board from "./contents/board/index";
import BoardForm from "./contents/board/form";
import Paging from "./contents/board/paging";
import "./sheetmusic.scss";

import URI from "../util/URI";
import { Modal } from "reactstrap";

const SheetMusics = (props) => {
  const [boards, setBoards] = useState();
  const [selectGenre, setSelectGenre] = useState(null);
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

  // 장르 설정 할때 마다
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT +
        "/api/sheetmusic/selectList?genre=" +
        selectGenre
    )
      .then((res) => setBoards(res.data.data))
      .catch((e) => console.error(e));
  }, [selectGenre]);

  const genreList = (genre) => {
    setSelectGenre(genre);
    console.log(selectGenre);
  };

  const onClickView = (board) => {
    setModalData(board);
    setIsModal(!isModal);
  };

  const toggle = () => setIsModal(!isModal);
  return (
    <div>
      <Title genreList={genreList} />

      <div className="contain">
        <Menu genre={selectGenre} />

        <div className="sheetmusic-contents">
          <Board boards={postsData(boards)} onClickView={onClickView} />

          {/* 모달 상세 출력 */}
          <Modal isOpen={isModal} toggle={toggle} centered={true} size="xl">
            <BoardForm sheetMusic={modalData} />
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

export default SheetMusics;
