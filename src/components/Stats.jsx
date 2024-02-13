import { useState } from "react";
import useFetch from "./useFetch";

export default function Stats(){
    const [data, setData] = useState([])

    useFetch('http://localhost:3001/months', setData)

  

    const statMaxMilage = data.map(ent =>
        ent.monthlyMilage
        )
    const statTotalMilage = data.map(ent =>
        ent.actual
        )
    const maximum = Math.max(...statMaxMilage)
    const minimum = Math.min(...statMaxMilage)
    const total = Math.max(...statTotalMilage)
    const average = (total / statTotalMilage.length)
   
   
    return (
        <div className="stats-bar ">
            <div className="container">
                <div className="row align-items-centre">
                    <ul>
                        <li>Highest Mothly Milage - {maximum}</li>
                        <li>Lowest Mothly Milage - {minimum}</li>
                        <li>Average Mothly Milage - {average.toFixed()}</li>
                    </ul>
                
                </div>
            </div>
      </div>  
    )
}
