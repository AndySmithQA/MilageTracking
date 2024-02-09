import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import useFetch from './useFetch'
import LineChart from "./LineChart";
import { useState } from "react";

Chart.register(CategoryScale);

export default function ShowGraph(){
    const [chartData, setChartData] = useState(null);

    const initChartData = (data) => {
        setChartData({
            labels: data.map((month) => month.currentMonth),
            datasets: [
                {
                    label: "Maximum Allowed",
                    yAxisID: 'times',
                    data: data.map((month) => month.max),
                    backgroundColor: [
                        "black"
                    ],
                    borderColor: "black",
                    borderWidth: 2
                },
                {
                    label: "Actual Milage",
                    yAxisID: 'times',
                    data: data.map((month) => month.actual),
                    backgroundColor: [
                        "red"
                    ],
                    borderColor: "red",
                    borderWidth: 2
                },
                {
                    label: "Percentage",
                    yAxisID: "hr",
                    data: data.map((month) => month.percentage),
                    borderColor: "Blue",
                    backgroundColor: [
                        "Blue"
                    ],
                    borderWidth: 2
                }
            ]
        });
    };

    useFetch("http://localhost:3001/months", initChartData);

    return (
        <div className="App">
            {chartData && <LineChart chartData={chartData}/>}
        </div>
    );
}