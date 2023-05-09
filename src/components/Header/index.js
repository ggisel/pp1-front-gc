import { Navbar, Nav, Container } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"

const Header = () => {
  return (
    <>
    <Navbar className="navBg" variant="dark" expand="lg">
        <Container>
        <Navbar.Brand as={Link} to="/" >
            <img
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
            <Navbar.Brand as={Link} to="/" >MiEmpresa</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={Link} to="/" >Agenda de Visitas</Nav.Link>
                <Nav.Link as={Link} to="/cotizar">Cotizar vehiculos</Nav.Link>
                <Nav.Link as={Link} to="/">Mis datos</Nav.Link>          
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
  )
}

export default Header;