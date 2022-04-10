import React, { useState, useEffect } from "react";

export default function PromosiCard() {
  const [promosi, setPromosi] = useState([]);

  async function fetchCardPromosi() {
    fetch("https://west-broad-gerbil.glitch.me/home")
      .then((response) => response.json())
      .then((data) => setPromosi(data))
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    fetchCardPromosi();
  }, [promosi]);
  return (
    <>
      {/* <div className="card bg-dark text-white">
    <div className="container">
            {promosi.map((promosi) => {
                return (
                  <img src="..." className="card-img" alt="..."/>
                  <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                  </div>
                )
            }
</div>
</div> */}
      <section id='budaya'>
        <div className='container-fluid py-md-5'>
          <div className='container'>
            {promosi.map((promosi, index) => {
              return (
                <div key={`promosi-card-${index}`} className='row py-3 '>
                  <div className='card border-0 shadow' key={promosi.id}>
                    <div className='card-body'>
                      <div className='row align-items-center '>
                        <div className='col-md-4 col-12'>
                          <img
                            src={promosi.image}
                            alt=''
                            className='img-fluid'
                            style={{
                              borderRadius: "6%",
                              width: "350px",
                              height: "auto",
                            }}
                          />
                        </div>
                        <div className='col-md-8 col-12 mt-4 mt-md-0'>
                          <h3>{promosi.title}</h3>
                          <p>{promosi.description}</p>
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
    </>
  );
}
