import React from "react";
import {
    VictoryBar, VictoryChart, VictoryAxis,
    VictoryTheme, VictoryGroup, VictoryTooltip
} from 'victory';
import Header from "./Header";
import students from './utils'
import { useState } from "react";



function StudentChart() {

    const [data, setData] = useState(students)

    console.log(data)
    return (
        <VictoryChart domainPadding={15}>
            <VictoryGroup offset={10}>
                <VictoryBar
                    labelComponent={<VictoryTooltip />}
                    data={data}
                    x="assignment"
                    y="difficultyRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={students.map(
                        avg => avg.assignment
                    )}
                />
                <VictoryBar
                    labelComponent={<VictoryTooltip />}
                    data={data}
                    x="assignment"
                    y="funRating"
                    tickValues={[1, 2, 3, 4, 5]}
                    tickFormat={students.map(
                        avg => avg.assignment
                    )}
                />
            </VictoryGroup>
            <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={[1, 2, 3, 4, 5]}

            />
            <VictoryAxis dependentAxis />
        </VictoryChart>

    )

}




export default StudentChart