/*eslint-disable*/

import { useEffect } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import { Chart } from "react-google-charts";

function ShowChart(props) {
  const data = [["Name", "Number"]];

  let count = 0;
  for (let i in props.result) {
    if (count == 10) {
      break;
    }
    data.push(props.result[i]);
    count++;
  }

  const options = {
    title: "이름 통계 Top 10",
    bar: { groupWidth: "80%" },
    legend: { position: "none" },
    colors: ["gray"],
    chartArea: {
      width: "80%",
    },
    titleTextStyle: {
      fontSize: 24,
    },
    vAxis: {
      textStyle: {
        fontSize: 16,
      },
    },
    hAxis: {
      textStyle: {
        fontSize: 14,
      },
    },
  };
  const chart = (
    <Chart chartType="BarChart" height="500px" data={data} options={options} />
  );

  //차트 만들기
  useEffect(() => {});

  return (
    <Row>
      <Col>
        <div>{chart}</div>
      </Col>
    </Row>
  );
}

export default ShowChart;
