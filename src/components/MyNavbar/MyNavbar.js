import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function MyNavbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">My Ecommerce Site</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
        <Nav.Link href="/" >
        Accueil
        </Nav.Link>
        <Nav.Link href="/categories">Catégories</Nav.Link>
        <Nav.Link href="/produits">Produits</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link> 
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;