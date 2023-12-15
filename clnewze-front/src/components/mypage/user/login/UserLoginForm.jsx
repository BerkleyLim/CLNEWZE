import React from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";

const UserLoginForm = () => {
  return (
    // <Form className={`p-5 w-50`}>
    <Form>
      <h2 style={{textAlign:"center"}}>로그인</h2>
      <br/>
      <FormGroup row>
        <Col md={2}>
          <Label for="exampleEmail">Email</Label>
        </Col>
        <Col md={10}>
          <Input name="email" placeholder="with a placeholder" type="email" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md={2}>
          <Label for="examplePassword">Password</Label>
        </Col>
        <Col md={10}>
          <Input
            name="password"
            placeholder="password placeholder"
            type="password"
          />
        </Col>
        <br/><br/>
        <Button>확인</Button>
      </FormGroup>
    </Form>
  );
};

export default UserLoginForm;
