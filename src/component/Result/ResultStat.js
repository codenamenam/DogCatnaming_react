/* eslint-disable */

import { useEffect } from "react";
import ResultSummary from "./ResultSummary";
import Search from "./Search";
import ShowChart from "./ShowChart";

import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function ResultStat(props) {
  const breed = props.breed;
  const typeSelect = props.typeSelect;

  // Search 결과 db로부터 받아옴
  const result = Search(breed, typeSelect);

  if (typeof result === "string") {
    return <></>;
  }

  const imgStyle = {
    width: "100%",
    minHeight: "110px",
    maxHeight: "150px",
    objectFit: "scale-down",
  };

  const containerStyle = {
    margin: "120px 36px 24px 36px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <>
      <div className="ResultContainer" style={containerStyle}>
        <Col xs={12} className="d-flex flex-column align-items-center">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <ResultSummary breed={breed} maxBreed={result[0]} />
          </div>
        </Col>
      </div>
      <ShowChart result={result} />
      <div>
        <Row>
          <Col className="justify-content-center">
            <div>
              <a href="https://www.animals.or.kr/center/adopt">
                <img src="image/banner.png" style={imgStyle}></img>
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default ResultStat;
