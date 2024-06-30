import React, { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import CommonContainer from "../../../hooks/CommonContainer";

const SignInComponent = () => {
  const [inputs, setInputs] = useState({ id: '', password: '' });
  const { loginButton } = CommonContainer();

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onKeyDownEnter = (e) => {
    if (e.key === 'Enter') {
      loginButton(inputs);
    }
  };

  const handleLogin = () => {
    loginButton(inputs);
  };

  return (
    <Box className="w-full max-w-sm mx-auto space-y-4">
      <TextField
        fullWidth
        name="id"
        label="ID"
        placeholder="Enter your ID"
        variant="outlined"
        margin="normal"
        value={inputs.id}
        onChange={onChange}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: '56px', // 높이 조정
            '& input': {
              padding: '12px 14px', // 텍스트 필드 내부 패딩
            },
          },
          '& .MuiInputLabel-root': {
            top: '50%',
            transform: 'translateY(-50%)', // 라벨 중앙 정렬
            paddingLeft: '8px', // 라벨 패딩 추가
            paddingRight: '8px', // 라벨 패딩 추가
          },
          '& .MuiInputLabel-shrink': {
            top: 0,
            transform: 'translateY(0)', // 축소 상태에서 위치 조정
          },
        }}
      />
      <TextField
        fullWidth
        name="password"
        label="Password"
        placeholder="Enter your password"
        type="password"
        variant="outlined"
        margin="normal"
        value={inputs.password}
        onChange={onChange}
        onKeyDown={onKeyDownEnter}
        sx={{
          '& .MuiOutlinedInput-root': {
            height: '56px', // 높이 조정
            '& input': {
              padding: '12px 14px', // 텍스트 필드 내부 패딩
            },
          },
          '& .MuiInputLabel-root': {
            top: '50%',
            transform: 'translateY(-50%)', // 라벨 중앙 정렬
            paddingLeft: '8px', // 라벨 패딩 추가
            paddingRight: '8px', // 라벨 패딩 추가
          },
          '& .MuiInputLabel-shrink': {
            top: 0,
            transform: 'translateY(0)', // 축소 상태에서 위치 조정
          },
        }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleLogin}
        style={{ borderRadius: '8px', padding: '10px 0' }}
      >
        로그인
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        fullWidth
        onClick={() => { window.location.href = "/signon"; }}
        style={{ borderRadius: '8px', padding: '10px 0' }}
      >
        회원가입
      </Button>
      <Button
        variant="text"
        fullWidth
        style={{ padding: '10px 0' }}
      >
        아이디/비밀번호 찾기
      </Button>
    </Box>
  );
};

export default SignInComponent;
