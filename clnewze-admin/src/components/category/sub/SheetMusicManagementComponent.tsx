import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Button, Input, Table } from 'reactstrap'
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DataTable from './item/DataTable';
import UseApi from '../../../util/UseApi';
import { CreateDataMenuType, DataMenuType } from '../../../type/sheetMusic';
import update from "immutability-helper";

const SheetMusicManagementComponent = () => {
  const [menuData, setMenuData] = useState<DataMenuType[]>([{
    mtno : -1,
    orderby : -1,
    name : '',
    category : ''
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
      process.env.REACT_APP_API_ROOT + "sheetmusic/master/menu/category"
    )
      .then((res) => {
        setMenuData(res.data.data);
        setCreateMenuData({
          ...createMenuData as CreateDataMenuType,
        });
      })
      .catch((e) => console.error(e));
  }, []);

  const createOnChange = (e : React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCreateMenuData({
      ...createMenuData as CreateDataMenuType,
      [name]: value,
    });
  };

  // MenuData 드래그앤 드롭 기능 추가
  const MenuDataDndMove = useCallback(
    (dragIndex : any, hoverIndex : any) => {
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

  // SheetMusic Menu 삽입 기능 추가
  const addMenu = () => {
    UseApi.post(
      process.env.REACT_APP_API_ROOT + "sheetmusic/master/menu/create",
      createMenuData
      )
      .then((res) => {
        setMenuData((prevData : any) => [...prevData, createMenuData]);
        // setMenuData(
        //   update(menuData, {
        //     $push: [createMenuData],
        //   })
        // );
        console.log("성공!" + res);
        alert("성공!" + res);
      })
      .catch((e) => console.error(e));
  };

  // SheetMusic Menu orderby 변경 - 다시 볼것
  const changeOrderby = () => {
    menuData?.map((data, index) => {
      data.orderby = index + 1;
    });

    menuData?.map((data) => {
      UseApi.post(
        process.env.REACT_APP_API_ROOT + "sheetmusic/master/menu/change/orderby",
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

  // SheetMusic Menu 삭제
  const deleteMenu = (index: number) => {
    let deleteData = menuData[index];
    
    UseApi.post(process.env.REACT_APP_API_ROOT + "sheetmusic/master/menu/delete", deleteData)
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

  // SheetMusic Menu 수정
  const updateMenu = (data: DataMenuType, index: number) => {
    UseApi.post(process.env.REACT_APP_API_ROOT + "sheetmusic/master/menu/update", data)
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
    <div>
      <h1>악보</h1>
      <hr />
      <br /><br />
      <Button onClick={() => changeOrderby()}>순서 변경</Button>
      <Table striped>
        <thead>
          <tr>
            <th style={{width:"10%"}}>index</th>
            <th style={{width:"10%"}}>prevOrderBy</th>
            <th style={{width:"30%"}}>name</th>
            <th style={{width:"30%"}}>category</th>
            <th style={{width:"20%"}}>FN</th>
          </tr>
        </thead>
        <tbody>
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
          <td></td>
          <td></td>
          <td>
            <Input
              name="name"
              defaultValue={createMenuData?.name as string}
              onChange={createOnChange}
            />
          </td>
          <td>
            <Input
              name="category"
              defaultValue={createMenuData?.category as string}
              onChange={createOnChange}
            />
          </td>
          <td>
            <Button onClick={() => addMenu()}>추가</Button>
          </td>
        </tbody>
      </Table>

    </div>
  )
}

export default SheetMusicManagementComponent