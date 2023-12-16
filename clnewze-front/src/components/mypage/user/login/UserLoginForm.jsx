import React, { useState } from "react";
import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import UserContainer from "../../../../hooks/UserContainer";

const UserLoginForm = ({setIsView}) => {
  const [inputs, setInputs] = useState();
  const { handlerMyPageLogin } = UserContainer();

  // 입력
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  // 로그인 시 상태 전환시켜주기
  const toggleUserView = async () => {
    const isUserView = await handlerMyPageLogin(inputs);
    setIsView(isUserView)
  }
  return (
    <Form>
      <h2 style={{textAlign:"center"}}>로그인</h2>
      <br/>
      <FormGroup row>
        <Col md={2}>
          <Label for="id">id</Label>
        </Col>
        <Col md={10}>
          <Input name="id" placeholder="with a placeholder" type="text" onChange={onChange}/>
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
            onChange={onChange}
          />
        </Col>
        <br/><br/>
        <Button onClick={() => {toggleUserView()}}>확인</Button>
      </FormGroup>
    </Form>
  );
};

export default UserLoginForm;
