import React from 'react';

const Hero = () => {
  return (
    /* 1. overflow-hidden o vh-100 bach l-Hero i-akhod l-ecran kamla */
    <section className="hero-section position-relative overflow-hidden vh-100 d-flex align-items-center">
      
      {/* 2. L-image t-welli k-khlfiya (Background) */}
      <img 
        src="/images/isag-hero.jpg" 
        alt="ISAG Hero Background" 
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ 
          objectFit: 'cover', // Bach l-tswira t-ghatti kolchi bla ma t-t-jbed
          zIndex: -1,         // Bach t-mchi wra l-ktaba
          filter: 'brightness(0.6)' // Bach t-welli m-dlma chwiya o l-ktaba t-ban wadha
        }} 
      />

      {/* 3. L-ktaba dyalk */}
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-12 col-md-8 text-white animate-fade-in">
            <h1 className="display-3 fw-bold mb-4" style={{ lineHeight: '1.2' }}>
              Bienvenue à l’ISAG Casablanca <br /> 
              Institut Spécialisé des <br />
              Arts Graphiques
            </h1>
            <p className="lead mb-5 opacity-90 fs-4">
              Développez vos compétences en design graphique <br />
              et en techniques d’impression
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