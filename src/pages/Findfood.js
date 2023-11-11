import styled from 'styled-components';

import React, { useState } from 'react';


const FindFood = () => {
  const [selectedProvince, setSelectedProvince] = useState('경기도'); // 기본값은 서울특별시로 설정
  const [selectedCity, setSelectedCity] = useState('전체'); // 기본값은 전체로 설정

  const provinces = ['경기도', '강원도', '충청북도', '충청남도', '전라북도', '전라남도', '경상북도', '경상남도', '제주도']; // 기타 도는 필요에 따라 추가
  const cityMap = {
    '경기도': ['전체', '가평', '강화', '고양', '과천', '광주', '구리', '군포', '김포', '남양주', '동두천', '수원', '시흥', '안산', '안성', '안양', '양주', '양평', '여주', '연천', '용인', '이천', '파주', '평택', '포천', '하남', '화성'],
    '강원도': ['전체', '강릉', '고성', '동해', '삼척', '속초', '양구', '양양', '영월', '원주', '인제', '정선', '철원', '춘천', '태백', '평창', '홍천', '화천', '횡성'],
    '충청북도': ['전체', '괴산', '단양', '보은', '영동', '옥천', '음성', '제천', '증평', '진천', '청원', '청주', '충주'],
    '충청남도': ['전체', '계룡', '공주', '금산', '논산', '당진', '보령', '부여', '서산', '서천', '아산', '연기', '예산', '천안', '청양', '태안' ,'홍성'],
    '전라북도': ['전체', '고창', '군산', '김제', '남원', '무주', '부안', '순창', '완주', '익산', '임실', '장수', '전주', '정읍', '진안'],
    '전라남도': ['전체', '강진', '고흥', '곡성', '광양', '구례', '구림', '나주', '능주', '담양', '목포', '무안', '법성', '보성', '성전', '순천', '신안', '여수', '영광', '영암', '완도', '이양', '장성', '장흥', '진도', '창평', '함평', '해남', '화순'],
    '경상북도': ['전체', '경산', '경주', '고령', '구미', '군위', '김천', '문경', '봉화', '상주', '성주', '안동', '영덕', '영양', '영주', '영천', '예천', '울릉', '울진', '의성', '청도', '청송', '칠곡', '포항'],
    '경상남도': ['전체', '거창', '고성', '김해', '남해', '마산', '밀양', '사천', '산청', '양산', '의령', '진주', '진해', '창녕', '창원', '통영', '하동', '함안', '함양', '합천'],
    '제주도': ['전체', '서귀포시', '제주시'],
    }

  const handleCityChange = (city) => {
    setSelectedCity(city);
  };

      return (
    <MainContainer>
        <MainWrapper>
                <LogoDiv>
                    <h3>삼시세끼</h3>
                </LogoDiv>
      <div>
        <label>도: </label>
        {provinces.map((province) => (
          <button key={province} onClick={() => setSelectedProvince(province)}>{province}</button>
        ))}
      </div>
      <div>
        <label>시/군/구: </label>
        {cityMap[selectedProvince].map((city) => (
          <button key={city} onClick={() => handleCityChange(city)}>{city}</button>
        ))}
      </div>
      <button>음식 찾기</button>
      </MainWrapper>
    </MainContainer>
  );
};


export default FindFood;

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

