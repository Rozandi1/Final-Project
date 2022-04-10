import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import Kenawa from "../../assets/image/PulauKenawa.jpg";
import Logo from "../../assets/image/Logo.png";
import "./Home.css";
import PromosiCard from "../../component/home/card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="myCarousel" className="carousel" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Kenawa} className="d-block w-100" alt="Kenawa" />
            <div className="container-fluid">
              <div className="carousel-caption text-start">
                <h1>SELAMAT DATANG DI</h1>
                <h1>VISIT SUMBAWA</h1>
                <h1>ISLAND</h1>
                <p>Temukan pengalaman terbaikmu di pulau Sumbawa</p>
                <div className="logo">
                  <img src={Logo} className="logo d-block w-100" alt="Kenawa" />
                  {/* <Link className="btn btn-lg btn-primary" to="/Sign-In">
                    Sign up today
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromosiCard />
      <Footer />
    </>
  );
}
