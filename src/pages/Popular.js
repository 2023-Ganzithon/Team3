import styled from 'styled-components';

function Popular() {
    return(
        <MainContainer>
            <MainWrapper>
                <LogoDiv>
                    <h3>삼시세끼</h3>
                </LogoDiv>

                <PopularDiv>
                    1. 제주도 여행
                </PopularDiv>

                <PopularDiv>
                    2. 만리포 여행
                </PopularDiv>


            </MainWrapper>
        </MainContainer>
    );
}

export default Popular;

const MainContainer = styled.div`
    background-color: #797979;
`;

const MainWrapper = styled.div`
  width: 390px;
  height: auto;
  background-color: white;
  margin: 0px;

`;

const LogoDiv = styled.div`
 padding: 20px 0px 0px 20px;
 color: #75C382;
`;

const PopularDiv = styled.div`
height: 100px;
background-color: #C1C8BB;
margin-bottom: 10px;
`;