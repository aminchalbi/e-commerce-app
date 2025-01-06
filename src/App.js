import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';  
import Shop from './components/Shop';
import  Register from './components/Register';
import Cart from './components/Cart'
import Login from './components/Login'
import './App.css';
import { CartProvider } from './components/context/CartContext';  
import Contact from './components/Contact';
import Footer from'./components/Footer';

function App() {
  return (
    <CartProvider>  {/* Le CartProvider doit entourer toute l'application */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />  {/* Utilisez Home ici */}
          <Route path="/shop" element={<Shop />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/Contact" element={<Contact/>} />

        </Routes>
        <Footer/>
      </Router>
    </CartProvider>
  );
}

export default App;
