import { useState} from 'react'
import useTable from './useTable'
import { Table } from 'react-bootstrap';

export default function BuildTable(){
    const [rows, setRows] = useState([])

    useTable("http://localhost:3001/months", setRows)
    
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