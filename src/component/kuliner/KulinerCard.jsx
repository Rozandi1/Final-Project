import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import React, { useState, useEffect } from "react";

function Kuliner() {
  const [kuliner, setKuliner] = useState([]);
  async function fetchKuliner() {
    fetch("https://west-broad-gerbil.glitch.me/kuliner")
      .then((response) => response.json())
      .then((data) => setKuliner(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchKuliner();
  }, [kuliner]);

  return (
    <>
      <Navbar />

      {/* Title */}
      <section id='title'>
        <div className='contaoner-fluid py-5 mt-4'>
          <div className='container'>
            <div className='row'>
              <div className='col-12'>
                <h2>Budaya di Pulau Sumbawa</h2>
                <p>Destinasi rekomendasi dan hal unik Sumbawa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section id='kuliner'>
        <div className='container-fluid py-md-3'>
          <div className='container'>
            <div className='row justify-content-center '>
              {kuliner.map((kuliner) => {
                return (
                  <div className='col-md-3 col-12 mt-3' key={kuliner.id}>
                    <div
                      className='card h-100 border-0 shadow p-2'
                      style={{ borderRadius: "5%" }}>
                      <img
                        src={kuliner.image}
                        className='img-responsive'
                        alt='...'
                        style={{
                          height: "200px",
                          objectFit: "cover",
                          objectPosition: "center center",
                          borderRadius: "5%",
                        }}
                      />
                      <div className='card-body'>
                        <h5 className='card-title'>{kuliner.name}</h5>
                        <p className='card-text'>{kuliner.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Kuliner;
