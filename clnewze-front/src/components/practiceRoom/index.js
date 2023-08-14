import React, { useEffect, useState } from "react";

import Menu from "./contents/menu/index";
import Board from "./contents/board/index";
import BoardForm from "./contents/board/form";
import Paging from "./contents/board/paging";
import styles from "./practiceRoom.module.scss";

import URI from "../util/URI";
import { Modal } from "reactstrap";
import { useParams } from "react-router-dom";

const PracticeRoom = (props) => {
  const param = useParams();
  const [boards, setBoards] = useState();
  const [selectCategories, setSelectCategories] = useState(null);
  // Pagination 관련
  const [page, setPage] = useState(param?.pageNo); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const [pagingCount, setPagingCount] = useState();
  // Pagination 관련 끝
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState();

  // const postsData = (posts) => {
  //   if (!!posts) {
  //     let result = posts?.slice(offset, offset + limit);
  //     return result;
  //   }
  // };
  

  // 장르 설정 할때 마다
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT +
        "/api/practiceroom/selectList"
          + "?categories=" + selectCategories
          + "&pageNo=" + offset
          + "&limit=" + limit
    )
      .then((res) => setBoards(res.data.data))
      .catch((e) => console.error(e));
  }, [selectCategories, offset]);

  
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT + 
        "/api/practiceroom/selectListAllCount"
    )
      .then((res) => setPagingCount(res.data.data))
      .catch((e) => console.error(e))
  }, [])

  const categorieMenu = (categories) => {
    setSelectCategories(categories);
  };

  const onClickView = (board) => {
    setModalData(board);
    setIsModal(!isModal);
  };

  const toggle = () => setIsModal(!isModal);
  return (
    <div>
      <div className={`${styles?.contain}`}>
        <Menu categories={selectCategories} categorieMenu={categorieMenu} />

        {/* <div className={`${styles?.practiceRoomContents}`}> */}
        <div>
          <Board boards={boards} onClickView={onClickView} />

          {/* 모달 상세 출력 */}
          <Modal isOpen={isModal} toggle={toggle} centered={true} size="xl">
            <BoardForm practiceRoom={modalData} />
          </Modal>

          <Paging
            limit={limit}
            page={page}
            // totalPosts={boards?.length}
            totalPosts={pagingCount}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default PracticeRoom;
