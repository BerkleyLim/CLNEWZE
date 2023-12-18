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
import styles from "../../practiceRoom.module.scss";
import DropdownForm from "./dropdown";
import restApiAllUser from "../../../../util/restApiAllUser";
import { Search } from "react-bootstrap-icons";

const ContentsMenu = ({categorieMenu}) => {
  const [menuData, setMenuData] = useState();
  const [isDetail, setIsDetail] = useState(false);

  useEffect(() => {
    restApiAllUser.get(
      process.env.REACT_APP_API_ROOT + "practiceroom/master/menu/category"
    )
      .then((res) => {
        setMenuData(res.data.data);
      })
      .catch((e) => console.error(e));
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
            <DropdownForm menuData={menuData} categorieMenu={categorieMenu} />
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

export default ContentsMenu;
