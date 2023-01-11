/* eslint-disable */

import React from "react";
import "../App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//React-Bootstrap 사용
function Title() {
  return (
    <Navbar className="bg-nav" expand="xl" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="https://w7.pngwing.com/pngs/247/911/png-transparent-dog-grooming-cat-puppy-pet-adoption-dog-animals-pet-dog-like-mammal.png"
            width="50"
            height="50"
            className="d-inline-block"
          />{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h5 fw-bold">
            <Nav.Link href="https://www.animals.or.kr/center/adopt">
              입양 캠페인
            </Nav.Link>
            <Nav.Link href="/contact">연락처</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Title;
