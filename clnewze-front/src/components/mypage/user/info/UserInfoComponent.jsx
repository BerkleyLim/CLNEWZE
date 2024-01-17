import React from "react";
import { Button, Input, InputGroup, Label } from "reactstrap";
import styles from '../../../../scss/mypage/user/info/user.module.scss'

const UserInfoComponent = () => {
  return (
    <div className={`${styles?.myPageUserInfoForm}`}>
      {/* 아이디 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>ID</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="id" />
        </div>
      </InputGroup>
      {/* 비밀번호 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>Password</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="password" name="password" />
        </div>
      </InputGroup>
      {/* 이름 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>이름</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="userName" />
        </div>
      </InputGroup>
      {/* 닉네임 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>닉네임</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="nickName" />
        </div>
      </InputGroup>
      {/* 생년월일 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>생년월일</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="birthday" />
        </div>
      </InputGroup>
      {/* 성별 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>성별</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="sex" />
        </div>
      </InputGroup>

      <Button>수정</Button>
    </div>
  );
};

export default UserInfoComponent;
