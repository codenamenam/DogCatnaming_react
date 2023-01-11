/* eslint-disable */

import styles from "./Breed.module.css";
import { useNavigate } from "react-router-dom";
import React from "react";

const cat = [
  [
    "숏헤어",
    "https://cdn.pixabay.com/photo/2017/08/12/19/30/cat-2635097_1280.jpg",
  ],
  [
    "페르시안",
    "https://cdn.pixabay.com/photo/2022/07/29/14/22/persian-cat-7351943_1280.jpg",
  ],
  [
    "러시안 블루",
    "https://cdn.pixabay.com/photo/2020/11/25/03/04/russian-blue-cat-5774414_1280.jpg",
  ],
  ["샴", "https://cdn.pixabay.com/photo/2015/08/09/19/02/cat-882049_1280.jpg"],
  [
    "터키쉬 앙고라",
    "https://cdn.pixabay.com/photo/2018/08/08/20/08/cat-3593021_1280.jpg",
  ],
  [
    "스코티시 폴드",
    "https://cdn.pixabay.com/photo/2018/08/24/15/30/scotish-3628162_1280.jpg",
  ],
];

const dog = [
  [
    "말티즈",
    "https://cdn.pixabay.com/photo/2019/02/24/12/58/maltese-4017525_1280.jpg",
  ],
  [
    "시츄",
    "https://cdn.pixabay.com/photo/2015/07/26/00/26/dog-860709_1280.jpg",
  ],
  [
    "푸들",
    "https://cdn.pixabay.com/photo/2018/09/30/16/08/poodle-3713803_1280.jpg",
  ],
  [
    "골든리트리버",
    "https://cdn.pixabay.com/photo/2017/04/19/21/29/dog-2243682_1280.jpg",
  ],
  [
    "요크셔테리어",
    "https://cdn.pixabay.com/photo/2015/05/30/14/33/yorkshire-terrier-790362_1280.jpg",
  ],
  [
    "포메라니안",
    "https://cdn.pixabay.com/photo/2017/10/24/19/29/pomapoo-2885845_1280.jpg",
  ],
  [
    "진돗개",
    "https://cdn.pixabay.com/photo/2020/04/28/08/51/korean-jindo-dog-5103470_1280.jpg",
  ],
  [
    "닥스훈트",
    "https://cdn.pixabay.com/photo/2012/08/10/18/52/foxhound-53951_1280.jpg",
  ],
  [
    "믹스견",
    "https://post-phinf.pstatic.net/MjAxODEwMzBfMjE0/MDAxNTQwODc4MzIxNjgw.xOCuOGSV1jK5qfqUir3m3O5fkojYRsk3EkJRlTOvt44g.ZNHiOytFzyN81ikfnHJFpT0aedqC9k9nQcbNtrSPIq8g.JPEG/GettyImages-841268710.jpg?type=w1200",
  ],
];

let animal = null;
let styleType = styles.container;
let typeSelect;

function Breed(props) {
  const navigate = useNavigate();
  const clicked = (breed) => {
    navigate("/result", { state: { breed: breed, typeSelect: typeSelect } });
  };

  if (animal == null) {
    animal = [""];
    return <></>;
  } else if (props.animal == 1) {
    animal = cat;
    typeSelect = "cat";
  } else if (props.animal == 2) {
    animal = dog;
    typeSelect = "dog";
  }

  const selectContainerStyle = {};

  const titleStyle = {
    display: "flex",
    margin: "72px 0 36px 0",
    justifyContent: "center",
  };

  const breedCardContainerStyle = {
    margin: "100px 0px 200px 0px",
  };

  const breedSelectElement = (
    <div style={selectContainerStyle}>
      <h1 style={titleStyle} className="h1 fw-bold">
        반려동물의 종류는?
      </h1>
      <div className={styleType} style={breedCardContainerStyle}>
        {animal.map(
          (
            src //카드 자동 생성
          ) => (
            <>
              <div
                key={src}
                className={styles.card}
                style={{
                  backgroundImage: `url(${src[1]})`,
                }}
                onClick={() => clicked(src[0])}
              >
                <div className={styles.cardText}>{src[0]}</div>
              </div>
            </>
          )
        )}
      </div>
    </div>
  );

  return <>{breedSelectElement}</>;
}

export default Breed;
