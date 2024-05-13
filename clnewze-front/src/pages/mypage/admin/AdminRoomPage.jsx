import React from 'react'
import { useRecoilValue } from 'recoil'
import { innerWidthState } from '../../../recoil/state/commonState'
import AdminPracticeRoomComponent from '../../../components/mypage/admin/practiceroom/AdminPracticeRoomComponent'
import styles from '../../../scss/mypage/admin/mypage.practiceroom.module.scss'

const AdminRoomPage = () => {
  const innerWidth = useRecoilValue(innerWidthState);
  return (
    <div className={`${innerWidth >= 860 ? styles?.myPageWebContainer : styles?.myPageMobileContainer}`}>
      <h1>연습실 관리자 페이지</h1>
      <br/>
      {/* 아래는 연습실 정보 관리자 컴포넌트 출력 부분의 대한 컴포넌트 */}
      <AdminPracticeRoomComponent />
    </div>
  )
}

export default AdminRoomPage