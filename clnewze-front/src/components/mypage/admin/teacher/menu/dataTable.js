import React from "react";

function DataTable({ menuData }) {
  return (
    <tbody>
      {menuData?.map((data, index) => 
        <tr key={index}>
          <th scope="row">{data?.orderby}</th>
          <td>{data?.name}</td>
          <td>{data?.category}</td>
        </tr>
      )}
    </tbody>
  );
}

export default DataTable;
