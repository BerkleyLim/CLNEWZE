import React from 'react'
import { Input } from 'reactstrap'

const UserInfoIndex = () => {
  return (
    <div>
      <div>조금 더 조사하고, 무엇이 들어가야 할지 정하기</div>
      <div>Back-End DB 구성 확실하게 하고나서 정하기</div>
      <div>ID</div>
      <Input type="text" name="id"/>
      <div>Password</div>
      <div>이름</div>
      <div>닉네임</div>
      <div>생년월일</div>
      <div>성별</div>
      <div>성별</div>
    </div>
  )
}

export default UserInfoIndex