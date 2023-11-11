import { useState } from "react";
import styled from "styled-components";
import Triptable from "./triptable";

// 백엔드 response
const backendResponse = {
    "id": 1,
    "plan": [
      {
        "timeline": "14:00",
        "place": "한라봉",
        "memo": "한라봉 맛있겠다."
      },
      // 다른 plan 항목들...
    ]
  };
  
  // 백엔드 response를 Triptable 데이터 구조로 변환
  const transformedData = backendResponse.plan.map((item, index) => ({
    id: index + 1,
    time: item.timeline,
    place: item.place,
    memo: item.memo,
  }));

const ButtonContainer = () => {
    const [selectedButton,
    setSelectedButton] = useState(1)

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

return(
    <DetailDiv>
        <DetailbtnDiv>
            <button onClick={() => handleButtonClick(1)}>1일차</button>
            <button onClick={() => handleButtonClick(2)}>2일차</button>
            <button onClick={() => handleButtonClick(3)}>3일차</button>
            <button onClick={() => handleButtonClick(4)}>4일차</button>
        </DetailbtnDiv>

            {selectedButton === 1 && <div>
                <h4>1일차 일정표</h4>
                    <Triptable data={transformedData} />
                </div>}

            {selectedButton === 2 && <div>
                <h4>1일차 일정표</h4>
                    <Triptable data={transformedData} />
                </div>}

            {selectedButton === 3 && <div>
                <h4>1일차 일정표</h4>
                    <Triptable data={transformedData} />
                </div>}

            {selectedButton === 4 && <div>
                <h4>1일차 일정표</h4>
                    <Triptable data={transformedData} />
                </div>}

    </DetailDiv>
);

};

export default ButtonContainer;

const DetailDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DetailbtnDiv = styled.div`
    display: flex;
    width: 370px;
    justify-content: space-around;
    margin: 10px 10px 20px 10px;

    button {
        border: none;
        padding: 10px 17px 10px 17px;
        background-color: #75C382;
        color: white;
        border-radius: 15px;
        font-size: 15px;
        font-family: Maple;
    }

    button:hover {
        background-color: #5E9D69;
    }
`;

