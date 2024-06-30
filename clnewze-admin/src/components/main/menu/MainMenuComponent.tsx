import React from "react";
import menuData from "../../../data/menu/menuData";
import MainListGroupItemView from "./item/MainListGroupItemView";

const MainMenuComponent = () => {
  return (
    <div className="bg-custom-yellow min-h-screen w-full md:w-1/4 lg:w-1/5">
      <div className="font-bold text-3xl px-3 py-5 text-center">클뉴즈 관리</div>
      {menuData?.map((data, index) => (
        <MainListGroupItemView key={index} data={data} />
      ))}
    </div>
  );
};

export default MainMenuComponent;
