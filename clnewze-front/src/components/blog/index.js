import React, { useEffect, useState } from "react";
import styles from "./blog.module.scss";
import URI from "../../util/URI";
import BlogList from './contents/index'
import BoardPagingnation from "./contents/paging";
import { useParams } from "react-router-dom";

const BlogIndex = () => {
  const param = useParams();
  const [blogData, setBlogData] = useState();
  // Pagination 관련
  const [page, setPage] = useState(param?.pageNo); // 페이지
  const limit = 10;
  const offset = (page - 1) * 10; // 시작점, 끝점 구하는 offset
  const [pagingCount, setPagingCount] = useState();
  // Pagination 관련 끝
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState();

  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT +
        "blog/selectList" 
          + "?pageNo=" + offset
          + "&limit=" + limit
    )
      .then((res) => setBlogData(res.data.data))
      .catch((e) => console.error(e));
  }, [offset])

  console.log(offset)

  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT + 
        "blog/selectListAllCount"
    )
      .then((res) => setPagingCount(res.data.data))
      .catch((e) => console.error(e))
  }, [])

  console.log(page)

  console.log(blogData)

  return (
    <div>
      <h2 style={{ textAlign: "left" }}>블로그</h2>
      <div>
        이 게시글은 음악 전문가들을 위한 커뮤니티 컨텐츠로 개발 예정입니다.
      </div>
      <div>현재 좋은 아이디어를 가지고 계시면 언제든지 피드백 환영합니다.</div>
      <div>이메일 문의 : berkleylim16@gmail.com.</div>
      <div>오픈채팅 : https://open.kakao.com/me/clnewzedeveloper</div>

      <div className={`${styles?.contain}`}>
        {/* <Menu boards={boards} major={selectMajor} majormenu={majormenu} /> */}

        <div>
          <BlogList 
            // blogData={postsData(blogData)}
            blogData={blogData}
            // onClickView={onClickView}
            />


          {/* 모달 상세 출력 */}
          {/* <Modal isOpen={isModal} toggle={toggle} centered={true} size="xl">
            <BoardForm teacher={modalData} />
          </Modal> */}

          <BoardPagingnation
            limit={limit}
            page={page}
            // totalPosts={blogData?.length}
            totalPosts={pagingCount}
            setPage={setPage}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogIndex;
