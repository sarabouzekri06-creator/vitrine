import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Presentation from './pages/Presentation';
import ContactPage from './page/ContactPage';

function App() {
  return (
    <div className="App">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About / Presentation */}
      <Presentation />
      {/* Contact page */}
      <ContactPage />

      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
