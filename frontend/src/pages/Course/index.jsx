import Container from '../../components/Container'
import ListView from '../../components/ListView'

function Course() {
    return <Container title="Course">
        <ListView columns={[
            {
                key: 'id',
                label: 'ID'
            }, {
                key: 'name',
                label: 'Name'
            }]} 
            endpoint="/courses" />
    </Container>
}

export default Course