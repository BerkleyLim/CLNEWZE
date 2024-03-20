import Chart from "react-google-charts";

const ClnewzeSalesComponent = () => {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const options = {
    // title: "매출차트"
  };
  return (
    <div>
      <h2>클뉴즈 매출액</h2>
      <Chart
        chartType="PieChart"
        data={data}
        width="100%"
        height="400px"
        options={options}
      />
    </div>
  );
};

export default ClnewzeSalesComponent;
