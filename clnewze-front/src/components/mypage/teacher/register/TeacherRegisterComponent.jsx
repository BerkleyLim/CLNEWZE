import React from "react";
import styles from "../../../../scss/mypage/mypage.module.scss";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const TeacherRegister = () => {
  return (
    <div>
      <h1>선생님 등록 안내</h1>
      <br/><br/>
      <Form>
        <FormGroup row>
          <Label for="name" size="lg" sm={2}>
            이름
          </Label>
          <Col sm={10}>
            <Input
              bsSize="lg"
              name="name"
              placeholder="이름을 입력하세요."
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="name" size="lg" sm={2}>
            소개
          </Label>
          <Col sm={10}>
            <Input
              bsSize="lg"
              name="introduction"
              placeholder="이름을 입력하세요."
              type="textarea"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="major" size="lg" sm={2}>
            전문분야
          </Label>
          <Col sm={10}>
            <Input
              bsSize="lg"
              name="major"
              placeholder="전문분야를 입력하세요."
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="experience" size="lg" sm={2}>
            경력
          </Label>
          <Col sm={10}>
            <Input
              bsSize="lg"
              name="experience"
              placeholder="경력을 입력하세요."
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="area" size="lg" sm={2}>
            활동지역
          </Label>
          <Col sm={10}>
            <Input
              bsSize="lg"
              name="area"
              placeholder="활동 지역을 입력하세요."
              type="text"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="area" size="lg">
            포트폴리오 첨부
          </Label>
          <Input
            bsSize="lg"
            id="exampleFile"
            name="file"
            type="file"
          />
        </FormGroup>
      </Form>
    </div>
  );
};

export default TeacherRegister;
