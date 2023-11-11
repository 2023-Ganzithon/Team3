import { Link } from "react-router-dom";
import styled from 'styled-components';

const NavBar = () => {
    return(
        <MainContainer>
        <MainWrapper>
        <nav style={{paddingBottom: "10px"}}>
            <div style={{display:"flex" , justifyContent: 'space-around', position: 'fixed', bottom: '0', width: "390px"}}>
                <Link to="/main" style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>
                <p>홈</p>
                </Link>
    
                <Link to="/findfood" style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>
                <p>맛집 찾아보기</p>
                </Link>
    
                <Link to="/mycourse" style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>
                <p>내 코스</p>
                </Link>
    
                <Link to="/mypage" style={{textDecoration: 'none', color: 'black', fontWeight: 'bold'}}>
                <p>마이페이지</p>
                </Link>
            </div>
        </nav>
        </MainWrapper>
        </MainContainer>
    );
}

export default NavBar;

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

