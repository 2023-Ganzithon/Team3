import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Mypage() {
    const navigate = useNavigate();

    const initialUserData = {
        userId: 'ccyy1029',
        email: 'ccyy1029@naver.com',
        nickname: 'chaeneey',
        username: '채연',
        phone: '01035234741',
        birth: '011029',
        name: '박채연',
        created_at: '2023-11-08T18:01:08.903523Z',
    };

    const [userInfo, setUserInfo] = useState(initialUserData);

    const goToUser = () => {
        navigate('/user');
    };

    const goToMyCourse = () => {
        navigate('/mycourse');
    };

    useEffect(() => {
        // 실제 백엔드 API 엔드포인트에 맞게 수정
        fetch('https://your-backend-api.com/user-info')
            .then((response) => response.json())
            .then((data) => setUserInfo(data))
            .catch((error) => console.error('Error fetching user info:', error));
    }, []);

    return (
        <MainContainer>
            <MainWrapper>
                <LogoDiv>
                    <h3>삼시세끼</h3>
                </LogoDiv>

                <MyDivOne>
                    <div>
                        <img src={process.env.PUBLIC_URL + '/img/Vector.png'} />
                        <a>마이페이지</a>
                    </div>

                    <div>
                        <img style={{ borderBlockColor: '#75C382' }} />
                        {userInfo && <a>{userInfo.name}님, 안녕하세요!</a>}
                    </div>
                </MyDivOne>

                <MyDivTwo onClick={goToMyCourse}>내 코스</MyDivTwo>

                <MyDivTre onClick={goToUser}>내 정보 수정</MyDivTre>

                <MyDivFou>로그아웃</MyDivFou>

            </MainWrapper>
        </MainContainer>
    );
}

export default Mypage;

const MainContainer = styled.div`
    background-color: #797979;
`;

const MainWrapper = styled.div`
    width: 390px;
    height: 844px;
    background-color: white;
    margin: 0px;
`;

const LogoDiv = styled.div`
    padding: 20px 0px 0px 20px;
    color: #75C382;
`;

const MyDivOne = styled.div`
    height: 200px;
    padding: 20px;
    background-color: #E3E3E3;
    margin-bottom: 10px;

    div {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    img {
        margin-right: 10px;
    }

    a {
        font-weight: bold;
    }
`;

const MyDivTwo = styled.button`
    width: 390px;
    height: 60px;
    padding: 20px;
    background-color: #E3E3E3;
    margin-bottom: 10px;
    border: none;

    font-family: Maple;
    font-weight: bold;
`;

const MyDivTre = styled.button`
    width: 390px;
    height: 60px;
    padding: 20px;
    background-color: #E3E3E3;
    margin-bottom: 10px;
    border: none;

    font-family: Maple;
    font-weight: bold;
`;

const MyDivFou = styled.button`
    width: 390px;
    height: 60px;
    padding: 20px;
    background-color: #E3E3E3;
    margin-bottom: 10px;
    border: none;

    font-family: Maple;
    font-weight: bold;
`;
