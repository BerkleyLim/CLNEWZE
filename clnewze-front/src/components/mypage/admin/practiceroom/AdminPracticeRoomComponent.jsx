import React, { useEffect, useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
  TextField,
  Box,
  Typography,
} from "@mui/material";
import DataTable from "./menu/dataTable";
import UseApi from "../../../../util/UseApi";

const AdminPracticeRoomComponent = () => {
  const [menuData, setMenuData] = useState();
  const [isStateUpdate, setIsStateUpdate] = useState(false);
  const [createMenuData, setCreateMenuData] = useState({
    orderby: menuData?.length,
    name: "",
    category: "",
  });

  // 추가 및 제어시 오더바이 조정
  useEffect(() => {
    setCreateMenuData({
      ...createMenuData,
      orderby: menuData?.length + 1,
    });
  }, [menuData]);

  useEffect(() => {
    UseApi.get(
      process.env.REACT_APP_API_ROOT + "practiceroom/master/menu/category"
    )
      .then((res) => {
        setMenuData(res.data.data);
        setCreateMenuData({
          ...createMenuData,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  const createOnChange = (e) => {
    const { name, value } = e.target;
    setCreateMenuData({
      ...createMenuData,
      [name]: value,
    });
  };

  // MenuData 드래그앤 드롭 기능 추가
  const MenuDataDndMove = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = menuData[dragIndex];
      setMenuData(
        update(menuData, {
          $splice: [
            [dragIndex, 1], // delete
            [hoverIndex, 0, dragCard], // Add
          ],
        })
      );

      // 여기서 전체 리스트 update API 삽입
      setIsStateUpdate(!isStateUpdate);

      // 삽입 끝
    },
    [menuData]
  );

  // PracticeRoom Menu 삽입 기능 추가
  const addMenu = () => {
    UseApi.post(
      process.env.REACT_APP_API_ROOT + "practiceroom/master/menu/create",
      createMenuData
      )
      .then((res) => {
        setMenuData(
          update(menuData, {
            $push: [createMenuData],
          })
        );
        console.log("성공!" + res);
        alert("성공!" + res);
      })
      .catch((e) => console.error(e));
  };

  // PracticeRoom Menu orderby 변경 - 다시 볼것
  const changeOrderby = () => {
    menuData?.map((data, index) => {
      data.orderby = index + 1;
    });

    menuData?.map((data) => {
      UseApi.post(
        process.env.REACT_APP_API_ROOT + "practiceroom/master/menu/change/orderby",
        data
      )
        .then((res) => {
          console.log("성공!" + res);
          // alert("성공!" + res);
        })
        .catch((e) => console.error(e));
    });

    // 여기서 전체 리스트 update API 오더바이 수정
    setIsStateUpdate(!isStateUpdate);
  };

  // PracticeRoom Menu 삭제
  const deleteMenu = (index) => {
    let deleteData = menuData[index];

    UseApi.post(process.env.REACT_APP_API_ROOT + "practiceroom/master/menu/delete", deleteData)
    .then((res) => {
      setMenuData(
        update(menuData, {
          $splice: [[index, 1]],
        })
      );
      console.log("성공!" + res);
      alert("성공!" + res);
      })
      .catch((e) => console.error(e));

    setIsStateUpdate(!isStateUpdate);
  };

  // PracticeRoom Menu 수정
  const updateMenu = (data, index) => {
    UseApi.post(process.env.REACT_APP_API_ROOT + "practiceroom/master/menu/update", data)
    .then((res) => {
        setMenuData(
          update(menuData, {
            $merge: {[index]: data},
          })
        );
        console.log("성공!" + res);
        alert("성공!" + res);
      })
      .catch((e) => console.error(e));
    setIsStateUpdate(!isStateUpdate);
  };
  return (
    <Box>
      <Typography variant="h4">메뉴 관리</Typography>
      <Button onClick={changeOrderby} variant="contained" color="primary">
        순서 변경
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>index</TableCell>
            <TableCell>prevOrderBy</TableCell>
            <TableCell>name</TableCell>
            <TableCell>category</TableCell>
            <TableCell>FN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuData?.map((data, index) => (
            <DndProvider key={index} backend={HTML5Backend}>
              <DataTable
                index={index}
                data={data}
                deleteMenu={deleteMenu}
                updateMenu={updateMenu}
                MenuDataDndMove={MenuDataDndMove}
              />
            </DndProvider>
          ))}
          <TableRow>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField
                name="name"
                value={createMenuData?.name}
                onChange={createOnChange}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <TextField
                name="category"
                value={createMenuData?.category}
                onChange={createOnChange}
                fullWidth
              />
            </TableCell>
            <TableCell>
              <Button onClick={addMenu} variant="contained" color="primary">
                추가
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Typography variant="h4" className="mt-4">
        연습실 정보 순서 관리
      </Typography>
    </Box>
  );
}

export default AdminPracticeRoomComponent;
