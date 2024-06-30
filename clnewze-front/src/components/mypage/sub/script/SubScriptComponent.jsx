import React from "react";
import { Grid, TextField, Typography, Box } from "@mui/material";
import { useRecoilValue } from "recoil";
import { userState } from "../../../../recoil/state/userState";
import styles from "../../../../scss/mypage/commom/mypage.common.module.scss";

const SubScriptComponent = () => {
  const user = useRecoilValue(userState);

  return (
    <Box className={`${styles?.myPageWebContainer} p-6`}>
      <Typography variant="h4" gutterBottom>구독자 관리</Typography>
      <Typography variant="h5" gutterBottom>구독 등급 관리</Typography>
      <Typography variant="body1" gutterBottom>
        다음은 {user?.userNm} 님이 지정한 등급의 대한 구독 레벨을 수행할 수 있습니다.
      </Typography>
      <Grid container spacing={2} className="mb-3">
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">1. VVIP 등급 :</Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
            value={`월 100,000 원`}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mb-3">
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">2. VIP 등급 :</Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
            value={`월 50,000 원`}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mb-3">
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">3. Senior 등급 :</Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
            value={`월 30,000 원`}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mb-3">
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">4. Middle 등급 :</Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
            value={`월 10,000 원`}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} className="mb-3">
        <Grid item xs={12} md={2}>
          <Typography variant="subtitle1">5. Junior 등급 :</Typography>
        </Grid>
        <Grid item xs={12} md={10}>
          <TextField
            fullWidth
            variant="standard"
            InputProps={{
              readOnly: true,
            }}
            value={`월 3,000 원`}
          />
        </Grid>
      </Grid>
      <Box mt={4}>
        <Typography variant="h5" gutterBottom>구독 리스트</Typography>
        <Box className="grid grid-cols-4 gap-4">
          <Typography variant="subtitle1">index</Typography>
          <Typography variant="subtitle1">구독회원이미지</Typography>
          <Typography variant="subtitle1">구독회원닉네임</Typography>
          <Typography variant="subtitle1">구독기간(시작~종료)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SubScriptComponent;
