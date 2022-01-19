import React from "react";
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryGroup, VictoryTooltip
} from 'victory';
import Header from "./Header";

function StudentChart() {

    const getRandomRating = () => Math.random() * 5;
    // const getRandomRating = () => 2;

    let assignmentRatingAverage = [
        { assignment: "W1D1-2" },
        { assignment: "W1D1-1" },
        { assignment: "W1D1-3" },
        { assignment: "W1D2-1" },
        { assignment: "W1D2-2" },
        { assignment: "W1D3-1" },
        { assignment: "W1D3-1" },
        { assignment: "W1D3-2" },
        { assignment: "W1D3-3" },
        { assignment: "W1D3-4" },
        { assignment: "W1D3-5" },
        { assignment: "W1D3-6" }
    ];

    assignmentRatingAverage = assignmentRatingAverage.map(avg => ({
        assignment: avg.assignment,
        difficultyRating: getRandomRating(),
        enjoymentRating: getRandomRating()
    }));

    // Add label
    const assignmentRatingAverageWithLabels = assignmentRatingAverage.map(avg => ({
        assignment: avg.assignment,
        difficultyRating: avg.difficultyRating,
        enjoymentRating: avg.enjoymentRating,
        label: `Opdracht ${avg.assignment
            }, difficultyRating: ${avg.difficultyRating.toFixed(
                1
            )}, enjoymentRating: ${avg.enjoymentRating.toFixed(1)}`
    }));




    return (
        <div class="d-flex justify-content-center">
            <div class="w-50
            ">
                <VictoryChart domainPadding={15}>
                    <VictoryGroup offset={20}>
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={assignmentRatingAverageWithLabels}
                            x="assignment"
                            y="difficultyRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={assignmentRatingAverageWithLabels.map(
                                avg => avg.assignment
                            )}
                        />
                        <VictoryBar
                            labelComponent={<VictoryTooltip />}
                            data={assignmentRatingAverageWithLabels}
                            x="assignment"
                            y="enjoymentRating"
                            tickValues={[1, 2, 3, 4, 5]}
                            tickFormat={assignmentRatingAverageWithLabels.map(
                                avg => avg.assignment
                            )}
                        />
                    </VictoryGroup>
                    <VictoryAxis
                        // tickValues specifies both the number of ticks and where
                        // they are placed on the axis
                        tickValues={[1, 2, 3, 4, 5]}
                        tickFormat={assignmentRatingAverageWithLabels.map(
                            avg => avg.assignment
                        )}
                    />
                    <VictoryAxis dependentAxis />
                </VictoryChart>
            </div>
        </div>

    )
}



export default StudentChart