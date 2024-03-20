import React from 'react'
import styles from '../../../scss/mypage/commom/mypage.common.module.scss'

const CareerComponent = () => {
  return (
    <div className={`${styles?.myPageWebContainer}`}>
      <h1>프로필 정보</h1>
      <br/><br/>

      <h3>소개</h3>
      <div>안녕하세요. 저는 여러분의 미래를 책임질 홍길동 입니다.</div>
      <br/><br/>

      <h3>전문분야</h3>
      <div>클래식 피아노 / 실용음악 성우 / 성악가 등 작성 </div>
      <br/><br/>

      <h3>경력사항</h3>
      <div>- 서울 예술의 전당에서 진행하는 콩쿠르 대회 우승</div>
      <div>- 서울 예술의 전당에서 진행하는 콩쿠르 대회 우승</div>
      <br/><br/>

      <h3>학력 / 전공</h3>
      <div>- 본인이 학력 및 전공의 대해 추가해주세요</div>
      <br/><br/>

      <h3>총 경력</h3>
      <div>5년</div>
      <br/><br/>

      <h3>포트폴리오</h3>
      <div>- 다음은 본인이 활동한 분야에 대해 넣어주세요.</div>
      <div>- 클래식 분야 : 본인이 직접 연주회 하거나, 콩쿠르 우승한 이력</div>
      <div>- 실용음악 분야 : 본인이 앨범을 발급하거나 직접 프로그램에 참여한 이력</div>
    </div>
  )
}

export default CareerComponent