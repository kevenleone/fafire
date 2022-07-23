import Container from "../../components/Container"
import {Form, Button} from 'react-bootstrap'
import axios from '../../utils/axios'
import {toast} from 'react-toastify'
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const DepartmentForm = () => {
    const [department, setDepartment] = useState({
        name: ''
    });
    const navigate = useNavigate();
    const {id} = useParams()

    const isNew = id === "new";

    useEffect(() => {
        if (!isNew) {
            axios.get(`/departments/${id}`)
            .then((response) => setDepartment(response.data))
            .catch(console.error)
        }
    }, [])

    const onChange = ({target:{name, value}}) => {
        setDepartment({
            ...department,
            [name]: value
        })
    }

    const onSave = async () => {
        const form = {
            name: department.name
        }

        try {
            if (isNew) {
                await axios.post('/departments', form);
            } else {
                await axios.put(`/departments/${id}`, form)
            }

            toast.success("Department Saved")
            navigate("/department");
        } catch (error) {
            console.error(error)
            toast.error("Error to Save Department")
        }
    }

    return (
        <Container title={`${isNew ? "Create" : "Update"} Department`}>
           <Form>
            <Form.Group className="mb-4">
                <label>Name</label>
                <Form.Control 
                    name="name" 
                    onChange={onChange} 
                    value={department.name} 
                    placeholder="Department Name" />
            </Form.Group>

          <div className="w-100">
            <Button 
                variant="secondary" 
                onClick={() => navigate("/department")}>Cancel
            </Button>
            <Button className="mx-2" onClick={onSave}>Save Department</Button>
          </div>
        </Form>
        </Container>
    )
}

export default DepartmentForm