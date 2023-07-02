import React, { useEffect, useState, useCallback } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import { Table } from "reactstrap";
import DataTable from "./menu/dataTable";
import URI from "../../../util/URI";

function AdminTeacher() {
  const [menuData, setMenuData] = useState();
  const [isStateUpdate, setIsStateUpdate] = useState(false);
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT + "/api/teacher/master/menu/category"
    )
      .then((res) => {
        setMenuData(res.data.data);
      })
      .catch((e) => console.error(e));
  }, []);

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
      )

      // 여기서 전체 리스트 update API 삽입
      setIsStateUpdate(!isStateUpdate);

      // 삽입 끝
    },
    [menuData]
  );
  return (
    <>
      <h1>메뉴 관리</h1>
      <Table striped>
        <thead>
          <tr>
            <th>index</th>
            <th>prevOrderBy</th>
            <th>name</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {menuData?.map((data, index) => (
            <DndProvider key={index} backend={HTML5Backend}>
              <DataTable index={index+1} data={data} MenuDataDndMove={MenuDataDndMove}/>
            </DndProvider>
          ))}
        </tbody>
      </Table>
      <h1>레스너 순서 관리</h1>
    </>
  );
}

export default AdminTeacher;
