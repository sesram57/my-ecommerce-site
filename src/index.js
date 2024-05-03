import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import Accueil from './pages/Accueil/Accueil';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Produits from './pages/Produits/Produits';
import Navbar from './components/Navbar/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/produits' element={<Produits />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
