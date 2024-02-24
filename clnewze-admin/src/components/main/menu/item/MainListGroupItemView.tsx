import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ListGroupItem } from 'reactstrap'

const MainListGroupItemView = ({menuData}:any) => {
  const navigate = useNavigate();

  const toggleButtonClick = (link : string) => {
    navigate(link)
  }
  return (
    <ListGroupItem
      style={menuData?.isView ? 
        menuData?.style
       : {display: "none"}}
      tag={`button`}
      onClick={() => toggleButtonClick(menuData?.link)}
    >
      {menuData?.title}
    </ListGroupItem>
  )
}

export default MainListGroupItemView