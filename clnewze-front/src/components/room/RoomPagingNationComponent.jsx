import React from "react";
import {Pagination, PaginationItem} from "@mui/material";
import {useNavigate, useParams} from "react-router-dom";
import {useRecoilState, useRecoilValue} from "recoil";
import {roomPageElementState, roomTotalPageState} from "../../recoil/state/roomState";
import {ChevronLeft, ChevronRight} from "@mui/icons-material";

const RoomPagingNationComponent = () => {
  const {pageNo} = useParams();
  const [page, setPage] = useRecoilState(roomTotalPageState);
  const limit = 10;
  const navigate = useNavigate();
  const numPages = useRecoilValue(roomPageElementState);

  const handlePageClick = (pageNum) => {
    setPage(pageNum);
    navigate(`/room/${pageNum}`);
  };

  return (
    <Pagination
      className="flex justify-center my-10 py-2"
      count={numPages}
      page={Number(pageNo)}
      onChange={(event, value) => handlePageClick(value)}
      renderItem={(item) => (
        <PaginationItem
          components={{previous: ChevronLeft, next: ChevronRight}}
          {...item}
        />
      )}
    />
  );
};

export default RoomPagingNationComponent;
