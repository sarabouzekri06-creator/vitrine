import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './pages/presentation';

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
