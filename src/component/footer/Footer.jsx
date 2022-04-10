import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/LogoSumbawa1.png";
import "./Footer.css";

function Footer() {
  return (
    <>
      <p className="mt-5" style={{ width: "100%", height: "10px", marginLeft: "auto", marginRight: "auto", backgroundColor: "#f1d00a", border: " 0 none" }} />

      <section id="footer">
        <div className="container-fluid" style={{ backgroundColor: "#3e497a", marginTop: "-20px" }}>
          <div className="container">
            <div className="row pt-5 justify-content-center">
              <div className="col-md-3 col-6">
                <img src={Logo} alt="" className="img-fluid" style={{ width: "200px" }} />
                <br /> <br />
                <Link to={"/"}>
                  <p>Mengenal wisata yang ada di pulau Sumbawa.</p>
                </Link>
                <Link to={""}>
                  <p>Whatsapp contact : +62 823-4005-1783</p>
                </Link>
                <Link to={""}>
                  <p>Email : visitsumbawaisland@mail.com</p>
                </Link>
              </div>
              <div className="col-md-2 col-4 offset-md-1 offset-2">
                <h2>Menu</h2>
                <Link to={"/"}>
                  <p>Home</p>
                </Link>
                <Link to={"/Wisata"}>
                  <p>Wisata</p>
                </Link>
                <Link to={"/Budaya"}>
                  <p>Budaya</p>
                </Link>
                <Link to={"/Kuliner"}>
                  <p>Kuliner</p>
                </Link>
                <Link to={""}>
                  <p>About Us</p>
                </Link>
              </div>
              <div className="col-md-3 col-6 mt-4 mt-md-0">
                <h2>Website Terkait</h2>
                <Link to={""}>
                  <p>Promosi Wisata</p>
                </Link>
                <Link to={""}>
                  <p>Promosi Kuliner</p>
                </Link>
                <Link to={""}>
                  <p>Promosi Event</p>
                </Link>
              </div>
              <div className="col-md-3 col-6 mt-4 mt-md-0">
                <h2>Layanan Kami</h2>
                <Link to={""}>
                  <p>Information Center</p>
                </Link>
                <Link to={""}>
                  <p>Forum</p>
                </Link>
              </div>
            </div>
            <div className="row py-3">
              <div className="col">
                <h3>
                  <Link to={""}>
                    <i className="bi bi-facebook"></i>
                  </Link>
                  <Link to={""}>
                    &nbsp;<i class="bi bi-instagram"></i>
                  </Link>
                  <Link to={""}>
                    {" "}
                    &nbsp;<i className="bi bi-envelope"></i>
                  </Link>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="ending">
        <div className="container-fluid" style={{ backgroundColor: "#21325e" }}>
          <div className="container">
            <div className="row py-3 text-center">
              <td className="align-middle text-white">Copyright 2022 All Rights Reserved Visit Sumbawa Island</td>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
