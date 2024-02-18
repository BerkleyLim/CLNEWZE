import React, { useEffect, useState } from "react";
import { Button, Input, InputGroup, Label } from "reactstrap";
import styles from "../../../../scss/mypage/user/info/user.module.scss";
import UserContainer from "../../../../hooks/UserContainer";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectUpdateLoginUserInfoState } from "../../../../recoil/state/userState";

const UserInfoComponent = () => {
  // custom hooks 선언
  const { selectUpdateUserInfoProfile } = UserContainer();

  // 인풋 사용
  const [inputUserInfo, setInputUserInfo] = useState();

  // 회원 정보는 해당 로컬 변수에서만 사용한다.
  // 보안성 유의!!
  const selectUpdateLoginUserInfo = useRecoilValue(
    selectUpdateLoginUserInfoState
  );

  // 현재 경로 구하는 React Hook
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  useEffect(() => {
    selectUpdateUserInfoProfile(id);
  }, []);


  const onChange = (e) => {
    const { name, value } = e.target;
  };

  return (
    <div className={`${styles?.myPageUserInfoForm}`}>
      {/* 아이디 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>ID</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input
            type="text"
            name="id"
            onChange={onChange}
            defaultValue={selectUpdateLoginUserInfo?.id}
            readOnly
          />
        </div>
      </InputGroup>
      {/* 비밀번호 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>Password</Label>
        </div>
        <div style={{ width: "75%" }}>
          {/* 비밀번호는 다시 새로 입력하는 방식으로 두기! */}
          <Input type="password" name="password" onChange={onChange}/>
        </div>
      </InputGroup>
      {/* 이름 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>이름</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="userName" onChange={onChange} defaultValue={selectUpdateLoginUserInfo?.userName} />
        </div>
      </InputGroup>
      {/* 닉네임 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>닉네임</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="nickName" onChange={onChange} defaultValue={selectUpdateLoginUserInfo?.nickName} />
        </div>
      </InputGroup>
      {/* 생년월일 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>생년월일</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="birthday" onChange={onChange} defaultValue={selectUpdateLoginUserInfo?.birthday} />
        </div>
      </InputGroup>
      {/* 성별 */}
      <InputGroup>
        <div style={{ width: "25%" }}>
          <Label>성별</Label>
        </div>
        <div style={{ width: "75%" }}>
          <Input type="text" name="sex" onChange={onChange} defaultValue={selectUpdateLoginUserInfo?.sex} />
        </div>
      </InputGroup>

      <Button>수정</Button>
    </div>
  );
};

export default UserInfoComponent;
