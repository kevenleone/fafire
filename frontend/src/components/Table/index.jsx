import {Table} from 'react-bootstrap'

const TableComponent = ({columns = [], rows = []}) => {
    return (
        <Table>
            <thead>
                <tr>
                    {columns.map((column, index) => {
                        return <th key={index}>{column.label}</th>
                    })}
                </tr>
            </thead>
            <tbody> 
                {rows.map((row, index) => {
                    return (
                        <tr key={index}>
                             {columns.map((column, index) => {
                                const data = row[column.key];
                                const value = column.render ? column.render(data, row) : data
                                
                                return <td key={index}>{value}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default TableComponent