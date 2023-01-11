/*eslint-disable*/

import React, { useState } from "react";
import axios from "axios";

function RestAPI() {
  var [text, setText] = useState("검색 결과가 없습니다.");

  //비동기?
  const getClicked = () => {
    console.log("clicked");
    try {
      axios
        .get("http://127.0.0.1:8000/", {
          params: { words: "braodwind stock" },
        })
        .then((response) => {
          setText(JSON.stringify(response.data));
        });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Rest API 연습</h1>
      <button onClick={getClicked}>GET</button>
      <h1>검색 결과는 다음과 같습니다.</h1>
      <h2>{text}</h2>
    </>
  );
}

export default RestAPI;
