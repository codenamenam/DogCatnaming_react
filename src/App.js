/* eslint-disable */

import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Title from "./component/Title";
import Body from "./component/Body";
import Result from "./component/Result";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import { Chart } from "react-google-charts";

function App() {
  return (
    <BrowserRouter>
      <Title />
      <Routes>
        <Route path="/" element={<Body />}></Route>
        <Route path="/result" element={<Result />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
