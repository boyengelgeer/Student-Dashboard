import React from "react";
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryGroup, VictoryLabel,
} from 'victory';
import { useSearchParams } from "react-router-dom"
import { useNavigate, useParams } from "react-router";
import students from "./utils";




function StudentChart(props) {

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

    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate()

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
        console.log('student data', graphData)
    }
    else {

        graphData = assignmentsAvg;
        console.log('groupAssignment', graphData)
    }

    return (
        <div>
            <div className="text-center">
                <div className="btn-group flex-wrap">
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Aranka`)}>Aranka</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Evelyn`)}>Evelyn</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Floris`)}>Floris</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Hector`)}>Hector</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Martina`)}>Martina</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Maurits`)}>Maurits</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Rahima`)}>Rahima</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Sandra`)}>Sandra</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Storm`)}>Storm</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/student/Wietske`)}>Wietske</button>
                </div >

            </div >

            <div>
                <VictoryChart
                    domainPadding={{ x: [10, 0], y: 0 }}
                    padding={{ top: 20, bottom: 50, right: 50, left: 30 }}
                    height={170}
                >

                    <VictoryAxis
                        tickLabelComponent={<VictoryLabel angle={45} textAnchor="start" />}
                        style={{
                            tickLabels: { angle: 45 },
                            axis: { stroke: "#756f6a" },
                            axisLabel: { fontSize: 3, padding: 30 },
                            ticks: { stroke: "grey", size: 5 },
                            tickLabels: { fontSize: 3, padding: 5 },
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
                <div className="text-center">
                    <div className="btn-group flex-wrap">
                        <button type="button" className="btn btn-danger" onClick={() => navigate(`/?filter=difficulty`)}>Filter by difficulty</button>
                    <button type="button" className="btn btn-dark" onClick={() => navigate(`/?filter=fun`)}>Filter by fun</button>
                    <button type="button" className="btn btn-secondary" onClick={() => navigate(`/`)}>Back to home</button>

                </div>
            </div>
        </div>
        </div >
    )
}





export default StudentChart