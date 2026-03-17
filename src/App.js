import React from 'react';
import { Toaster } from 'sonner';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Presentation from './pages/Presentation';
import Footer from './components/Footer';

import ContactPage from "./page/ContactPage";

function App() {
  return (
    <div>
      {/* Notifications */}
      <Toaster position="top-right" richColors />
      
      {/* Navbar  */}
      <Navbar />

      <main>
        {/* Section Hero */}
        <Hero />

        {/* Section About / Presentation */}
        <Presentation />

        {/*  Contact  */}
        <ContactPage />
      </main>

      {/* Footer  */}
      <Footer />
    </div>
  );
}

export default App;