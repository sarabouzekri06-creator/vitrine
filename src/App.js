<<<<<<< HEAD
import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

=======
>>>>>>> cf3c5fbcea6fbb1a4ec29b110ca56a3341b464f9


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import './App.css';
import Navbar from './components/navbar';

import Hero from './components/Hero';
<<<<<<< HEAD
import Presentation from './pages/Presentation';
import ContactPage from './page/ContactPage';
=======
import ContactPage from './page/ContactPage';

import About from './pages/presentation';
import Footer from './components/footer';
import logo from './logo.svg';







>>>>>>> cf3c5fbcea6fbb1a4ec29b110ca56a3341b464f9

function App() {
  return (
    <div className="App">
       {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />
      <ContactPage/>

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
