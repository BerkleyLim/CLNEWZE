import React from 'react'
import styles from '../../../scss/mypage/admin/mypage.user.info.module.scss'
import AdminUserInfoComponent from '../../../components/mypage/admin/user/info/AdminUserInfoComponent'
import { useRecoilValue } from 'recoil'
import { innerWidthState } from '../../../recoil/state/commonState'

const UserListPage = () => {
  const innerWidth = useRecoilValue(innerWidthState);
  return (
    <div className={`${innerWidth >= 860 ? styles?.myPageWebContainer : styles?.myPageMobileContainer}`}>
      <h1>회원 정보 출력</h1>
      <br/>
      {/* 아래는 회원 정보 출력 부분의 대한 컴포넌트 */}
      <AdminUserInfoComponent />
    </div>
  )
}

export default UserListPage