import React, { useEffect, useState } from "react";
import { Button, TextField, Box, Typography } from "@mui/material";
import styles from "../../../../scss/mypage/user/info/user.module.scss";
import UserContainer from "../../../../hooks/UserContainer";
import { useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { selectUpdateLoginUserInfoState } from "../../../../recoil/state/userState";

const UserInfoComponent = () => {
  const { selectUpdateUserInfoProfile } = UserContainer();
  const [inputUserInfo, setInputUserInfo] = useState({});
  const selectUpdateLoginUserInfo = useRecoilValue(selectUpdateLoginUserInfoState);
  const { pathname } = useLocation();
  const id = pathname.split("/")[2];

  useEffect(() => {
    selectUpdateUserInfoProfile(id);
  }, [id, selectUpdateUserInfoProfile]);

  useEffect(() => {
    if (selectUpdateLoginUserInfo) {
      setInputUserInfo(selectUpdateLoginUserInfo);
    }
  }, [selectUpdateLoginUserInfo]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputUserInfo({
      ...inputUserInfo,
      [name]: value,
    });
  };

  return (
    <Box className={`${styles?.myPageUserInfoForm} p-4`}>
      {/* 아이디 */}
      <Box className="mb-4 flex items-center">
        <Typography className="w-1/4">ID</Typography>
        <TextField
          className="w-3/4"
          variant="outlined"
          name="id"
          onChange={onChange}
          value={inputUserInfo?.id || ""}
          InputProps={{
            readOnly: true,
          }}
        />
      </Box>
      {/* 비밀번호 */}
      <Box className="mb-4 flex items-center">
        <Typography className="w-1/4">Password</Typography>
        <TextField
          className="w-3/4"
          variant="outlined"
          type="password"
          name="password"
          onChange={onChange}
        />
      </Box>
      {/* 이름 */}
      <Box className="mb-4 flex items-center">
        <Typography className="w-1/4">이름</Typography>
        <TextField
          className="w-3/4"
          variant="outlined"
          name="userName"
          onChange={onChange}
          value={inputUserInfo?.userName || ""}
        />
      </Box>
      {/* 닉네임 */}
      <Box className="mb-4 flex items-center">
        <Typography className="w-1/4">닉네임</Typography>
        <TextField
          className="w-3/4"
          variant="outlined"
          name="nickName"
          onChange={onChange}
          value={inputUserInfo?.nickName || ""}
        />
      </Box>
      {/* 생년월일 */}
      <Box className="mb-4 flex items-center">
        <Typography className="w-1/4">생년월일</Typography>
        <TextField
          className="w-3/4"
          variant="outlined"
          name="birthday"
          onChange={onChange}
          value={inputUserInfo?.birthday || ""}
        />
      </Box>
      {/* 성별 */}
      <Box className="mb-4 flex items-center">
        <Typography className="w-1/4">성별</Typography>
        <TextField
          className="w-3/4"
          variant="outlined"
          name="sex"
          onChange={onChange}
          value={inputUserInfo?.sex || ""}
        />
      </Box>
      <Box className="flex justify-center mt-4">
        <Button variant="contained" color="primary">
          수정
        </Button>
      </Box>
    </Box>
  );
};

export default UserInfoComponent;
