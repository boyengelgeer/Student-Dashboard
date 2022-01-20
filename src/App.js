import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import StudentButtons from "./components/StudentButtons";
import StudentChart from "./components/StudentChart";
import Footer from "./components/Footer";
import SortChartButtons from "./components/SortChartButtons";


function App() {

  return (
    <div>
      <Header />
      <StudentButtons />
      <StudentChart  />
      <SortChartButtons />
      <Footer />
    </div>
  );
}

export default App;