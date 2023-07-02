import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import DataTable from "./menu/dataTable"
import URI from "../../../util/URI"

function AdminTeacher() {
  const [menuData, setMenuData] = useState();
  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT + "/api/teacher/master/menu/category"
    )
      .then((res) => {
        setMenuData(res.data.data);
      })
      .catch((e) => console.error(e));
  }, []);
  return (
    <>
      <h1>메뉴 관리</h1>
      <Table striped>
        <thead>
          <tr>
            <th>orderBy</th>
            <th>name</th>
            <th>category</th>
          </tr>
        </thead>
        <DataTable menuData={menuData} />
      </Table>
      <h1>레스너 순서 관리</h1>
    </>
  );
}

export default AdminTeacher;
