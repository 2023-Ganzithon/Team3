import { Link } from "react-router-dom";

const NavBar = () => {
    return(
        <>
        
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
        </>
    );
}

export default NavBar;

