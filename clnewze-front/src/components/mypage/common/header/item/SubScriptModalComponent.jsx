import React from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import MyPageHeaderContainer from "../../../../../hooks/MyPageHeaderContainer";
import { useRecoilValue } from "recoil";
import { myPageHeaderSubScriptModalIsOpenState } from "../../../../../recoil/state/myPageHeaderState";

const SubScriptModalComponent = () => {
  const isModal = useRecoilValue(myPageHeaderSubScriptModalIsOpenState);
  const { subscriptModalToggle } = MyPageHeaderContainer();

  return (
    <Dialog open={isModal} onClose={subscriptModalToggle} maxWidth="sm" fullWidth>
      <DialogTitle>홍길동 님을 구독하시겠습니까?</DialogTitle>
      <DialogContent>
        <Card>
          <CardContent>
            <Typography variant="h6">
              다음은 회원님이 지정한 등급의 대한 구독 레벨을 수행할 수 있습니다.
            </Typography>
            <Grid container spacing={2} className="mt-2">
              <Grid item xs={12}>
                <Typography>1. VVIP 등급 : 월 100,000 원</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>2. VIP 등급 : 월 50,000 원</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>3. Senior 등급 : 월 30,000 원</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>4. Middle 등급 : 월 10,000 원</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography>5. Junior 등급 : 월 3,000 원</Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={subscriptModalToggle} color="primary">
          구독하기
        </Button>
        <Button onClick={subscriptModalToggle} color="secondary">
          취소하기
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SubScriptModalComponent;
