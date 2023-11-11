import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function User() {
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

  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    // 실제 백엔드 API 엔드포인트에 맞게 수정
    fetch('https://your-backend-api.com/user-data')
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => console.error('Error fetching user data:', error));
  }, []);

  const handleSave = () => {
    // 사용자 정보 수정을 위한 request 데이터
    const requestData = {
      email: userData.email,
      nickname: userData.nickname,
      username: userData.username,
      phone: userData.phone,
      birth: userData.birth,
      name: userData.name,
    };

    // 실제 백엔드 API 엔드포인트에 맞게 수정
    fetch('https://your-backend-api.com/update-user', {
      method: 'PUT', // 또는 'POST'에 따라 백엔드 API 요구에 맞게 설정
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => response.json())
      .then((updatedUserData) => {
        // 수정된 사용자 정보를 반영
        setUserData(updatedUserData);
      })
      .catch((error) => console.error('Error updating user data:', error));
  };

  return (
    <MainContainer>
      <MainWrapper>
      <LogoDiv>
          <h3>삼시세끼</h3>
        </LogoDiv>

        <UserDivOne>
              <img src={process.env.PUBLIC_URL + '/img/Vector.png'} />
              <a>내 정보 수정</a>
        </UserDivOne>


        {userData && (
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {/* 나머지 사용자 정보 표시 */}


            <UserDivTre>
              <div>닉네임</div>
              <input defaultValue={userData.nickname} />
              <button>저장</button>
            </UserDivTre>

            <UserDivFor>
              <div>아이디</div>
              <input defaultValue={userData.userId} />
            </UserDivFor>

            <UserDivFiv>
              <div>비밀번호</div>
              <input />
              <button>변경</button>
            </UserDivFiv>

            <UserDivSix>
              <div>이메일</div>
              <input defaultValue={userData.email}></input>
            </UserDivSix>

            <UserDivSev>
              <div>이름</div>
              <input defaultValue={userData.username}></input>
            </UserDivSev>

            <UserDivEig>
              <div>전화번호</div>
              <input defaultValue={userData.phone}></input>
            </UserDivEig>

            <UserDivNin>
              <div>생년월일</div>
              <input defaultValue={userData.birth}></input>
            </UserDivNin>

            <UserDivTen>
              <div>가입일</div>
              <input defaultValue={userData.created_at}></input>
            </UserDivTen>

            <UserDivEle>
              <button onClick={handleSave}>저장</button>
            </UserDivEle>
          </div>
        )}
      </MainWrapper>
    </MainContainer>
  );
}

export default User;




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

const UserDivOne = styled.div`
    height: 70px;
    background-color: #E3E3E3;
    margin-bottom: 30px;
    display: flex;
    aling-items: center;
    
    img {
        width: 30px;
        height: 30px;
        margin: 20px;
    }

    a {
        margin-top: 25px;
        font-weight: bold;
    }
`;

const UserDivTwo = styled.div`
    display: flex;
    padding: 5px 0px 5px 30px;


    div {
        display: flex;
        width: 82px;
        height: 25px;
        background-color: #75C382;
        border-radius: 13px;
        padding: 5px 10px 5px 10px;
        color: white;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    input {
        margin-left: 12px;
    }

`;

const UserDivTre = styled.div`
        display: flex;  
        padding: 5px 0px 5px 30px;

        div {
            display: flex;
            width: 80px;
            height: 25px;
            background-color: #75C382;
            border-radius: 13px;
            padding: 5px 10px 5px 10px;
            color: white;

            display: flex;
            align-items: center;
            justify-content: center;
        }

        button {
            width: 55px;
            height: 35px;
            background-color: #75C382;
            border-radius: 10px;
            padding: 5px 10px 5px 10px;
            color: white;
            align-items: center;
            justify-content: center;
            border: none;
        }

        button:hover {
            background-color: #3D8F4A;
        }

        input {
            width: 140px;
            margin: 0px 12px 0px 12px;
            border-radius: 10px;
            border-color: #75C382;
        }
`;

const UserDivFor = styled.div`
display: flex;
padding: 5px 0px 5px 30px;


div {
    display: flex;
    width: 80px;
    height: 25px;
    background-color: #75C382;
    border-radius: 13px;
    padding: 5px 10px 5px 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 210px;
    margin: 0px 0px 0px 12px;
    border-radius: 10px;
    border-color: #75C382;
}
`;
const UserDivFiv = styled.div`
display: flex;
padding: 5px 0px 5px 30px;

div {
    display: flex;
    width: 80px;
    height: 25px;
    background-color: #75C382;
    border-radius: 13px;
    padding: 5px 10px 5px 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 140px;
    margin: 0px 12px 0px 12px;
    border-radius: 10px;
    border-color: #75C382;
}

button {
    width: 55px;
    height: 35px;
    background-color: #75C382;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    color: white;
    align-items: center;
    justify-content: center;
    border: none;
}

button:hover {
    background-color: #3D8F4A;
}
`;

const UserDivSix = styled.div`
display: flex;
padding: 5px 0px 5px 30px;


div {
    display: flex;
    width: 80px;
    height: 25px;
    background-color: #75C382;
    border-radius: 13px;
    padding: 5px 10px 5px 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 210px;
    margin: 0px 0px 0px 12px;
    border-radius: 10px;
    border-color: #75C382;
}
`;

const UserDivSev = styled.div`
display: flex;
padding: 5px 0px 5px 30px;


div {
    display: flex;
    width: 80px;
    height: 25px;
    background-color: #75C382;
    border-radius: 13px;
    padding: 5px 10px 5px 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 210px;
    margin: 0px 0px 0px 12px;
    border-radius: 10px;
    border-color: #75C382;
}
`;

const UserDivEig = styled.div`
display: flex;
padding: 5px 0px 5px 30px;

div {
    display: flex;
    width: 80px;
    height: 25px;
    background-color: #75C382;
    border-radius: 13px;
    padding: 5px 10px 5px 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 210px;
    margin: 0px 0px 0px 12px;
    border-radius: 10px;
    border-color: #75C382;
}
`;

const UserDivNin = styled.div`
display: flex;
padding: 5px 0px 5px 30px;


div {
    display: flex;
    width: 80px;
    height: 25px;
    background-color: #75C382;
    border-radius: 13px;
    padding: 5px 10px 5px 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 210px;
    margin: 0px 0px 0px 12px;
    border-radius: 10px;
    border-color: #75C382;
}
`;

const UserDivTen = styled.div`
display: flex;
padding: 5px 0px 5px 30px;


div {
    display: flex;
    width: 80px;
    height: 25px;
    background-color: #75C382;
    border-radius: 13px;
    padding: 5px 10px 5px 10px;
    color: white;

    display: flex;
    align-items: center;
    justify-content: center;
}

input {
    width: 210px;
    margin: 0px 0px 0px 12px;
    border-radius: 10px;
    border-color: #75C382;
}
`;

const UserDivEle = styled.div`
display: flex;
justify-content: end;
padding:30px;

button {
    width: 55px;
    height: 35px;
    background-color: #75C382;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    color: white;
    align-items: center;
    justify-content: center;
    border: none;
}

button:hover {
    background-color: #3D8F4A;
}
`;
