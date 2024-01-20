import React from 'react'
import { useRecoilValue } from 'recoil'
import { innerWidthState } from '../../../recoil/state/commonState'
import styles from '../../../scss/mypage/admin/mypage.teacher.module.scss'
import AdminTeacherComponent from '../../../components/mypage/admin/teacher/AdminTeacherComponent'

const AdminTeacherPage = () => {
  const innerWidth = useRecoilValue(innerWidthState);
  return (
    <div className={`${innerWidth >= 860 ? styles?.myPageWebContainer : styles?.myPageMobileContainer}`}>
      <h1>선생님 관리자 페이지</h1>
      <br/>
      {/* 아래는 선생님 정보 관리자 컴포넌트 출력 부분의 대한 컴포넌트 */}
      <AdminTeacherComponent />
    </div>
  )
}

export default AdminTeacherPage