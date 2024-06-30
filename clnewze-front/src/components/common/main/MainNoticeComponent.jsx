import React from "react";
import {Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const MainNoticeComponent = () => {
  return (
    <Box className="flex flex-col mb-12">
      <div className="flex justify-between items-center mb-4">
        <div className="text-left mb-12 flex items-center text-4xl font-bold">
          공지 사항
        </div>
        <p className="cursor-pointer text-blue-500">&gt; 더보기</p>
      </div>
      <TableContainer component={Paper}>
        <Table className="table-hover">
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>제목</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>clnewze 이용안내</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>경고 및 제재사항</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MainNoticeComponent;
