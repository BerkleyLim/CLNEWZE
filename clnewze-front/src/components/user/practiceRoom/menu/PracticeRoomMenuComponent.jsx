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
import styles from "../../../../scss/user/practiceroom/practiceRoom.module.scss";
import UseApi from "../../../../util/UseApi";
import { Search } from "react-bootstrap-icons";
import PracticeRoomDropdownItem from "./PracticeRoomDropdownItem";
import PracticeRoomService from "../../../../service/PracticeRoomService";

const PracticeRoomMenuComponent = ({categoriesMenu}) => {
  const [menuData, setMenuData] = useState();
  const [isDetail, setIsDetail] = useState(false);
  const {practiceRoomMasterMenuCategory} = PracticeRoomService();

  useEffect(() => {
    const fetchData = async () => {
      const data = await practiceRoomMasterMenuCategory();
      if (!!data) {
        setMenuData(data)
      }
    }
    fetchData();
  }, []);
  return (
    <>
    <div className={`${styles?.title}`}>
      <Navbar className={`${styles?.titleArea}`}>
        <h2>연습실 정보</h2>
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
            <PracticeRoomDropdownItem menuData={menuData} categoriesMenu={categoriesMenu} />
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
      <h2>전체 연습실</h2>
    </Navbar>
  </>
  );
};

export default PracticeRoomMenuComponent;
