import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
    <Container>
        <Navbar.Brand href="home">Booknest</Navbar.Brand>
        <Nav className="me-auto">
        <Nav.Link href="home">Home</Nav.Link>
        <Nav.Link href="list">Book list</Nav.Link>
        <Nav.Link href="browse">Browse</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;