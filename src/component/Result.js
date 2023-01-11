/* eslint-disable */

import { useLocation } from "react-router-dom";
import ResultStat from "./Result/ResultStat";
import { useEffect, useState } from "react";
import Loading from "./Loading";

function Result() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  /*
  useEffect(() => {
    offLoading();
  }, []);
  */

  //직접 주소로 접속했을때
  if (location.state == null) {
    return <h1>Page not found.</h1>;
  }

  const breed = location.state.breed;
  const typeSelect = location.state.typeSelect;

  return (
    <>
      {loading && <Loading />},
      {!loading && (
        <div>
          <ResultStat breed={breed} typeSelect={typeSelect} />
        </div>
      )}
    </>
  );
}

export default Result;
