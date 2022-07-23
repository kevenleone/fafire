import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const routes = [
  { label: "Home", path: "/" },
  { label: "Course", path: "/course" },
  { label: "Professor", path: "/professor" },
  { label: "Allocation", path: "/allocation" },
  { label: "Department", path: "/department" },
];

const Header = () => {
  const location = useLocation();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Professor Allocation</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {routes.map((route, index) => (
              <Link
                className={`nav-link 
                ${route.path === location.pathname ? "active" : " "}`}
                key={index}
                to={route.path}
              >
                {route.label}
              </Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
