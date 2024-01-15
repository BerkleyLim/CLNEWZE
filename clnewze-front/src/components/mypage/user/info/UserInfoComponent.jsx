import React from "react";
import { Input, InputGroup, Label } from "reactstrap";
import styles from '../../../../scss/mypage/user/info/user.module.scss'

const UserInfoComponent = () => {
  return (
    <div className={`${styles?.mypageUserInfoForm}`}>
      {/* 아이디 */}
      <InputGroup>
        <div style={{ width: "15%" }}>
          <Label>ID</Label>
        </div>
        <div style={{ width: "85%" }}>
          <Input type="text" name="id" />
        </div>
      </InputGroup>
      {/* 비밀번호 */}
      <InputGroup>
        <div style={{ width: "15%" }}>
          <Label>Password</Label>
        </div>
        <div style={{ width: "85%" }}>
          <Input type="password" name="password" />
        </div>
      </InputGroup>
      {/* 이름 */}
      <InputGroup>
        <div style={{ width: "15%" }}>
          <Label>이름</Label>
        </div>
        <div style={{ width: "85%" }}>
          <Input type="text" name="userName" />
        </div>
      </InputGroup>
      {/* 닉네임 */}
      <InputGroup>
        <div style={{ width: "15%" }}>
          <Label>닉네임</Label>
        </div>
        <div style={{ width: "85%" }}>
          <Input type="text" name="nickName" />
        </div>
      </InputGroup>
      {/* 생년월일 */}
      <InputGroup>
        <div style={{ width: "15%" }}>
          <Label>생년월일</Label>
        </div>
        <div style={{ width: "85%" }}>
          <Input type="text" name="birthday" />
        </div>
      </InputGroup>
      {/* 성별 */}
      <InputGroup>
        <div style={{ width: "15%" }}>
          <Label>성별</Label>
        </div>
        <div style={{ width: "85%" }}>
          <Input type="text" name="sex" />
        </div>
      </InputGroup>
      {/* 소개 */}
      <InputGroup>
        <div style={{ width: "15%" }}>
          <Label>소개</Label>
        </div>
        <div style={{ width: "85%" }}>
          <Input type="textarea" name="introduction" />
        </div>
      </InputGroup>
    </div>
  );
};

export default UserInfoComponent;
