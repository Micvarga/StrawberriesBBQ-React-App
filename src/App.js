import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ContactUsPage from './pages/Contact Us/ContactUs';
import HomePage from './pages/Home Page/HomePage.js';
import MenuPage from './pages/Menu Page/MenuPage.js';
import './App.css';


function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='contact' element={<ContactUsPage />} />
        <Route path='menu' element={<MenuPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
