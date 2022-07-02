import { useState, useEffect } from "react"
import TableComponent from "../Table"
import axios from '../../utils/axios'

const ListView = ({addButton, columns, endpoint}) => {
    const [rows, setRows] = useState([]);

    async function getData() {
        try {
            const response = await axios.get(endpoint)

            setRows(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="d-flex justify-content-end">
                {addButton}
            </div>
            <TableComponent columns={columns} rows={rows} />
        </>
    )
}

export default ListView