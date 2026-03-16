import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-light pt-4 pb-2" style={{background:"#053F5C"}}>
      <div className="container">

        <div className="row">

          {/* OFPPT */}
          <div className="col-md-4 mb-3">
            <h5>OFPPT</h5>
            <p>
              Office de la Formation Professionnelle et de la Promotion du Travail.
              Plateforme dédiée aux stagiaires pour accéder aux informations
              et aux ressources pédagogiques.
            </p>
          </div>

          {/* LIENS */}
          <div className="col-md-4 mb-3">
            <h5>Liens</h5>
            <ul className="list-unstyled">
             <li>
              <Link to="/" className="nav-link text-white">Accueil</Link>
            </li>
            <li>
              <Link to="/formations" className="nav-link text-white">Formations</Link>
            </li>
            <li>
              <Link to="/actualites" className="nav-link text-white">Actualités</Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link text-white">Contact</Link>
            </li>
            </ul>
          </div>

        
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p style={{color:"#F7AD19"}} >Email : contact@ofppt.ma</p>
            <p style={{color:"#F7AD19"}} >Téléphone : +212 000 000</p>
            <p style={{color:"#F7AD19"}} >Casablanca, Maroc</p>


           <div className="d-flex gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" >
                <i className="bi bi-facebook fs-4"></i>
              </a>

              <a href="https://twitter.com" target="_blank" rel="noreferrer" >
                <i className="bi bi-twitter fs-4"></i>
              </a>

              <a href="https://linkedin.com" target="_blank" rel="noreferrer" >
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>

      
          </div>


        </div>

        <hr />

        <div className="text-center">
          © 2026 OFPPT - Tous droits réservés
        </div>

      </div>
    </footer>
  );
};

export default Footer;