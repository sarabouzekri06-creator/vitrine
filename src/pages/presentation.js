
/* */ 
// pages/About.jsx
import React from 'react';
import '../styles/ofppt.css';

const About = () => {
  return (
    <div>
        <div className='page'>
      <section className='ofppt' >
        <div className="">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">
                 Office de la Formation Professionnelle
              </span>      
              <h1 className="hero-title">
                À propos de <span>l'OFPPT</span>
              </h1>       
              <p className="hero-description">
                L'Office de la Formation Professionnelle et de la Promotion du Travail (OFPPT)
               <br></br> est un établissement public marocain créé en 1974. Il est le principal opérateur 
                public dans le domaine de la formation professionnelle au Maroc.
              </p>
            </div>
              <img  src="/images/ofppt.jpg"  alt="Siège OFPPT" className='img1'/> 


          </div>
        </div>
      </section>

      {/* Institut Spécialisé des Arts Graphiques */}
      <section >
        <div className="">
          <div className="institut-content">
            <div className="institut-text">
              <h2 className="institut-title">
                <i className="bi bi-palette-fill"></i> Institut Spécialisé des <span>Arts Graphiques</span>
              </h2>          
              <div className='location-badge '>
                     <i className="bi bi-geo-alt-fill text-yellow me-2"></i>
                  <span className="fw-semibold">Casablanca, Maroc</span>
                </div>
              <p className="institut-description">
                L'Institut Spécialisé des Arts Graphiques de Casablanca est un établissement 
                de référence dans le domaine des arts<br></br> graphiques et de l'impression. Il forme 
                des professionnels qualifiés dans les métiers du design graphique,de la PAO 
                et des techniques d'impression.
              </p>
               </div>
              <img   src="/images/isagc-principal.jpg"  alt="isag"  className="main-image" />
                </div>
                </div>
                </section>
              <div className="image-gallery ">
                <div className="feature-item">
                    <img  src="/images/img1.jpg"  alt="img1" />
                </div>
                <div className="feature-item">
                  <img  src="/images/img2.jpg" alt="img2" />
                </div>
                <div className="feature-item">
                  <img src="/images/img3.jpg" alt="img3" />
                </div>
                <div className="feature-item">
                  <img  src="/images/img4.jpg"  alt="img4"  />
                </div>     
            </div>
              </div>
    </div>
  );
};

export default About;