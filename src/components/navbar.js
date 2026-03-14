import { useState } from "react";

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const menu = () => {
    setOpen(!open);
  };

  return (
    <nav className="navbar navbar-expand-lg " style={{background:"#053F5C"}}>
      <div className="container-fluid">

        {/* LOGO */}
        <a className="navbar-brand text-white fw-bold d-flex "><h4 style={{color:"#F7AD19"}}>IS</h4><h4>AG</h4>
            </a>

        {/* BUTTON */}
        <button className="navbar-toggler" onClick={menu}>

          {open ? "X" : "☰"}

        </button>

        {/* MENU */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>

          <ul className="navbar-nav ms-auto "   >

            <li className="nav-item" >
              <a className="nav-link text-white"  >Accueil</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" >Présentation</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" >Formations</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-white" >Actualités</a>
            </li>

             <li className="nav-item">
              <a className="nav-link text-white" >Contact</a>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;