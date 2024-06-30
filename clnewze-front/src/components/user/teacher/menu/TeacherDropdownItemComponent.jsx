// import React, { useEffect, useState } from "react";
// import {
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem,
//   ButtonDropdown,
//   Button,
// } from "reactstrap";
// import styles from "../../../../scss/user/teacher/teacher.module.scss";
// import TeacherContainer from "../../../../hooks/TeacherContainer";
//
// const TeacherDropdownItemComponent = ({ menuData }) => {
//   const {majorMenu} = TeacherContainer();
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [selectData, setSelectData] = useState();
//
//   const toggle = () => setDropdownOpen((prevState) => !prevState);
//
//   useEffect(() => {
//     setSelectData({name:"전체"});
//   }, [])
//
//   const selectToggleButton = (data) => {
//     setSelectData(data);
//     majorMenu(data?.category)
//   }
//   return (
//     <ButtonDropdown
//       isOpen={dropdownOpen}
//       toggle={toggle}
//       direction="down"
//       className={`dropdown ${styles?.searchBox}`}
//     >
//       <Button className="dropdownTitle" outline>
//         {" "}
//         {selectData?.name}
//       </Button>
//       <DropdownToggle className="dropdownToggle" caret color="primary">
//       </DropdownToggle>
//       <DropdownMenu>
//         {menuData?.map((data, index) => (
//           <DropdownItem key={index} onClick={() => selectToggleButton(data)}>
//             {data?.name}
//           </DropdownItem>
//         ))}
//       </DropdownMenu>
//     </ButtonDropdown>
//   );
// };
//
// export default TeacherDropdownItemComponent;
