<<<<<<< HEAD
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Hero />
     
    </div>
=======








import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import About from './pages/presentation';

function App() {
  return (
   <div>
    <Navbar/>
    <Footer/>
     <About/>
   </div>

>>>>>>> main
  );
}

export default App;