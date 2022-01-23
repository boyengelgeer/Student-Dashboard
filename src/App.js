import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import StudentChart from "./components/StudentChart";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route, Routes } from "react-router-dom";
import students from "./components/utils";
function App() {

  const [data, setData] = useState(students)

  const groupByAssignment = (objectArray, property) => {
    return objectArray.reduce(
      (prevValue, { assignment, difficultyRating, funRating, [property]: key }) => {
        if (!prevValue[key]) {
          prevValue[key] = {
            assignment: assignment,
            difficultyRatingAvg: difficultyRating,
            funRatingAvg: funRating,
            count: 1
          };
        } else {
          const { count, difficultyRatingAvg, funRatingAvg } = prevValue[key];
          prevValue[key] = {
            assignment: assignment,
            difficultyRatingAvg:
              (difficultyRatingAvg + difficultyRating) /
              (count + 1),
            funRatingAvg: (funRatingAvg + funRating) / (count + 1),
            count: count + 1,
          };
        }
        return prevValue;
      },
      {}
    );
  };

  let groupByAssignmentByAverage = groupByAssignment(students, "assignment");

  console.log(groupByAssignmentByAverage);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<StudentChart data={data} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;