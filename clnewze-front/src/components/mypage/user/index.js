import React from "react";
import { Col, Form, FormGroup, Input, Label } from "reactstrap";

const UserInfomation = () => {
  return (
    <>
      <Form>
        <FormGroup row>
          <Col md={2}>
            <Label for="exampleEmail">Email</Label>
          </Col>
          <Col md={10}>
            <Input
              id="exampleEmail"
              name="email"
              placeholder="with a placeholder"
              type="email"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col md={2}>
            <Label for="examplePassword">Password</Label>
          </Col>
          <Col md={10}>
            <Input
              id="examplePassword"
              name="password"
              placeholder="password placeholder"
              type="password"
            />
          </Col>
        </FormGroup>
      </Form>
    </>
  );
};

export default UserInfomation;
