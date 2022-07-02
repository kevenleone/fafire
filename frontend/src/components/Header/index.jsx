import {Navbar, Container, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const Header = () => {
    return <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Professor Allocation</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/course">Course</Link>
          <Link className='nav-link' to="/professor">Professor</Link>
          <Link className='nav-link' to="/allocation">Allocation</Link>
          <Link className='nav-link' to="/department">Department</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
}

export default Header