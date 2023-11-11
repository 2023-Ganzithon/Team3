import React, { useState } from 'react';
import styled from 'styled-components';
import "../styles/IdPwChoice.css"
import { useNavigate } from 'react-router-dom';

function IdPwChoice() {
    let navigate = useNavigate();
  
    return (
      <MainContainer>
        <MainWrapper>
            <div className="LogoAndOptions">
                <img className="idPwChoiceLogo" src="images/idPwChoice/idPwChoice.svg" alt="Logo" />
                <div className="totalFindPart">
                    <div className="idFindPart">
                        <div className="findSection">
                            <img src="images/idPwChoice/idFindImg.svg" alt="Find ID" />
                            <img src="images/idPwChoice/idFindText.svg" alt="Find ID Text" />
                        </div>
                    </div>
                    <div className="pwFindPart">
                        <div className="findSection">
                            <img src="images/idPwChoice/pwFindImg.svg" alt="Find Password" />
                            <img src="images/idPwChoice/pwFindText.svg" alt="Find Password Text" />
                        </div>
                    </div>
                </div>
            </div>
        </MainWrapper>
      </MainContainer>
    );
  }
  
export default IdPwChoice;
  
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;`;