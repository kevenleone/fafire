import {Link, Outlet} from 'react-router-dom'
import Container from '../../components/Container'
import ListView from '../../components/ListView'

function Department() {
    return <Container title="Department">
        <ListView
            addButton={
                <Link className='btn btn-primary float-right' to="/department/new">Add Department</Link>
            }
            columns={[
            {
                key: 'id',
                label: 'ID'
            }, {
                key: 'name',
                label: 'Name'
            }]} 
            endpoint="/departments" />

            <Outlet></Outlet>
    </Container>
}

export default Department