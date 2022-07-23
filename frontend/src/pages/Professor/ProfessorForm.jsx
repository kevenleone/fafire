import Container from "../../components/Container"
import {Form, Button} from 'react-bootstrap'
import axios from '../../utils/axios'
import {toast} from 'react-toastify'
import { useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect } from "react"

const ProfessorForm = () => {
    const [departments, setDepartments] = useState([]);
    const [professor, setProfessor] = useState({
        name: '',
        cpf: '',
        departmentId: ''
    });
    const navigate = useNavigate();
    const {id} = useParams()

    const isNew = id === "new";

    useEffect(() => {
        axios.get("/departments").then((response) => setDepartments(response.data))
    }, [])

    useEffect(() => {
        if (!isNew) {
            axios.get(`/professors/${id}`)
            .then((response) => setProfessor(response.data))
            .catch(console.error)
        }
    }, [])

    const onChange = ({target:{name, value}}) => {
        setProfessor({
            ...professor,
            [name]: value
        })
    }

    const onSave = async () => {
        const form = {
            name: professor.name,
            cpf: professor.cpf,
            departmentId: professor.departmentId
        }

        try {
            if (isNew) {
                await axios.post('/professors', form);
            } else {
                await axios.put(`/professors/${id}`, form)
            }

            toast.success("Professor Saved")
            navigate("/professor");
        } catch (error) {
            console.error(error)
            toast.error("Professor Saved")
        }
    }

    return (
        <Container title={`${isNew ? "Create" : "Update"} Professor`}>
           <Form>
            <Form.Group className="mb-4">
                <label>Name</label>
                <Form.Control 
                    name="name" 
                    onChange={onChange} 
                    value={professor.name} 
                    placeholder="Professor Name" />
            </Form.Group>

            <Form.Group className="mb-4">
                <label>CPF</label>
                <Form.Control 
                    name="cpf" 
                    onChange={onChange} 
                    value={professor.cpf} 
                    placeholder="Professor CPF" />
            </Form.Group>

            <Form.Group className="mb-4">
                <label>Department</label>
                <Form.Select
                    name="departmentId" 
                    onChange={onChange} 
                    value={professor.departmentId}>
                        <option value="">Select Department</option>
                        {departments.map((department, index) => (
                            <option key={index} value={department.id}>{department.name}</option>
                        ))}
                </Form.Select>
            </Form.Group>

          <div className="w-100">
            <Button 
                variant="secondary" 
                onClick={() => navigate("/professor")}>Cancel
            </Button>
            <Button className="mx-2" onClick={onSave}>Save Professor</Button>
          </div>
        </Form>
        </Container>
    )
}

export default ProfessorForm