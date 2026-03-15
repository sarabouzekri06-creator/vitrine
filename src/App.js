

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';
import Navbar from './components/navbar';

import Hero from './components/Hero';
import About from './pages/presentation';
import Footer from './components/footer';
import logo from './logo.svg';








function App() {
  return (
    <div className="App">
       {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About / Presentation */}
      <About />

      {/* Footer */}
      <Footer />
      
   
     

     
    </div>




  );
}

export default App;
