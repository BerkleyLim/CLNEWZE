import React, { useEffect, useState } from "react";
import {
  Col,
  Input,
  InputGroup,
  Navbar,
  Row,
} from "reactstrap";
import DropdownForm from "./MyPageSheetMusicDropdownItem";
import styles from "../../../../scss/mypage/sheetmusic/mypage.sheetmusic.module.scss";
import SheetMusicService from "../../../../service/SheetMusicService";
import { useRecoilValue } from "recoil";
import { innerWidthState } from "../../../../recoil/state/commonState";

const MyPageSheetMusicMenuComponent = ({ genreList }) => {
  const [menuData, setMenuData] = useState();
  const innerWidth = useRecoilValue(innerWidthState);
  const { sheetMusicMasterMenuCategory } = SheetMusicService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await sheetMusicMasterMenuCategory();
      if (!!data) {
        setMenuData(data);
      }
    };
    fetchData();
  }, []);

  return (
    <div className={`${styles?.title}`}>
      <Navbar
        className={`${styles?.inputBoxComponent}`}
        style={innerWidth >= 860 ? { display: "block" } : { display: "none" }}
      >
        <InputGroup className={`${styles?.searchBox}`}>
          <DropdownForm menuData={menuData} genreList={genreList} />
          <Input className="form-control" title="검색어 입력" />
        </InputGroup>
      </Navbar>
      <br />
      <Row className={`border`}>
        <h4 style={{ textAlign: "left" }}>장르별 검색</h4>
        <br />
        <hr />
        <br />
        {menuData?.map((data, index) => (
          <Col sm={3} key={index} className={'p-3'}>
            <InputGroup>
              <Input
                type="checkbox"
                name={"selectGenre"}
                value={data?.category}
              />
              <div style={{ padding: "0 0 0 10px" }}>{data?.name}</div>
            </InputGroup>
          </Col>
        ))}
        <br />
        <br />
      </Row>
    </div>
  );
};

export default MyPageSheetMusicMenuComponent;
