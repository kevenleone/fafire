import Container from '../../components/Container'
import ListView from '../../components/ListView'

const Professor = () => <Container title="Professor">
    <ListView columns={[
        {
            key: 'id',
            label: 'ID'
        }, {
            key: 'name',
            render: (name) => {
                return <span style={{ color: "red" }}>{name.toUpperCase()}</span>
            },
            label: 'Name'
        },
        {
            key: 'cpf',
            label: 'CPF'
        }]}
        endpoint="/professors" />
</Container>

export default Professor