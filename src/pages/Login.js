import React, { useState } from 'react';
import styled from 'styled-components';
import "../styles/Login.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const [loginId, setLoginId] = useState('');
  const [loginPw, setLoginPw] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  let navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/login', {
        username: username,
        password: password,
      });

      setLoggedIn(true);
      setUserData(response.data);
      setError(null);
    } catch (error) {
      setLoggedIn(false);
      setUserData({});
      setError('로그인에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <MainContainer>
      <MainWrapper>
        <div className="totalBox">
          <img className="logoHigh" src="images/login/상단 로고.svg" />
          <div className="loginContainer">
            <div className="inputWrapper">
              <div className="inputBox">
                <input
                  className="idBox"
                  type="email"
                  placeholder="아이디"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                />
              </div>
              <div className="inputBox">
                <input
                  className="pwBox"
                  type="password"
                  placeholder="비밀번호"
                  value={loginPw}
                  onChange={(e) => setLoginPw(e.target.value)}
                />
              </div>
            </div>
            <img className="idPwFind" onClick={() => {navigate('/idpwchoice');}} src="images/login/idPwFind.svg" />
            <div className="loginImages">
              <img 
                onClick = {async () => {
                  await handleLogin();
                  if (loggedIn) {
                    console.log('로그인 성공!');
                    console.log('사용자 데이터:', userData);
                  } else {
                    console.error('로그인 실패: ', error);
                  }
                }}
                src="images/login/loginevent.svg" 
              />
              <img className="signUpSmall" onClick={() => {navigate('/signup')}} src="images/login/signupevent.svg" />
            </div>
          </div>
        </div>
      </MainWrapper>
    </MainContainer>
  );
}

export default Login;

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
  justify-content: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    margin: 10px 0;
  }
`;