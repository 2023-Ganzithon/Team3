import React from 'react';
import styled from 'styled-components';
import "../styles/SignUpFin.css";
import { useNavigate } from 'react-router-dom';

function CourseMakingFin() {
  let navigate = useNavigate();

  return (
    <MainContainer>
      <MainWrapper>
        <ImgContainer>
          <img className="logoImage" src="images/courseMakginFin/(제목).svg" />
          <TicketContainer>
            <img className="ticketImage" src="images/signUpFin/여행티켓.svg" />
            <TicketText>
              <img className="station" src="images/signUpFin/구포역.svg" />
              <img className="departure" src="images/signUpFin/출발시각.svg" />
              <img className="seat" src="images/signUpFin/좌석번호.svg" />
              <img className="seatNum" src="images/signUpFin/AB 12345678.svg" />
              <img className="lastText" src="images/signUpFin/행복한 여행.svg" />
            </TicketText>
          </TicketContainer>
          <img className="mainImage" onClick={() => {navigate('/main');  window.location.reload();}} src="images/signUpFin/main.svg" />
        </ImgContainer>
      </MainWrapper>
    </MainContainer>
  );
}

export default CourseMakingFin;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
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
`;

const ImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const TicketContainer = styled.div`
  position: relative;
`;

const TicketText = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 20px;
  font-weight: bold;
`;