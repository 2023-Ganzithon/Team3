import React, { useState } from 'react';
import styled from 'styled-components';
import "../styles/SignUp.css"
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function SignUp() {
  const [signUpId, setSignUpId] = useState('');
  const [signUpPw, setSignUpPw] = useState('');
  const [pwConfirm, setPwConfirm] = useState('');
  const [pwMatch, setPwMatch] = useState(true);
  let navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      if (signUpPw !== pwConfirm) {
        setPwMatch(false);
        return;
      }
    
      const response = await axios.post('', {
        username: signUpId,
        password: signUpPw,
        repassword: pwConfirm,
      });

      console.log('회원가입 성공: ', response.data);

      navigate('/signupfin');
    } catch (error) {
      console.error('회원가입 실패: ', error);
    }

  };

  return (
    <MainContainer>
      <MainWrapper>
        <div className="totalBoxSignUp">
          <img className="logoHighSignUp" src="images/signUp/logoSignUp.svg" />
          <div className="signUpContainer">
            <div className="inputWrapper">
              <div className="inputBox">
                <input
                  className="idBox"
                  type="email"
                  placeholder="아이디 입력"
                  value={signUpId}
                  onChange={(e) => setSignUpId(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  className="pwBox"
                  type="password"
                  placeholder="비밀번호"
                  value={signUpPw}
                  onChange={(e) => setSignUpPw(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  className="pwBox"
                  type="password"
                  placeholder="비밀번호 재입력"
                  value={pwConfirm}
                  onChange={(e) => {
                    setPwConfirm(e.target.value);
                    setPwMatch(true);
                  }}
                />
                {!pwMatch && <img src="images/signUp/pwMismatch.svg" className="pwMismatch" />}
              </div>
            </div>
            <div className="signUpImages">
              <img className="signUpSmall" onClick={handleSignUp} src="images/login/signupevent.svg" />
            </div>
          </div>
        </div>
      </MainWrapper>
    </MainContainer>
  );
}

export default SignUp;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #797979;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;
  position: flex;
  flex-direction: column; 
  align-items: center;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    margin: 10px 0;
  }
`;