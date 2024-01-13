import React from 'react'
import styles from '../../../../../scss/mypage/admin/mypage.user.info.module.scss'

const AdminUserInfoComponent = () => {
  return (
    <div>
    <div>searchbox 영역</div>
    <br/>
    <div className={`${styles?.rowHeadTable}`}>
      <div className={`${styles?.colHeadTable}`}>uno</div>
      <div className={`${styles?.colHeadTable}`}>id</div>
      <div className={`${styles?.colHeadTable}`}>passWord</div>
      <div className={`${styles?.colHeadTable}`}>userName</div>
    </div>
    <div className={`${styles?.rowBodyTable}`}>
      <div className={`${styles?.colBodyTable}`}>1</div>
      <div className={`${styles?.colBodyTable}`}>admin</div>
      <div className={`${styles?.colBodyTable}`}>alskdfjhalsdkfjh128u8wheiudjh3iu</div>
      <div className={`${styles?.colBodyTable}`}>admin</div>
    </div>
    <div className={`${styles?.rowBodyTable}`}>
      <div className={`${styles?.colBodyTable}`}>2</div>
      <div className={`${styles?.colBodyTable}`}>test1</div>
      <div className={`${styles?.colBodyTable}`}>alskdfjhalsdkfjh128u8wheiudjh3iu</div>
      <div className={`${styles?.colBodyTable}`}>test1</div>
    </div>
  </div>
  )
}

export default AdminUserInfoComponent