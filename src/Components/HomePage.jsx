import { useState } from "react";
import ChartComponent from "./ChartComponent";
const HomePage = () => {
  const [xData, setXData] = useState(""); 
  const [yData, setYData] = useState("");
  const [data, setData] = useState(null);
  const handelPlot = () => {
    const xAxis = xData.split(",").map(Number);
    const yAxis = yData.split(",").map(Number);
    setData({ x: xAxis, y: yAxis });
  };
  return (
    <>
      <div>
        <div className="main">
          <h1>Graph Plotter</h1>
          <input
            type="text"
            placeholder="Enter X-axis data, e.g., 4,5,6"
            value={xData}
            onChange={(e) => setXData(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Y-axis data, e.g., 4,5,6"
            value={yData}
            onChange={(e) => setYData(e.target.value)}
          />
        </div>
        <button onClick={handelPlot}>Plot Graph</button>
        {data && <ChartComponent data={data} />}
      </div>
    </>
  );
};
export default HomePage;
