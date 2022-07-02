import {Card} from 'react-bootstrap'

const Container = ({children, title}) => (
    <div className="container">
       <Card className="mt-4">
            <Card.Header>
                {title}
            </Card.Header>
            <Card.Body>
                {children}
            </Card.Body>
       </Card>
    </div>
)

export default Container