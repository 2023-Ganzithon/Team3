import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  const myfunc = () => {
    navigate('/login');
  }
  return (
    <MainContainer>
      <MainWrapper>
        <div>
          <button onClick={myfunc}>login</button>
        </div>
      </MainWrapper>
    </MainContainer>
  );
}

export default Home;

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