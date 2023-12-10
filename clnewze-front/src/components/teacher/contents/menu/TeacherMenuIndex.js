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
import styles from "../../teacher.module.scss";
import DropdownForm from "./dropdown";
import URI from "../../../../util/URI";
import { Search } from "react-bootstrap-icons";

const ContentsMenu = ({ teachers, majormenu }) => {
  const [menuData, setMenuData] = useState();
  const [isDetail, setIsDetail] = useState(false);

  useEffect(() => {
    URI.get(
      process.env.REACT_APP_API_ROOT + "/api/teacher/master/menu/category"
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
          <h1>선생님 정보</h1>
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
              <DropdownForm menuData={menuData} majormenu={majormenu} />
              {/* <Input className="form-control" title="검색어 입력" /> */}
              <Input 
                type="search"
                placeholder="Placeholder"
                // value="Doe"
                className="form-control"
                data={teachers}
                callback={(record) => console.log(record)}
              />
              {/* <Input className="form-control" title="검색어 입력" /> */}
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
        <h2>선생님 조회</h2>
      </Navbar>
    </>
  );
};

export default ContentsMenu;
