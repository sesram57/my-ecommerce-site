import { Link } from 'react-router-dom'

function Navbar(props) {
  return (
    <nav>
      
             <Link to="/" className='mr-4'>Accueil</Link>
             <Link to="/categories" className='mr-4'>Catégories</Link>
             <Link to="/produits" className='mr-4'>Produits</Link>
             <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar