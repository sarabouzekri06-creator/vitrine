import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section d-flex align-items-center">
      <div className="container">
        <div className="row">

          <div className="col-12 col-md-6 text-white animate-fade-in">
            <h1 className="display-3 fw-bold mb-4">
              Bienvenue à l’ISAG Casablanca <br /> Institut Spécialisé des Arts Graphiques
            </h1>
            <p className="lead mb-5 opacity-90">
              Développez vos compétences en design graphique et en techniques d’impression
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-success btn-lg px-5 rounded-pill hero-btn">
                Contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;