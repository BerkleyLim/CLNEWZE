import React, { useState } from "react";
import { Pagination, PaginationItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import styles from "../../../../scss/user/blog/blog.module.scss";

const BoardPagingnation = ({ totalPosts, limit, page, setPage }) => {
  const navigate = useNavigate();
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  let firstNum = currPage - (currPage % 5) + 1;
  let lastNum = currPage - (currPage % 5) + 5;

  const handlePageClick = (newPage) => {
    setPage(newPage);
    setCurrPage(newPage);
    navigate(`/blog/${newPage}`);
  };

  return (
    <Pagination
      className={`${styles?.paging} justify-content-center`}
      count={numPages}
      page={page}
      onChange={(event, value) => handlePageClick(value)}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: ChevronLeft, next: ChevronRight }}
        />
      )}
    />
  );
};

export default BoardPagingnation;
