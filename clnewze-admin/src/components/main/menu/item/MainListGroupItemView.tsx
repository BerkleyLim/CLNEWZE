import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import { Collapse } from "@mui/material";
import { IconButton } from "@mui/material";

const MainListGroupItemView = ({ data }: any) => {
  const navigate = useNavigate();
  const [isView, setIsView] = useState<boolean>(data?.isView);

  const toggleButtonClick = (link: string, isChild: boolean) => {
    if (isChild) {
      navigate(link);
    } else {
      setIsView(!isView);
    }
  };

  return (
    <div>
      {/* 상위 노드 */}
      <div
        className={`flex flex-row items-center justify-between p-3 cursor-pointer ${data?.className}`}
        onClick={() => toggleButtonClick(data?.link, data?.isChild)}
      >
        <div className="flex items-center">
          <i className={`${data?.icons} text-lg`} />
          <span className="ml-2">{data?.title}</span>
        </div>
        {!data?.isChild && (
          <IconButton size="small">
            {isView ? <ChevronUp /> : <ChevronDown />}
          </IconButton>
        )}
      </div>
      {/* 하위 노드 */}
      <Collapse in={isView} timeout="auto" unmountOnExit>
        <div className="transition-all duration-300 ease-in-out pl-8">
          {data?.subNode?.map((childData: any, index: number) => (
            <div
              key={index}
              className={`flex flex-row items-center justify-between p-2 cursor-pointer ${childData?.className}`}
              onClick={() => toggleButtonClick(childData?.link, childData?.isChild)}
            >
              <i className={`${childData?.icons} text-lg`} />
              <span className="ml-2">{childData?.title}</span>
            </div>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default MainListGroupItemView;
