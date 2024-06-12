import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import './styles/index.css';
import Accueil from './pages/Accueil/Accueil';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Produits from './pages/Produits/Produits';
import MyNavbar from './components/MyNavbar/MyNavbar';
import DetailsCategorie from './pages/Categories/DetailsCategorie';
import Panier from './pages/Panier/Panier';
import 'bootstrap/dist/css/bootstrap.min.css';
import Authentication from './components/Authentication/Authentication';

const root = ReactDOM.createRoot(document.getElementById('root'));
const estLoggue = () => {
  return !!localStorage.getItem('token');
};
const RouteLoggue = ({ element, ...rest }) => {
  return estLoggue() ? element : <Navigate to="/login" />;
};


root.render(
  // <React.StrictMode>
    <Router>
      <MyNavbar estLoggue={estLoggue} />
      <Routes className="max-w-screen-xl w-100 flex flex-wrap items-center justify-between mx-auto p-4">
        <Route path="/login" element={<Authentication />} />
        <Route path="/" element={<RouteLoggue element={<Accueil />} />} />
        <Route path="/categories" element={<RouteLoggue element={<Categories />} />} />
        <Route path="/produits" element={<RouteLoggue element={<Produits />} />} />
        <Route path="/contact" element={<RouteLoggue element={<Contact />} />} />
        <Route path="/categories_details/:slug" element={<RouteLoggue element={<DetailsCategorie />} />} />
        <Route path="/panier" element={<RouteLoggue element={<Panier />} />} />
        
      </Routes>
    </Router>
  // </React.StrictMode>
);
