import React from 'react';
import styled from 'styled-components';
import { useNavigate, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from '../styles/navBar';
import routes from '../routess';

function Main() {
  const navigate = useNavigate();
  const myfunc = () => {
    navigate('/login');
  };

  return (
    <MainContainer>
      <MainWrapper>
        <div>
          <button onClick={myfunc}>login</button>

          <Router> 

            <Routes>
              {routes.map((route) => (
                <Route key={route.path} path={route.path} element={<route.component />} />
              ))}
            </Routes>

            <NavBar />
            </Router>

        </div>

      </MainWrapper>
    </MainContainer>
  );
}

export default Main;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #797979;
`;

const MainWrapper = styled.div`
  width: 390px;
  height: 844px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
  }
`;
