import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Paper, IconButton } from '@mui/material';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DataTable from './item/DataTable';
import UseApi from '../../../util/UseApi';
import { CreateDataMenuType, DataMenuType } from '../../../type/sheet';
import update from "immutability-helper";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';

const SheetManagementComponent = () => {
  const [menuData, setMenuData] = useState<DataMenuType[]>([{
    mtno: -1,
    orderby: -1,
    name: '',
    category: ''
  }]);
  const [isStateUpdate, setIsStateUpdate] = useState(false);
  const [createMenuData, setCreateMenuData] = useState<CreateDataMenuType | DataMenuType | null>({
    orderby: Object.values(menuData)?.length,
    name: "",
    category: "",
  });

  // 추가 및 제어시 오더바이 조정
  useEffect(() => {
    setCreateMenuData({
      ...createMenuData as CreateDataMenuType,
      orderby: (menuData)?.length + 1,
    });
  }, [menuData]);

  useEffect(() => {
    UseApi.get(
      process.env.REACT_APP_API_ROOT + "sheet/master/menu/category"
    )
      .then((res) => {
        setMenuData(res.data.data);
        setCreateMenuData({
          ...createMenuData as CreateDataMenuType,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  const createOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateMenuData({
      ...createMenuData as CreateDataMenuType,
      [name]: value,
    });
  };

  // MenuData 드래그앤 드롭 기능 추가
  const MenuDataDndMove = useCallback(
    (dragIndex: any, hoverIndex: any) => {
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

  // Sheet Menu 삽입 기능 추가
  const addMenu = () => {
    UseApi.post(
      process.env.REACT_APP_API_ROOT + "sheet/master/menu/create",
      createMenuData
    )
      .then((res) => {
        setMenuData((prevData: any) => [...prevData, createMenuData]);
        console.log("성공!" + res);
        alert("성공!" + res);
      })
      .catch((e) => console.error(e));
  };

  // Sheet Menu orderby 변경 - 다시 볼것
  const changeOrderby = () => {
    menuData?.map((data, index) => {
      data.orderby = index + 1;
    });

    menuData?.map((data) => {
      UseApi.post(
        process.env.REACT_APP_API_ROOT + "sheet/master/menu/change/orderby",
        data
      )
        .then((res) => {
          console.log("성공!" + res);
        })
        .catch((e) => console.error(e));
    });

    setIsStateUpdate(!isStateUpdate);
  };

  // Sheet Menu 삭제
  const deleteMenu = (index: number) => {
    let deleteData = menuData[index];

    UseApi.post(process.env.REACT_APP_API_ROOT + "sheet/master/menu/delete", deleteData)
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

  // Sheet Menu 수정
  const updateMenu = (data: DataMenuType, index: number) => {
    UseApi.post(process.env.REACT_APP_API_ROOT + "sheet/master/menu/update", data)
      .then((res) => {
        setMenuData(
          update(menuData, {
            $merge: { [index]: data },
          })
        );
        console.log("성공!" + res);
        alert("성공!" + res);
      })
      .catch((e) => console.error(e));
    setIsStateUpdate(!isStateUpdate);
  };

  return (
    <div>
      <h1>악보</h1>
      <hr />
      <br /><br />
      <Button variant="contained" color="primary" onClick={changeOrderby}>순서 변경</Button>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "10%" }}>index</TableCell>
              <TableCell style={{ width: "10%" }}>prevOrderBy</TableCell>
              <TableCell style={{ width: "30%" }}>name</TableCell>
              <TableCell style={{ width: "30%" }}>category</TableCell>
              <TableCell style={{ width: "20%" }}>FN</TableCell>
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
                  defaultValue={createMenuData?.name as string}
                  onChange={createOnChange}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <TextField
                  name="category"
                  defaultValue={createMenuData?.category as string}
                  onChange={createOnChange}
                  fullWidth
                />
              </TableCell>
              <TableCell>
                <IconButton color="primary" onClick={addMenu}>
                  <AddCircleOutlineIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default SheetManagementComponent;
