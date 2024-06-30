import React from 'react';
import styles from '../../../scss/common/signon/signOn.module.scss';
import { Button, TextField, FormControlLabel, Checkbox, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SignOnComponent = () => {
  const navigate = useNavigate();

  return (
    <Box style={{ minHeight: "70vh", border: "1px solid", padding: "3%" }}>
      <Box style={{ height: "15vh", textAlign: "start" }}>
        <Typography variant="h4">회원약관동의</Typography>
        <Typography>
          회원가입을 위해서 아래의 서비스 이용약관과 개인정보 수집 및 이용안내를 읽고 동의해주세요.
        </Typography>
      </Box>

      <Box style={{ height: "20vh", textAlign: "start" }}>
        <Typography variant="h5">서비스 이용약관</Typography>
        <TextField
          className={`${styles?.singOnTextArea}`}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox />}
          label="서비스 이용 약관에 동의합니다."
        />
      </Box>

      <Box style={{ height: "20vh", textAlign: "start" }}>
        <Typography variant="h5">개인 정보 취급방침</Typography>
        <TextField
          className={`${styles?.singOnTextArea}`}
          multiline
          rows={4}
          variant="outlined"
          fullWidth
        />
        <FormControlLabel
          control={<Checkbox />}
          label="개인정보 취급방침에 동의합니다."
        />
      </Box>

      <Button variant="contained" color="primary" onClick={() => navigate('/')}>
        가입완료
      </Button>
      <Button variant="outlined" color="secondary" onClick={() => { window.history.back() }}>
        이전화면
      </Button>
    </Box>
  );
};

export default SignOnComponent;
