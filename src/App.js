import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import ContactUsPage from './pages/ContactUs.js';
import './App.css';

function App() {

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='contact' element={<ContactUsPage/>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;
