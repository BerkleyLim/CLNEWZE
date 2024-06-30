import React from "react";
import SheetManagementComponent from "../../components/category/sub/SheetManagementComponent";

const CategoryManagementPage = () => {
  return (
    <div>
      <h1>카테고리 관리</h1>
      <hr/>
      <br /><br />

      {/* 악보 관리 */}
      <SheetManagementComponent />
    </div>
  );
};

export default CategoryManagementPage;
