import React from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const UserInfomation = () => {
  return (
    <>
          안녕하세요 저는 홍길동 입니다.
      만나서 반갑습니다.
      <Form>
        <FormGroup row>
          <Col md={2}>
            <Label for="email">Email</Label>
          </Col>
          <Col md={10}>
            <Input
              id="email"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={2}>
            <Label for="password">Password</Label>
          </Col>
          <Col md={10}>
            <Input
              id="password"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={2}>
            <Label for="username">username</Label>
          </Col>
          <Col md={10}>
            <Input
              id="username"
              name="username"
              placeholder="username placeholder"
              type="username"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={2}>
            <Label for="nickname">nickname</Label>
          </Col>
          <Col md={10}>
            <Input
              id="nickname"
              name="nickname"
              placeholder="nickname placeholder"
              type="nickname"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={2}>
            <Label for="nickname">phone</Label>
          </Col>
          <Col md={10}>
            <Input
              id="phone"
              name="phone"
              placeholder="phone placeholder"
              type="phone"
            />
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default UserInfomation;
