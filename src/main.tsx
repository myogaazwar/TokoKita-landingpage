import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';

import MainLayout from './MainLayout';
import Login from './pages/Login';
import Register from './pages/Register';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path='products/:sort?' element={<Products />} />
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Route>

        <Route path='/sign-in' element={<Login />} />
        <Route path='/sign-up' element={<Register />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
