import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Mycourse() {

    const navigate = useNavigate()
    const gotocoursemaking = () => {
        navigate('/coursemaking')
    };

    return (
        <MainContainer>
            <MainWrapper>
                <LogoDiv>
                    <h3>삼시세끼</h3>
                </LogoDiv>

                <MycourseDiv>
                    1. 죽여주는 제주도 여행
                </MycourseDiv>

                <MycourseDiv>
                    2. 난 바다가 좋아
                </MycourseDiv>

                <NewcourseBtn>
                    <button onClick={gotocoursemaking}>새 코스 추가하기</button>
                </NewcourseBtn>

            </MainWrapper>
        </MainContainer>
        
    );
}

export default Mycourse;

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


const LogoDiv = styled.div`
 padding: 20px 0px 0px 20px;
 color: #75C382;
`;

const NewcourseBtn = styled.div`
    display: flex;
    justify-content: end;
    padding: 20px;

    button {
        border: none;
        border-radius: 15px;
        padding: 10px;
        background-color: #75C382;
        color: white;

        font-family: Maple;
        font-weight: bold;
    }
`;

const MycourseDiv = styled.div`
    padding: 20px;
    height: 150px;
    background-color: #C1C8BB;
    margin-bottom: 10px;
`;

