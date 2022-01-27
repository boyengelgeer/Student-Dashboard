import React, { useState } from "react";
import Header from "./components/Header";
import StudentChart from "./components/StudentChart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import students from "./components/utils";
function App() {

  const [data] = useState(students)



  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StudentChart data={data} />} />
        <Route path="/student/:studentId" element={<StudentChart data={data} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;