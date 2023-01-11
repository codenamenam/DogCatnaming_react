/* eslint-disable */
import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import Breed from "./Breed";

import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";

function Body() {
  const [animal, setAnimal] = useState(0);
  //고양이/강아지 선택 시 아래로 스크롤
  const ref = useRef();

  const containerPaddingTop = {
    paddingTop: "100px",
  };

  const leftCardDeckStyle = {
    float: "none",
    margin: "0 auto",
  };

  const rightCardDeckStyle = {
    float: "none",
    margin: "0 auto",
  };

  const titleStyle = {
    display: "flex",
    margin: "36px 0 48px 0",
  };

  const cardTitleStyle = {
    margin: "0 auto",
  };

  useEffect(() => {
    if (animal != 0) {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [animal]);

  //Bootstrap card-deck 이용
  const dogCatSelectElement = (
    <Container style={containerPaddingTop}>
      <Row xs={1}>
        <Col
          xs={12}
          lg={12}
          style={titleStyle}
          className="justify-content-center"
        >
          <h1 className="fw-bold">동물을 선택해주세요.</h1>
        </Col>
      </Row>
      <div>
        <Row xs={2} className="justify-content-center">
          <Col lg={6}>
            <Card onClick={() => handleClick(1)} style={leftCardDeckStyle}>
              <Card.Img
                variant="top"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"
              />
              <Card.Body>
                <Card.Title style={cardTitleStyle}>
                  <h4>고양이</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={6}>
            <Card onClick={() => handleClick(2)} style={rightCardDeckStyle}>
              <Card.Img
                variant="top"
                src="https://cdn.crowdpic.net/detail-thumb/thumb_d_382A8A747FFDF073E20C13398D110DE7.jpg"
              />
              <Card.Body>
                <Card.Title>
                  <h4>강아지</h4>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </Container>
  );

  //클릭 시 고양이/강아지 종류 결정. 1번이 고양이, 2번이 강아지
  const handleClick = (animal) => {
    setAnimal(animal);
  };

  return (
    <>
      {dogCatSelectElement}
      <div style={{ height: "36px" }} />
      <Breed animal={animal} />
      <div ref={ref} />
    </>
  );
}

export default Body;
