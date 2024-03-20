import React, {useState} from 'react'
import styles from "../../css/login/login.module.scss";
import UserContainer from '../../hooks/UserContainer';
import {useNavigate} from 'react-router-dom';
import {LoginType} from '../../type/user';


const LoginComponent = () => {
    const {handlerLogin} = UserContainer();
    const navigate = useNavigate();
    const [inputs, setInputs] = useState<LoginType | null>({id: "", password: ""})

    // 아이디와 비밀번호 입력 시 이벤트 발생
    const toggleUserInfoOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target
        setInputs({
            ...inputs as LoginType,
            [name]: value
        })

        // console.log(inputs)
    }

    return (
        <div className={`${styles?.loginFormContainer}`}>
            <div className={`p-5`}>
                <div className={`mb-3`}>
                    <div className={`${styles?.loginTitle}`}>클뉴즈 관리자 로그인</div>
                </div>
                <div className={`flex flex-row flex-wrap items-center justify-center columns-9 p-2`}>
                    <div className={`columns-1 items-start p-3`}>아이디:</div>
                    <input
                        name="id"
                        type="text"
                        defaultValue={inputs?.id}
                        className={`columns-10 w-64 p-3`}
                        placeholder="input admin ID"
                        onChange={toggleUserInfoOnchange}
                    />
                </div>
                <div className={`flex flex-row flex-wrap items-center justify-center columns-9 p-2`}>
                    <div className={`columns-1 items-start p-1`}>비밀번호:</div>
                    <input
                        name="password"
                        type="password"
                        defaultValue={inputs?.password}
                        className={`columns-9 w-64 p-3`}
                        placeholder="Input admin password"
                        onChange={toggleUserInfoOnchange}
                    />
                </div>
                {/* 로그인 구현 처리 완료, But 아직은 로그인 처리가 불완전함,
            jwt 인증 받고나서 다음페이지로 넘어가, 유저정보 저장이 안되는 문제가 가끔 발생 */}
                <button className={`min-w-full mb-4 mt-4 py-3 bg-green-500 px-5`} onClick={() => {
                    handlerLogin(inputs)
                }}>로그인
                </button>
                {/* 회원가입 페이지 버튼 클릭 */}
                <button className={`min-w-full py-3 bg-yellow-200 px-5`} onClick={() => {
                    navigate('/signon')
                }}>관리 정책
                </button>

            </div>
        </div>
    )
}

export default LoginComponent