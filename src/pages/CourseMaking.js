import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import "../styles/CourseMaking.css";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CourseMaking() {
  const[courseTitle, setCourseTitle] = useState('');
  const[tableContent, setTableContent] = useState([
    ['일차', '시간', '장소', '메모'],
    ['', '', '', ''],
    ['', '', '', ''],
    ['', '', '', '']
  ]);
  const [cityOptions, setCityOptions] = useState([]);
  const [selectedCity, setSelectedCity] = useState('전체');
  const [mapImage, setMapImage] = useState(null);
  const mapRef = useRef(null);
  let navigate = useNavigate();

  const handleCellClick = (row, col) => {
    const currentValue = tableContent[row][col];
    const newValue = prompt('내용을 입력해주세요 :');
    if(newValue !== null) {
      const newTableContent = [...tableContent];
      newTableContent[row][col] = newValue;
      setTableContent(newTableContent);
    }
  };

  const handleAddRow = () => {
    setTableContent((prevTableContent) => [...prevTableContent, Array(4).fill('')]);
  };

  const handleSelectChange = (e) => {
    const selectedRegion = e.target.value;
    let cities = [];

    switch (selectedRegion) {
      case '경기도':
        cities = ['전체', '가평', '강화', '고양', '과천', '광주', '구리', '군포', '김포', '남양주', '동두천', '수원', '시흥', '안산', '안성', '안양', '양주', '양평', '여주', '연천', '용인', '이천', '파주', '평택', '포천', '하남', '화성'];
        break;
      case '강원도':
        cities = ['전체', '강릉', '고성', '동해', '삼척', '속초', '양구', '양양', '영월', '원주', '인제', '정선', '철원', '춘천', '태백', '평창', '홍천', '화천', '횡성'];
        break;
      case '충청북도':
        cities = ['전체', '괴산', '단양', '보은', '영동', '옥천', '음성', '제천', '증평', '진천', '청원', '청주', '충주'];
        break;
      case '충청남도':
        cities = ['전체', '계룡', '공주', '금산', '논산', '당진', '보령', '부여', '서산', '서천', '아산', '연기', '예산', '천안', '청양', '태안' ,'홍성'];
        break;
      case '전라북도':
        cities = ['전체', '고창', '군산', '김제', '남원', '무주', '부안', '순창', '완주', '익산', '임실', '장수', '전주', '정읍', '진안'];
        break;
      case '전라남도':
        cities = ['전체', '강진', '고흥', '곡성', '광양', '구례', '구림', '나주', '능주', '담양', '목포', '무안', '법성', '보성', '성전', '순천', '신안', '여수', '영광', '영암', '완도', '이양', '장성', '장흥', '진도', '창평', '함평', '해남', '화순'];
        break;
      case '경상북도':
        cities = ['전체', '경산', '경주', '고령', '구미', '군위', '김천', '문경', '봉화', '상주', '성주', '안동', '영덕', '영양', '영주', '영천', '예천', '울릉', '울진', '의성', '청도', '청송', '칠곡', '포항'];
        break;
      case '경상남도':
        cities = ['전체', '거창', '고성', '김해', '남해', '마산', '밀양', '사천', '산청', '양산', '의령', '진주', '진해', '창녕', '창원', '통영', '하동', '함안', '함양', '합천'];
        break;
      case '제주도':
        cities = ['전체', '서귀포시', '제주시'];
        break;

      default:
        break;
    }

    const cityOptions = cities.map((city, index) => (
      <option key={index} value={city}>
        {city}
      </option>
    ));

    setCityOptions(cityOptions);
    setSelectedCity('전체');
  }

  const handleImageUpload = () => {
    const inputElement = document.createElement('input');
    inputElement.type = 'file';
    inputElement.accept = 'image/*';
    inputElement.addEventListener('change', (event) => {
      const selectedImage = event.target.files[0];
      setMapImage(URL.createObjectURL(selectedImage));
    });
    inputElement.click();
  };

  useEffect(() => {
    if(mapImage) {
      const mapImgElement = document.querySelector('.mapImg');
      if(mapImgElement) {
        mapImgElement.style.backgroundImage = `url(${mapImage})`;
        mapImgElement.style.backgroundSize = 'cover';
        mapImgElement.style.backgroundPosition = 'center';
      }
    }
  }, [mapImage]);

  return (
    <MainContainer>
      <MainWrapper>
        <div>
          <div className="inputTitle">
            <input 
              className="courseTitle"
              placeholder="제목을 입력해주세요.."
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
            />
          </div>
          <div className="imgGroup">
            <div className="mapImg" ref={mapRef}></div>
            <div className="tablest">
              <table>
                <tbody>
                  {tableContent.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((col, colIndex) => (
                        <td key={colIndex} onClick={() => handleCellClick(rowIndex, colIndex)}>
                          {col}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <img className="add" onClick={handleAddRow} src="images/courseMaking/add.svg" />
            <div className="hashtagContainer">
              <img src="images/courseMaking/hashtag.svg" />
              <input 
                className="hashtagBox"
                placeholder="태그를 입력해주세요..."
              />
            </div>
          </div>
          <div className="locNameContainer">
            <img src="images/courseMaking/locName.svg" />
            <select className="optionBox" onChange={(e) => handleSelectChange(e)}>
              <option value="locSelection">지역 선택</option>
              <option value="경기도">경기도</option>
              <option value="강원도">강원도</option>
              <option value="충청북도">충청북도</option>
              <option value="전라북도">전라북도</option>
              <option value="전라남도">전라남도</option>
              <option value="경상북도">경상북도</option>
              <option value="경상남도">경상남도</option>
              <option value="제주도">제주도</option>
            </select>
            {cityOptions && (
              <select className="optionBox" value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                {cityOptions}
              </select>
            )}
          </div>
          <img className="imgAdd" src="images/courseMaking/imgAdd.svg" onClick={handleImageUpload} />
          <img className="courseSave" onClick={() => { navigate('/coursemakingfin', { state: { selectedCity } }); }} src="images/courseMaking/courseSave.svg"/> 
        </div>
      </MainWrapper>
    </MainContainer>
  );
}

export default CourseMaking;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #797979;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainWrapper = styled.div`
  width: 390px;
  height: 90vh;
  background-color: white;
  position: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    margin: 10px 0;
  }
  .tablest {
    overflow-x: auto;
    table {
      border-collapse: collapse;
      margin-top: 10px;
      width: 100%;
      height: 100%;

      td {
        border: 1px solid #000;
        width: 50px;
        height: 50px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
`;