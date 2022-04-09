import { Link } from "react-router-dom";
import React from "react";
import logo from "../../component/Logo.png";
import "./style.css";

export default function Navbar() {
  return (
    <>
      <header className="p-3 mb-4 bg-success text-white">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/landingPage" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img className="Logo-sumbawa" src={logo} alt="logo" />
            </Link>
            <div id="navItem">
              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li>
                  <Link to="/" className="nav-link px-2 text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/wisata2" className="nav-link px-2 text-white">
                    Wisata
                  </Link>
                </li>
                <li>
                  <Link to="/kuliner" className="nav-link px-2 text-white">
                    Kuliner
                  </Link>
                </li>
                <li>
                  <Link to="/budaya" className="nav-link px-2 text-white">
                    Budaya
                  </Link>
                </li>
                <li>
                  <Link to="/explore" className="nav-link px-2 text-white">
                    Explore
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
