import React from "react";
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryGroup, VictoryTooltip, VictoryLabel, VictoryLegend
} from 'victory';
import { useSearchParams } from "react-router-dom"
import { useNavigate } from "react-router";
import { useState } from "react";
import students from "./utils";




function StudentChart(props) {

    let [searchParams, setSearchParams] = useSearchParams();
    let navigate = useNavigate()

    const filter = searchParams.get("filter")

    const shouldShowDifficulty = (filter !== "fun")
    const shouldShowFun = (filter !== "difficulty")





    return (<div>
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
                    data={props.data}
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
                    data={props.data}
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
                <button type="button" className="btn btn-secondary" onClick={() => navigate(`/`)}>Reset</button>

            </div>
        </div>
    </div>
    )
}





export default StudentChart