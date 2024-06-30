import React from "react";
import { Box, Button, Typography, Grid } from "@mui/material";

const HeaderTwoRightComponent = () => {
  // const { subscriptModalToggle } = MyPageHeaderContainer();

  const toggleOnDisplay = () => {
    alert("이 기능은 개발 중입니다. 빠른 시일 내에 개발하겠습니다.");
  }

  return (
    <Box className="mt-4 w-full">
      <Grid container spacing={3} className="py-2">
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="warning"
            fullWidth
            size="large"
            onClick={toggleOnDisplay}
          >
            충전
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="info"
            fullWidth
            size="large"
            onClick={toggleOnDisplay}
          >
            구독
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3} className="mt-3">
        <Grid item xs={6}>
          <Typography variant="body1" align="left" fontWeight="bold">
            환전 포인트 :
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" align="right" fontWeight="bold">
            100,000 p
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className="py-2">
        <Grid item xs={6}>
          <Typography variant="body1" align="left" fontWeight="bold">
            보유 캐쉬 :
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" align="right" fontWeight="bold">
            100,000 p
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeaderTwoRightComponent;
