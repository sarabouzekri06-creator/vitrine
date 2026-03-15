
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/Hero';

import About from './pages/presentation';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <Hero />
         <About/>
      <Footer/>
   
    


     
    </div>

  );
}

export default App;