import styled from 'styled-components';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Fooddetail() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedProvince = queryParams.get('province');
  const selectedCity = queryParams.get('city');

    return(
    <MainContainer>
        <MainWrapper>
                <LogoDiv>
                    <h3>삼시세끼</h3>
                </LogoDiv>

                <div>
                <p># {selectedProvince} {selectedCity} 에서 삼시세끼</p>
                </div>
        </MainWrapper>
    </MainContainer>

    );
};

export default Fooddetail;

const LogoDiv = styled.div`
 padding: 20px 0px 0px 20px;
 color: #75C382;
`;

const MainContainer = styled.div`
  width: 100%;
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