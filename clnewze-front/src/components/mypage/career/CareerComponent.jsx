import React from 'react'
import styles from '../../../scss/mypage/career/mypage.career.module.scss'

const CareerComponent = () => {
  return (
    <div className={`${styles?.myPageWebContainer}`}>
        <h1>프로필 정보</h1>

        <div className={`${styles?.formComponent}`}>
            <div className={`${styles?.formTitle}`}>소개</div>
            <div className={`${styles?.formContents}`}>안녕하세요. 저는 여러분의 미래를 책임질 홍길동 입니다.</div>
        </div>

        <div className={`${styles?.formComponent}`}>
            <div className={`${styles?.formTitle}`}>전문분야</div>
            <div className={`${styles?.formContents}`}>클래식 피아노 / 실용음악 성우 / 성악가 등 작성</div>
        </div>

        <div className={`${styles?.formComponent}`}>
            <div className={`${styles?.formTitle}`}>경력사항</div>
            <div className={`${styles?.formContents}`}>- 서울 예술의 전당에서 진행하는 콩쿠르 대회 우승</div>
            <div className={`${styles?.formContents}`}>- 서울 예술의 전당에서 진행하는 콩쿠르 대회 우승</div>
        </div>

        <div className={`${styles?.formComponent}`}>
            <div className={`${styles?.formTitle}`}>학력 / 전공</div>
            <div className={`${styles?.formContents}`}>- 본인이 학력 및 전공의 대해 추가해주세요</div>
        </div>

        <div className={`${styles?.formComponent}`}>
            <div className={`${styles?.formTitle}`}>총 경력</div>
            <div className={`${styles?.formContents}`}>5년</div>
        </div>

        <div className={`${styles?.formComponent}`}>
            <div className={`${styles?.formTitle}`}>포트폴리오</div>
            <div className={`${styles?.formContents}`}>- 다음은 본인이 활동한 분야에 대해 넣어주세요.</div>
            <div className={`${styles?.formContents}`}>- 클래식 분야 : 본인이 직접 연주회 하거나, 콩쿠르 우승한 이력</div>
            <div className={`${styles?.formContents}`}>- 실용음악 분야 : 본인이 앨범을 발급하거나 직접 프로그램에 참여한 이력</div>
        </div>
    </div>
  )
}

export default CareerComponent