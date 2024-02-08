import React from 'react'
import styles from '../../scss/signon/signOn.module.scss'
import { Button, Form, Input, InputGroup, Label, Navbar } from 'reactstrap'
import { useNavigate } from 'react-router-dom'

const SignOnPage = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles?.signOnContainer}`}>
      {/* 800px로 맞춤 */}
      <div style={{maxWidth:"800px"}}>
        {/* 20vh - 헤더 부분을 가리키는 회원가입 페이지 */}
        <div style={{minHeight:"20vh", border: "1px solid", padding:"3% 3% 3% 3%"}}>
          {/* 5vh */}
          <div style={{height:"5vh"}}>
            <h1>회원가입</h1> 
          </div>
          {/* 25vh */}
          <Navbar className={`${styles?.signOnPhaseComponent}`}>
            <div className={`${styles?.signOnPhase}`} style={{backgroundColor: "blue", color: "white"}}>1단계</div>
            <div className={`${styles?.signOnPhase}`}>2단계</div>
            <div className={`${styles?.signOnPhase}`}>3단계</div>
          </Navbar>
        </div>
        
        {/* 80vh : 아래는 단계별 컴포넌트를 다르게 출력시키기 - 별토 컴포넌트 빼기 */}
        <div style={{minHeight:"70vh", border: "1px solid", padding:"3% 3% 3% 3%"}}>
          {/* 15vh */}
          <div style={{height:"15vh", textAlign:"start"}}>
            <h2 >회원약관동의</h2>
            <div>회원가입을 위해서 아래의 서비스 이용약관과 개인정보 수집 및 이용안내를 읽고 동의해주세요.</div>
          </div>

          {/* 20vh */}
          <div style={{height:"20vh", textAlign:"start"}}>
            <h3>서비스 이용약관</h3>
            <InputGroup className={`${styles?.singOnTextArea} floatingTextarea`}>
              <Input type="textarea" />
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" /> 서비스 이용 약관에 동의합니다.
            </InputGroup>
          </div>

          {/* 20vh */}
          <div style={{height:"20vh", textAlign:"start"}}>
            <h3>개인 정보 취급방침</h3>
            <InputGroup className={`${styles?.singOnTextArea} floatingTextarea`}>
              <Input type="textarea" />
            </InputGroup>
            <InputGroup>
              <Input type="checkbox" /> 개인정보 취급방침에 동의합니다.
            </InputGroup>
          </div>


          <Button onClick={() => navigate('/')}>가입완료</Button>
          <Button onClick={() => {window.history.back()}}>이전화면</Button>
        </div>
      </div>
    </div>
  )
}

export default SignOnPage