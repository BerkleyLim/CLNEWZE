import React from "react";
import styles from "../../../css/main/main.module.scss";
import menuData from "../../../data/menu/menuData";
import MainListGroupItemView from "./item/MainListGroupItemView";
import {ChevronDown, ChevronUp} from "react-bootstrap-icons";

const MainMenuComponent = () => {
    return (
        <div className={`${styles?.mainMenu}`}>
            <div className={`font-bold text-3xl px-3 py-5 text-center`}>클뉴즈 관리</div>
            {
                menuData?.map((data, index) =>
                    <MainListGroupItemView key={index} data={data}/>
                )
            }
            {/*<div*/}
            {/*    // className={`flex p-3 flex-row flex-wrap hover:bg-sky-500 ${styles?.menuParentsComponent}`}*/}
            {/*    className={`flex flex-row flex-wrap hover:bg-sky-500 justify-center items-center `}*/}
            {/*    // className={data?.className}*/}
            {/*>*/}
            {/*    <div className={`basis-1/6 w-10 py-5`}>*/}
            {/*        <i className={`bi bi-stickies-fill`}/>*/}
            {/*    </div>*/}
            {/*    <div className={`basis-1/8 w-64 py-5 `}>{`상위 노드`}</div>*/}
            {/*    {*/}
            {/*        // !data?.isChild &&*/}
            {/*        <div className={`basis-1/12 w-10 py-5`}>*/}
            {/*            {*/}
            {/*                true ?*/}
            {/*                    <ChevronDown/>*/}
            {/*                    :*/}
            {/*                    <ChevronUp/>*/}
            {/*            }*/}
            {/*        </div>*/}
            {/*    }*/}
            {/*</div>*/}
            {/*/!*아래는 하위 노드 표시*!/*/}
            {/*<div*/}
            {/*    // className={`flex p-3 flex-row flex-wrap hover:bg-sky-500 ${styles?.menuParentsComponent}`}*/}
            {/*    className={`flex flex-row flex-wrap hover:bg-sky-500 justify-center items-center `}*/}
            {/*    // className={data?.className}*/}
            {/*>*/}
            {/*    <div className={`basis-1/6 w-10 py-5`}>*/}
            {/*        <i className={`bi bi-stickies-fill`}/>*/}
            {/*    </div>*/}
            {/*    <div className={`basis-1/8 w-64 py-5 `}>{`하위 노드`}</div>*/}
            {/*</div>*/}
        </div>
    );
};

export default MainMenuComponent;
