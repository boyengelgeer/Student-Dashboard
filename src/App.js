import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import StudentChart from "./components/StudentChart";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SortChartButtons from "./components/SortChartButtons";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import students from "./components/utils";

function App() {

  const [data, setData] = useState(students)

  console.log(data)

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<StudentChart data={data} />} />
        </Routes>
        <SortChartButtons />
        <Footer />
      </div>
    </Router>
  );
}

export default App;