import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {ChevronDown, ChevronUp} from "react-bootstrap-icons";

const MainListGroupItemView = ({data}: any) => {
    const navigate = useNavigate();

    const [isView, setIsView] = useState<Boolean>(data?.isView)
    const toggleButtonClick = (link: string, isChild: Boolean) => {
        if (isChild) {
            navigate(link)
        } else {
            setIsView(!isView)
        }
    }
    return (
        <div>
            {/* 상위 노드 */}
            <div
                // className={`flex p-3 flex-row flex-wrap hover:bg-sky-500 ${styles?.menuParentsComponent}`}
                // className={`flex flex-row flex-wrap hover:bg-sky-500 justify-center items-center `}
                className={`${data?.className} cursor-pointer`}
                onClick={() => toggleButtonClick(data?.link, data?.isChild)}
            >
                <div className={`basis-1/6 w-10 py-4`}>
                    <i className={data?.icons}/>
                </div>
                <div className={`basis-1/2 w-64 py-4 `}>{data?.title}</div>
                {
                    !data?.isChild &&
                    <div className={`basis-1/6 w-10 py-4`}>
                        {
                            isView ?
                                <ChevronDown/>
                                :
                                <ChevronUp/>
                        }
                    </div>
                }
            </div>
            {/*    하위 노드 */}
            {isView &&
                    data?.subNode?.map((childData:any, index:number) =>
                    <div
                        key={index}
                        // className={`flex p-3 flex-row flex-wrap hover:bg-sky-500 ${styles?.menuParentsComponent}`}
                        // className={`flex flex-row flex-wrap hover:bg-sky-500 justify-center items-center `}
                        className={`${childData?.className} cursor-pointer`}
                        onClick={() => toggleButtonClick(childData?.link, childData?.isChild)}
                    >
                        <div className={`basis-1/6 w-10 py-4`}>
                            <i className={childData?.icons}/>
                        </div>
                        <div className={`basis-1/2 w-64 py-4 `}>{childData?.title}</div>
                    </div>
                )
            }
        </div>
    )
}

export default MainListGroupItemView