import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import useFetch from '../useFetch'
import BarChart from "./BarChart";
import { useState } from "react";


Chart.register(CategoryScale);

export default function ShowBarGraph(){
    const [chartData, setChartData] = useState(null);
    const [barData, setBarData] = useState([])

    

    const initChartData = (data) => {
        setChartData({
            labels: data.map((month) => month.currentMonth),
            datasets: [{
                type: 'bar',
                label: "Monthly usage",
                data: data.map((month) => month.monthlyMilage),
                backgroundColor: "black",
                order: 2
            },
            {
                type: "line",
                label: "Max Allowance",
                data: data.map((month) => month.maxAllowance),
                order: 1,
                backgroundColor: "red",
                borderColor: "red",
                pointRadius: 0
            }
        ]
        });
        
    };
    
    

    useFetch("http://localhost:3001/months", initChartData);

    return (
        <div className="App">
            {chartData && <BarChart chartData={chartData}/>}
        </div>
    );
}