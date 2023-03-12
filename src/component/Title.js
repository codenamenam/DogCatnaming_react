/* eslint-disable */

import React from "react";
import "../App.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../img/dogcat_logo.png";

//React-Bootstrap 사용
function Title() {
  return (
    <Navbar className="bg-nav" expand="xl" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="60"
            height="40"
            className="d-inline-block"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto h5 fw-bold">
            <Nav.Link
              href="https://www.animals.or.kr/center/adopt"
              style={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: "bold" }}
            >
              입양 캠페인
            </Nav.Link>
            <Nav.Link
              href="/contact"
              style={{ color: "rgba(255, 255, 255, 0.8)", fontWeight: "bold" }}
            >
              연락처
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Title;
