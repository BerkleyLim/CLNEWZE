import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from "@mui/material";
import styles from "../../../scss/common/main/main.module.scss";

const MainCommunityComponent = () => {
  return (
    <Box className={`${styles?.mainQnA}`}>
      <div className="flex justify-between items-center mb-4">
        <Typography variant="h1" className="text-xl font-bold">커뮤니티</Typography>
        <p className="flex items-center cursor-pointer text-blue-500">
          <ChevronRight className="mr-1" /> 더보기
        </p>
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
              <TableCell>안녕하세요?</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>만나서 반가워요</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default MainCommunityComponent;
