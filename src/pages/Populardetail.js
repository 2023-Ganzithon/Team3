import styled from 'styled-components';
import ButtonContainer from './Detailbtn';


function Populardetail() {

    return(
        <MainContainer>
            <MainWrapper>
                <LogoDiv>
                    <h3>삼시세끼</h3>
                </LogoDiv>

                <DetailTitle>
                    <h4>제주도 여행</h4>
                </DetailTitle>

                <img src={process.env.PUBLIC_URL + '/img/jeju1.jpg'}
                style={{width: "390px", height: "270px"}} />


                <ButtonContainer />
                    


            </MainWrapper>
        </MainContainer>
    );
}

export default Populardetail;

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

const DetailTitle = styled.div`
    height: 60px;
    background-color: #C1C8BB;
    display: flex;
    justify-content: center;
`;