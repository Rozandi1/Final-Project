import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import React, { useState, useEffect } from "react";

function Budaya() {
  const [budaya, setBudaya] = useState([]);
  async function fetcBudaya() {
    fetch("https://west-broad-gerbil.glitch.me/budaya")
      .then((response) => response.json())
      .then((data) => setBudaya(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetcBudaya();
  }, []);

  return (
    <>
      <Navbar />

      {/* Title */}
      <section id="title">
        <div className="contaoner-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Budaya di Pulau Sumbawa</h2>
                <p>Destinasi rekomendasi dan hal unik Sumbawa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section id="budaya">
        <div className="container-fluid py-md-5">
          <div className="container">
            {budaya.map((budaya) => {
              return (
                <div className="row py-3">
                  <div className="card border-0 shadow" key={budaya.id}>
                    <div className="card-body">
                      <div className="row align-items-center ">
                        <div className="col-md-4 col-12">
                          <img src={budaya.image} alt="" className="img-fluid" style={{ borderRadius: "6%", width: "350px", height: "auto" }} />
                        </div>
                        <div className="col-md-8 col-12 mt-4 mt-md-0">
                          <h3>{budaya.name}</h3>
                          <p>{budaya.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Budaya;
