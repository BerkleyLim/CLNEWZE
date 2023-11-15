import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import styles from "../../teacher.module.scss";
import { useNavigate } from "react-router-dom";
import TeacherContainer from "../../../../hooks/TeacherContainer";

const BoardPagingnation = () => {
  const { totalPosts, limit, page, setPage } = TeacherContainer();

  const navigate = useNavigate();
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;
  return (
    <Pagination className={`${styles?.paging} justify-content-center`}>
      <PaginationItem className={`${page === 1 && "disabled"}`}>
        <PaginationLink
          onClick={() => {
            setPage(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
          tabIndex="-1"
        >
          Previous
        </PaginationLink>
      </PaginationItem>
      {Array(5)
        .fill()
        .map((_, i) => (
          <div key={i + 1}>
            {i < numPages && (
              <PaginationItem>
                {" "}
                {i < 4 ? (
                  <PaginationLink
                    onClick={() => 
                      {
                        setPage(firstNum + i);
                        navigate('/teacher/' + (firstNum + i));
                      }}
                      aria-current={page === firstNum + 1 + i ? "page" : null}
                      >
                    {firstNum + i}
                  </PaginationLink>
                ) : (
                  /*
                  i > 4 일때
                  */
                 <PaginationLink
                 onClick={() => {
                   setPage(lastNum)
                   navigate('/teacher/' + (lastNum));
                    }}
                    aria-current={page === lastNum ? "page" : null}
                  >
                    {lastNum}
                  </PaginationLink>
                )}
              </PaginationItem>
            )}
          </div>
        ))}
      <PaginationItem className={`${page === numPages && "disabled"}`}>
        <PaginationLink
          onClick={() => {
            setPage(page + 1);
            setCurrPage(page + 1);
          }}
          disabled={page === numPages}
        >
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default BoardPagingnation;
