import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';


function MyNavbar({estLoggue}) {
  
  const navigate = useNavigate();
  const seDeconnecter = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
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
        {estLoggue() && <Nav.Link href="/categories">Catégories</Nav.Link>}
        {estLoggue() && <Nav.Link href="/produits">Produits</Nav.Link>}
          {estLoggue() && <Nav.Link href="/contact">Contact</Nav.Link> }
            {estLoggue() && <Nav.Link href="/panier">Panier</Nav.Link> }
        {estLoggue() && <Nav.Link onClick={seDeconnecter}>Déconnexion</Nav.Link>}
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;