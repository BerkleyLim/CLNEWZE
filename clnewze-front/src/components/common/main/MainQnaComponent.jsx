import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";

const MainQnaComponent = () => {
  return (
    <Box className="flex flex-col mb-12">
      <div className="flex justify-between items-center mb-4">
        <div className="text-left mb-12 flex items-center text-4xl font-bold">
          QNA
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
              <TableCell>영상 올리는 방법이 궁금해여</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>마이페이지 기능은 무엇인가요?</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MainQnaComponent;
