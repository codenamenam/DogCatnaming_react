/* eslint-disable */
import "../App.css";
import React, { useState, useRef, useEffect } from "react";
import Breed from "./Breed";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/esm/Container";
import dog from "../img/dogcat_dog.png";
import cat from "../img/dogcat_cat.png";

function Body() {
  const [animal, setAnimal] = useState(0);
  //고양이/강아지 선택 시 아래로 스크롤
  const ref = useRef();

  const containerPaddingTop = {
    paddingTop: "100px",
  };

  const leftCardDeckStyle = {
    margin: "0 auto",
  };

  const rightCardDeckStyle = {
    margin: "0 auto",
  };

  const titleStyle = {
    display: "flex",
    margin: "100px 0 100px 0",
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
          <h1 className="fw-bold">
            <span style={{ color: "rgb(169, 128, 87)" }}>
              당신의 소중한 아이는
            </span>{" "}
            무슨 동물인가요?
          </h1>
        </Col>
      </Row>
      <div>
        <Row xs={2} md={2} className="g-4">
          <Col xs={6} md={6}>
            <Card onClick={() => handleClick(1)} style={leftCardDeckStyle}>
              <div style={{ height: "400px", overflow: "hidden" }}>
                <Card.Img variant="top" src={cat} style={{ width: "100%" }} />
              </div>
            </Card>
          </Col>
          <Col xs={6} md={6}>
            <Card onClick={() => handleClick(2)} style={rightCardDeckStyle}>
              <div style={{ height: "400px", overflow: "hidden" }}>
                <Card.Img variant="top" src={dog} style={{ width: "100%" }} />
              </div>
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
