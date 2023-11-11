import React from "react";
import styled from 'styled-components';
import NavBar from "../styles/navBar";

function Mainpage() {
    return(
        <MainContainer>
            <MainWrapper>
            
            <NavBar />

            </MainWrapper>
        </MainContainer>
        
    );
}

export default Mainpage;

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
