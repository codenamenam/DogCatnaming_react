/*
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Server Response Success");
});

app.listen(PORT, () => {
  console.log(`Server On : http://localhost:${PORT}/`);
});

//리액트 라우터 대신 node.js로
app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "/react-project/build/index.html"));
});
*/

/*

const express = require("express");
const cors = require("cors");
const cheerio = require("cheerio");
const axios = require("axios");
const PORT = 4000;
const app = express();

app.use(cors());

const getHtml = async () => {
  try {
    return await axios.get("https://www.naver.com");
    // 해당 사이트 html 태그 가져오기
  } catch (error) {
    console.error(error);
  }
};

app.get("/", (req, res) => {
  getHtml()
    .then((html) => {
      const $ = cheerio.load(html.data);
      let parentTag = $("div.liveNum ul.liveNum li");
      // 크롤링할 태그 찾기

      let resultArr = [];
      parentTag.each(function (i, elem) {
        let itemObj = {
          text: $(this).find("strong").text(),
          num: $(this).find("span").text(),
        };
        resultArr.push(itemObj);
      });

      resultArr.forEach((elem) => {
        console.log(`현재 ${elem._text}의 현황 : ${elem._num}`);
      });
      return resultArr;
    })
    .then((data) => res.send(data));
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

*/

/*
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const app = express();
const PORT = 4000;

//CORS 설정
const cors = require("cors");
app.use(cors());

async function getHTML() {
  try {
    return await axios.get("https://www.google.co.kr/search?q=cat");
  } catch (error) {
    console.error(error);
  }
}

app.get("/", (req, res) => {
  getHTML()
    .then((html) => {
      let temp = "";
      const $ = cheerio.load(html.data);
      const bodyList = $("div.LHJvCe div").text();
      console.log(bodyList);
      temp = bodyList;
      if (temp == null) {
        console.log("null");
      }
      console.log(temp);

      return temp;
    })
    .then((data) => res.send(data));
});

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
*/

/*
const express = require("express");
const app = express();

app.listen(4000, function () {
  console.log("listening on 4000");
});

//CORS 설정
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  res.send("Chris!");
  console.log("My name is...");
});
*/
