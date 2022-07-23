import {Link} from 'react-router-dom'
import Container from '../../components/Container'
import ListView from '../../components/ListView'

function Department() {

    const actions = [
        {label: "Edit", onClick: (department) => console.log(department)},
        {label: "Remove", onClick: (department) => console.log(department)}
    ];

    return <Container title="Department">
        <ListView
            addButton={
                <Link className='btn btn-primary float-right' to="/department/new">Add Department</Link>
            }
            actions={actions}
            columns={[
            {
                key: 'id',
                label: 'ID'
            }, {
                key: 'name',
                label: 'Name'
            }]} 
            endpoint="/departments" />
    </Container>
}

export default Department