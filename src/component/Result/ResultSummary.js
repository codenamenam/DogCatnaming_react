function ResultSummary(props) {
  const breed = props.breed;
  const maxBreed = props.maxBreed;

  const style = {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  };

  const textStyle = {
    lineHeight: 1.4,
  };
  const element = (
    <div style={style}>
      <h1>
        {breed} 이름으로는
        <br />
        <h1 className="fw-bold" style={textStyle}>
          '{maxBreed[0]}'가 가장 인기가 많네요!
        </h1>
      </h1>
    </div>
  );

  return element;
}

export default ResultSummary;
