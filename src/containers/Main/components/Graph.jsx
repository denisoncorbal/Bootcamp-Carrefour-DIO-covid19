import React, { memo } from 'react'
import PieChart from '../../../components/PieChart'
import Pie from '../../../components/Pie'
import {LabelList, Cell} from 'recharts'

function Graph({data}){
    const {cases, todayCases, deaths, todayDeaths, recovered} = data
    const chart = [
            {name: "Mortes", value: deaths, label: 'Mortes: ' + (deaths/cases*100).toFixed(2) + '%', color:"red"},
            {name: "Recuperados", value: recovered, label: 'Recuperados: ' + (recovered/cases*100).toFixed(2) + '%', color: "green"}
    ];
    const labelChart = [
        "Mortes",
        "Recuperados"
    ];

    return (
        <PieChart width={700} height={700}>
            <Pie data={chart} dataKey="value" nameKey="name" outerRadius={250}>
            {
                chart.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                ))
            }
                <LabelList dataKey="label" position="insideTop" />
            </Pie>
        </PieChart>
    )

}

export default memo(Graph);