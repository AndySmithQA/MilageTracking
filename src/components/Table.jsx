import { useEffect,useState} from 'react'
import { Table } from 'react-bootstrap';

export default function BuildTable(){
    const [rows, setRows] = useState([ ])

   useEffect(() => {
        (async function fetchData() {
        const response = await fetch("http://localhost:3001/months")
        .catch(error => {
            console.error("[ERROR] Cannot fetch because", error);
            if (error.toString().includes("NetworkError")) {
                throw new Error("NETWORK_ERROR");
            } else {
                throw new Error("SYSTEM_ERROR");
            }
        });

        if (response.ok) {
            try {
                const jsonData = await response.json();
                setRows(jsonData);
                
                
            } catch (e) {
                console.warn("[WARN] Error while parsing content.  Likely because of empty body.", e);
                throw new Error("SYSTEM_ERROR");
            }
        }
    })();
    }, []);

    return (
       <Table striped hover>
            <thead>
                <tr>
                    <th>Month</th>
                    <th>Maximum</th>
                    <th>Actual</th>
                    <th>Percentage</th>
                    <th>Difference</th>
                    <th>Milage</th>
                </tr>
                </thead>
                <tbody>
                    {rows?.map(row =>
                        <tr key={row.id}>
                            <td>{row.currentMonth}</td>
                            <td>{row.max}</td>
                            <td>{row.actual}</td>
                            <td>{row.percentage}</td>
                            <td>{row.difference}</td>
                            <td>{row.monthlyMilage}</td>
                        </tr>
                    )}
                </tbody>
       </Table>
        
    )
}