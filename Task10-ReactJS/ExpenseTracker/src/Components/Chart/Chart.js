import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(datapoint=>{
    return datapoint.value;
  })
  const maxDataPointValue = Math.max(...dataPointValues)
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        return <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          label={datapoint.label}
          maxValue = {maxDataPointValue}
        />;
      })}
    </div>
  );
};
export default Chart;
