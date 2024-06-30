import React from 'react';
import { Button, TextField, FormControlLabel, Checkbox, Typography, Box, Stepper, Step, StepLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import styles from '../../../scss/common/signon/signOn.module.scss';

const SignOnPage = () => {
  const navigate = useNavigate();

  return (
    <Box className={`${styles?.signOnContainer} mx-auto`} style={{ maxWidth: "800px" }}>
      {/* 20vh - 헤더 부분을 가리키는 회원가입 페이지 */}
      <Box className="border p-6 mb-4" style={{ minHeight: "20vh" }}>
        {/* 5vh */}
        <Box className="mb-4" style={{ height: "5vh" }}>
          <Typography variant="h4">회원가입</Typography>
        </Box>
        {/* 25vh */}
        <Stepper activeStep={0} className={`${styles?.signOnPhaseComponent}`}>
          <Step>
            <StepLabel>
              <Box className={`${styles?.signOnPhase}`} style={{ backgroundColor: "blue", color: "white" }}>1단계</Box>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <Box className={`${styles?.signOnPhase}`}>2단계</Box>
            </StepLabel>
          </Step>
          <Step>
            <StepLabel>
              <Box className={`${styles?.signOnPhase}`}>3단계</Box>
            </StepLabel>
          </Step>
        </Stepper>
      </Box>

      {/* 80vh : 아래는 단계별 컴포넌트를 다르게 출력시키기 - 별토 컴포넌트 빼기 */}
      <Box className="border p-6" style={{ minHeight: "70vh" }}>
        {/* 15vh */}
        <Box className="mb-4" style={{ height: "15vh", textAlign: "start" }}>
          <Typography variant="h5">회원약관동의</Typography>
          <Typography>회원가입을 위해서 아래의 서비스 이용약관과 개인정보 수집 및 이용안내를 읽고 동의해주세요.</Typography>
        </Box>

        {/* 20vh */}
        <Box className="mb-4" style={{ height: "20vh", textAlign: "start" }}>
          <Typography variant="h6">서비스 이용약관</Typography>
          <TextField
            className={`${styles?.singOnTextArea} mb-2`}
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

        {/* 20vh */}
        <Box className="mb-4" style={{ height: "20vh", textAlign: "start" }}>
          <Typography variant="h6">개인 정보 취급방침</Typography>
          <TextField
            className={`${styles?.singOnTextArea} mb-2`}
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
    </Box>
  );
};

export default SignOnPage;
