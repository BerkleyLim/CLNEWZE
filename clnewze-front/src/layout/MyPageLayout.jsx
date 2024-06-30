import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import UserContainer from '../hooks/UserContainer';
import { useRecoilState } from 'recoil';
import { innerWidthState } from '../recoil/state/commonState';
import MyPageWebPage from './item/MyPageWebPage';
import MyPageMobilePage from './item/MyPageMobilePage';

const MyPageLayout = () => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const { userProfile } = UserContainer();
  const [innerWidth, setInnerWidth] = useRecoilState(innerWidthState);

  useEffect(() => {
    const resizeListener = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener('resize', resizeListener);
  }, [setInnerWidth]);

  useEffect(() => {
    const fetch = async () => {
      await userProfile(id);
    };
    fetch();
  }, [id, userProfile]);

  return (
    <div className="min-h-screen">
      {innerWidth >= 860 ? <MyPageWebPage /> : <MyPageMobilePage />}
    </div>
  );
};

export default MyPageLayout;
