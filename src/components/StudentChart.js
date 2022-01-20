import React from "react";
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryGroup, VictoryTooltip, VictoryLabel
} from 'victory';




function StudentChart(props) {

    return (
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

                <VictoryBar
                    style={{
                        data: {
                            fill: "#f97317",
                        },
                    }}
                    barWidth={2}
                    data={props.data}
                    x="assignment"
                    y="difficultyRating"
                />


                <VictoryBar
                    style={{
                        data: {
                            fill: "#23c45d",
                        },
                    }}
                    barWidth={2}
                    data={props.data}
                    x="assignment"
                    y="funRating"
                />

            </VictoryGroup>
        </VictoryChart>
    )
}





export default StudentChart