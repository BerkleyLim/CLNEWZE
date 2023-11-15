import React, { useEffect, useState } from "react";

import Menu from "./contents/menu/TeacherMenuIndex";
import Board from "./contents/board/index";
import BoardForm from "./contents/board/form";
import Paging from "./contents/board/paging";
import styles from "./teacher.module.scss";

import URI from "../../util/URI";
import { Modal, Navbar } from "reactstrap";
import { useParams } from "react-router-dom";


const Teachers = (props) => {
  const param = useParams();
  const { pageNo } = useParams();
  const [boards, setBoards] = useState();
  const [selectMajor, setSelectMajor] = useState(null);
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

  // console.log(pageNo)
  // useNavigate를 이용하여 페이지 이동


  
    // 장르 설정 할때 마다
    useEffect(() => {
      URI.get(
        process.env.REACT_APP_API_ROOT +
          "/api/teacher/selectList"
            + "?major=" + selectMajor
            + "&pageNo=" + offset
            + "&limit=" + limit
      )
        .then((res) => setBoards(res.data.data))
        .catch((e) => console.error(e));
    }, [selectMajor, offset]);
  
    
    useEffect(() => {
      URI.get(
        process.env.REACT_APP_API_ROOT + 
          "/api/teacher/selectListAllCount"
      )
        .then((res) => setPagingCount(res.data.data))
        .catch((e) => console.error(e))
    }, [])

  const majormenu = (major) => {
    setSelectMajor(major);
  };

  const onClickView = (board) => {
    setModalData(board);
    setIsModal(!isModal);
  };

  const toggle = () => setIsModal(!isModal);
  return (
    <div>
      <div className={`${styles?.contain}`}>
        <Menu boards={boards} major={selectMajor} majormenu={majormenu} />

        <div>
          {/* <Board boards={postsData(boards)} onClickView={onClickView} /> */}
          <Board boards={boards} onClickView={onClickView} />

          {/* 모달 상세 출력 */}
          <Modal isOpen={isModal} toggle={toggle} centered={true} size="xl">
            <BoardForm teacher={modalData} />
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

export default Teachers;
