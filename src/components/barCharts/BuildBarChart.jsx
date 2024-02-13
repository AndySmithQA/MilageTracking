import Chart from "chart.js/auto";
import {CategoryScale} from "chart.js";
import useFetch from '../useFetch'
import BarChart from "./BarChart";
import { useState } from "react";


Chart.register(CategoryScale);

export default function ShowBarGraph(){
    const [chartData, setChartData] = useState(null);
    
   
    const initChartData = (data) => {
        const year1 = data.filter((month) => month.currentMonth.includes("-23"));
        const year2 = data.filter((month) => month.currentMonth.includes("-24"));
        setChartData({
            labels: year1.map((month) => month.currentMonth),
            datasets: [{
                type: 'bar',
                label: "Year 1",
                data: year1.map((month) => month.monthlyMilage),
                backgroundColor: "#0D392E",
               order: 2,
                stack: 0
            },
             {
                 type: 'bar',
                 label: "Year 2",
                 data: year2.map((month) => month.monthlyMilage),
                 backgroundColor: "#CED7E5",
                 order: 2,
                 stack: 1
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
    
    

//     const initChartData = (data) => {
//         setChartData({
//             labels: data.map((month) => month.currentMonth),
//             datasets: [{
//                 type: 'bar',
//                 label: "Monthly usage",
//                 data: data.map((month) => month.monthlyMilage),
//                 backgroundColor: "#0D392E",
//                 order: 2,
//                 //stack: 0
//             },
//             // {
//             //     type: 'bar',
//             //     label: "Monthly usage",
//             //     data: data.map((month) => month.monthlyMilage),
//             //     backgroundColor: "#0D392E",
//             //     order: 2,
//             //     stack: 1
//             // },
//             {
//                 type: "line",
//                 label: "Max Allowance",
//                 data: data.map((month) => month.maxAllowance),
//                 order: 1,
//                 backgroundColor: "red",
//                 borderColor: "red",
//                 pointRadius: 0
//             }
//         ]
//         });
        
//     };
    
    

//     useFetch("http://localhost:3001/months", initChartData);
    
    

//     return (
//         <div className="App">
//             {chartData && <BarChart chartData={chartData}/>}
//         </div>
//     );
// }