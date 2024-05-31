import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import Accueil from './pages/Accueil/Accueil';
import Categories from './pages/Categories/Categories';
import Contact from './pages/Contact/Contact';
import Produits from './pages/Produits/Produits';
import MyNavbar from './components/MyNavbar/MyNavbar';
import DetailsCategorie from './pages/Categories/DetailsCategorie';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Router>
      <MyNavbar />
      <Routes className="max-w-screen-xl w-100 flex flex-wrap items-center justify-between mx-auto p-4">
          <Route path='/' element={<Accueil />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/produits' element={<Produits />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/categories_details/:slug' element={<DetailsCategorie />} />
      </Routes>
    </Router>
  // </React.StrictMode>
);
