import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import StudentButtons from "./components/StudentButtons";
import StudentChart from "./components/StudentChart";
import Footer from "./components/Footer";
import SortChartButtons from "./components/SortChartButtons";
import { csv } from 'd3'


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv('data.csv').then(setData);
  }, []);

  console.log(data);

  return (
    <div>
      <Header />
      <StudentButtons />
      <StudentChart />
      <SortChartButtons />
      <Footer />
    </div>
  );
}

export default App;