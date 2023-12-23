import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Label,
  Navbar,
  Row,
} from "reactstrap";
import DropdownForm from "./SheetMusicDropdownItem";
import styles from "../../../scss/sheetmusic/sheetmusic.module.scss";
import restApiAllUser from "../../../util/restApiAllUser";
import { Search } from "react-bootstrap-icons";
import SheetMusicService from "../../../service/SheetMusicService";

const ContentsMenu = ({ genreList }) => {
  const [menuData, setMenuData] = useState();
  const [isDetail, setIsDetail] = useState(false);

  const {sheetMusicMasterMenuCategory} = SheetMusicService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await sheetMusicMasterMenuCategory();

      if (!!data) {
        setMenuData(data);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className={`${styles?.title}`}>
        <Navbar className={`${styles?.titleArea}`}>
          <h1>악보 모음</h1>
        </Navbar>
        <Row>
          <Col></Col>
          <Col>
            <Form>
              <FormGroup check inline>
                <Input type="checkbox" />
                <Label check>상세보기</Label>
              </FormGroup>
            </Form>
          </Col>
          <Col>
            <InputGroup className={`${styles?.searchBox}`}>
              <DropdownForm menuData={menuData} genreList={genreList} />
              <Input className="form-control" title="검색어 입력" />
              <Button className={`${styles?.InputGroupSearch}`}>
                <Search />
              </Button>
            </InputGroup>
          </Col>
        </Row>
        {isDetail && (
          <Row>
            <Col></Col>
          </Row>
        )}
      </div>
      <Navbar className={`${styles?.listMenu}`}>
        <h2>전체 악보 목록</h2>
      </Navbar>
    </>
  );
};

export default ContentsMenu;
