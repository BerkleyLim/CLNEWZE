import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Nav,
  Navbar,
  Row,
} from "reactstrap";
import DropdownForm from "./SheetMusicDropdownItem";
import styles from "../../../scss/sheetmusic/sheetmusic.module.scss";
import { Search } from "react-bootstrap-icons";
import SheetMusicService from "../../../service/SheetMusicService";

const SheetMusicMenuComponent = ({ genreList }) => {
  const [menuData, setMenuData] = useState();

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
    <>
      <div className={`${styles?.title}`}>
        <Navbar className={`${styles?.titleArea}`}>
          <h1>악보 모음</h1>
        </Navbar>
        <Navbar>
          <div style={{maxWidth:"400px"}} >
            <InputGroup className={`${styles?.searchBox}`}>
              <DropdownForm menuData={menuData} genreList={genreList} />
              <Input className="form-control" title="검색어 입력" />
              <Button className={`${styles?.InputGroupSearch}`}>
                <Search />
              </Button>
            </InputGroup>
          </div>
        </Navbar>
        <br />
        <Row className={`border`}>
          <h4 style={{ textAlign: "left" }}>장르별 검색</h4>
          <br />
          <hr />
          <br />
          {menuData?.map((data, index) => (
            <Col key={index}>
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
      <Navbar className={`${styles?.listMenu}`}>
        <h2>전체 악보 목록</h2>
      </Navbar>
    </>
  );
};

export default SheetMusicMenuComponent;
