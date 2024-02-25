import React from "react";
import SheetMusicManagementComponent from "../../components/category/sub/SheetMusicManagementComponent";

const CategoryManagementPage = () => {
  return (
    <div>
      <h1>카테고리 관리</h1>
      <hr/>
      <br /><br />

      {/* 악보 관리 */}
      <SheetMusicManagementComponent />
    </div>
  );
};

export default CategoryManagementPage;
