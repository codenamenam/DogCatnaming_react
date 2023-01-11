/* eslint-disable */
import axios from "axios";
import { useEffect, useState } from "react";

function Search(breed, typeSelect) {
  const [result, setResult] = useState("");

  async function api() {
    var url = "http://codenamenam.pythonanywhere.com/api/";
    if (typeSelect === "dog") {
      url += "dog";
    } else {
      url += "cat";
    }

    await axios
      .get(url, {
        params: { breed: breed },
      })
      .then((response) => {
        const searchResults = response.data;
        let temp = searchResults[0];

        delete temp.id;
        delete temp.breed;

        // json을 값 기준으로 내림차순 정렬
        let orderedResult = [];
        for (let i in temp) {
          orderedResult.push([i, temp[i]]);
        }
        orderedResult.sort(function (a, b) {
          return b[1] - a[1];
        });

        setResult(orderedResult);
      });
  }

  useEffect(() => {
    api();
  }, []);

  return result;
}

export default Search;
