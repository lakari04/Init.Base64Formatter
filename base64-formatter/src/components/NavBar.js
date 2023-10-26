import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.png";

function NavBar () {
    return ( 
    <Navbar expand="lg" bg="dark" data-bs-theme="dark">
    <Container>
    <img className="logo" src={logo} alt="My logo" />
      <Navbar.Brand href="/home">Formatter</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/base64">Base64</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
    </Navbar> 
    );
}

export default NavBar;