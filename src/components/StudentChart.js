import React, { useState } from "react";
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryGroup, VictoryLabel
} from 'victory';
import { useSearchParams } from "react-router-dom"
import { useNavigate, useParams } from "react-router";
import students from "./utils";
import SortChartButtons from "./SortChartButtons";




function StudentChart() {

    let navigate = useNavigate()

    let [difficultyChecked, setDifficultyChecked] = useState(false)
    let [funChecked, setFunChecked] = useState(false)

    let [selectedStudentName, setSelectedStudentName] = useState(null)

    function onDifficultyToggle() {
        setDifficultyChecked(!difficultyChecked)

        if (funChecked) {
            onFunToggle()
        }

        navigate(`${window.location.pathname}${!difficultyChecked ? '?filter=difficulty' : ''}`)
    }

    function onFunToggle() {
        setFunChecked(!funChecked)

        if (difficultyChecked) {
            onDifficultyToggle()
        }

        navigate(`${window.location.pathname}${!funChecked ? '?filter=fun' : ''}`)

    }

    function onHomeClick() {
        navigate(`/`)
        setSelectedStudentName()

    }

    const studentNames = new Set();
    students.forEach(student => {
        studentNames.add(student.name);
    })

    const assignments = new Set();
    students.forEach(student => {
        assignments.add(student.assignment);
    });


    console.log(assignments.entries())
    const assignmentsAvg = [...assignments].map((assignment) => {
        const studentsOfAssignment = students.filter(student => student.assignment === assignment);
        const sumOfAvg = studentsOfAssignment.reduce((acc, next) => {
            return {
                difficultyRating: next.difficultyRating + acc.difficultyRating,
                funRating: next.funRating + acc.difficultyRating,
            }
        }, { difficultyRating: 0, funRating: 0 });

        return {
            assignment: assignment,
            difficultyRating: sumOfAvg.difficultyRating / studentsOfAssignment.length,
            funRating: sumOfAvg.funRating / studentsOfAssignment.length
        }
    });

    let [searchParams] = useSearchParams();


    const filter = searchParams.get("filter")
    const { studentId } = useParams()

    let graphData;

    const shouldShowDifficulty = (filter !== "fun")
    const shouldShowFun = (filter !== "difficulty")


    const selectedStudent = students.filter((student) => {
        return student.name === studentId
    })

    console.log("selectedStudent", selectedStudent);

    if (selectedStudent.length > 0) {
        graphData = selectedStudent;

    }
    else {

        graphData = assignmentsAvg;

    }

    return (
        <div>
            <div className="text-center">
                <div className="btn-group flex-wrap">
                    {
                        [...studentNames].sort().map((student) =>
                            <button
                                type="button"
                                className={`btn ${student === selectedStudentName ? 'active btn-primary' : 'btn-secondary'}`}
                                onClick={() => {
                                    if (student === selectedStudentName) {
                                        setSelectedStudentName(null);
                                    } else {
                                        setSelectedStudentName(student)
                                    }
                                    navigate(`/student/${student}`)
                                }}
                            >
                                {student}
                            </button>)
                    }
                </div >

            </div >

            <div className="flex-wrap">
                <VictoryChart
                    domainPadding={{ x: [10, 0], y: 0 }}
                    padding={{ top: 20, bottom: 50, right: 50, left: 30 }}
                    height={170}


                >

                    <VictoryAxis
                        tickLabelComponent={<VictoryLabel angle={45} textAnchor="start" />}
                        style={{
                            axis: { stroke: "#756f6a" },
                            axisLabel: { fontSize: 3, padding: 30 },
                            ticks: { stroke: "grey", size: 5 },
                            tickLabels: { angle: 45, fontSize: 3, padding: 5 },
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            axis: { stroke: "#756f6a" },
                            axisLabel: { fontSize: 5, padding: 30 },
                            ticks: { stroke: "grey", size: 5 },
                            tickLabels: { fontSize: 5, padding: 5 },
                        }}
                    />
                    <VictoryGroup offset={3}>


                        {shouldShowDifficulty && (<VictoryBar
                            style={{
                                data: {
                                    fill: "#ff0b03",
                                },
                            }}
                            barWidth={2}
                            data={graphData}
                            x="assignment"
                            y="difficultyRating"
                        />
                        )}


                        {shouldShowFun && (<VictoryBar
                            style={{
                                data: {
                                    fill: "#000000",
                                },
                            }}
                            barWidth={2}
                            data={graphData}
                            x="assignment"
                            y="funRating"
                        />
                        )}


                    </VictoryGroup>
                </VictoryChart>
                <SortChartButtons onDifficultyToggle={onDifficultyToggle} onFunToggle={onFunToggle} onHomeClick={onHomeClick} />


            </div>
        </div >
    )
}





export default StudentChart