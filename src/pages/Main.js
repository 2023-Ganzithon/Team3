import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function Main() {

    const navigate = useNavigate()
    
    const gotofindfood = () => {
        navigate('/findfood')
    };
    const gotopopular = () => {
        navigate('/popular')
    }
    
    return (
        <MainContainer>
            <MainWrapper>
                <LogoDiv>
                    <h3>삼시세끼</h3>
                </LogoDiv>
                <MainDivOne>
                    <img src={process.env.PUBLIC_URL + '/img/logoimg.png'} />
                </MainDivOne>

                <MainDivTwo>

                        <button>코스 짜보기</button>
                        <button onClick={gotofindfood}>맛집 둘러보기</button>
                        <button onClick={gotopopular}>인기코스<br />둘러보기</button>
  
                </MainDivTwo>

                <MainDivTre>
                    <p>큐레이터 추천맛집</p>
                    <div>
                        <button>강릉편</button>
                        <button>충청도편</button>
                        <button>가평편</button>
                    </div>
                </MainDivTre>

                <MainDivFou>
                    <p>유저들이 만든 추천코스</p>
                    <div>
                        <button>제주도 맛집 뿌시기</button>
                        <button>힐링 여행</button>
                        <button>대중교통</button>
                    </div>
                </MainDivFou>

                <MainDivFiv>
                    <button>신규 코스 더보기 </button>
                </MainDivFiv>

            </MainWrapper>
        </MainContainer>
        
    );
}

export default Main;

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

const MainDivOne = styled.div`
    height: 200px;
    overflow-x: auto;

    `;

const MainDivTwo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 80px;
    background-color: #E6E6E6;
    padding: 5px 20px 5px 20px;
    margin-bottom: 10px;

    button {
        border: none;
        background-color: transparent;
        padding: 20px;
        font-weight: bold;
        font-size: 14px;

        font-family: Maple;
    }
`;

const MainDivTre = styled.div`
    height: 140px;
    background-color: #E6E6E6;
    padding: 5px 20px 5px 20px;
    margin-bottom: 10px;

    p {
        font-weight: bold;
    }

    div {
        display: flex;
        justify-content: space-around;
    }

    button {
        width: 70px;
        height: 70px;
        border: none;
        border-radius: 100px;
        background-color: #75C382;
        color: white;

        font-family: Maple;
    }
`;

const MainDivFou = styled.div`
    height: 140px;
    background-color: #E6E6E6;
    padding: 5px 20px 5px 20px;
    margin-bottom: 10px;

    p {
        font-weight: bold;
    }

    div {
        display: flex;
        justify-content: space-around;
    }

    button {
        width: 80px;
        height: 70px;
        border: none;
        border-radius: 10px;
        background-color: #797979;
        color: white;

        font-family: Maple;
    }
`;

const MainDivFiv = styled.div`
    padding: 10px 20px 0px 0px;
    display: flex;
    justify-content: end;

    button {
        width: 120px;
        height: 40px;
        background-color: #75C382;
        border-radius: 15px;
        padding: 5px;
        color: white;
        align-items: center;
        justify-content: center;
        border: none;

        font-family: Maple;
        font-weight: bold;
    }

`;