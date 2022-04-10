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
      <section id="kuliner">
        <div className="container-fluid py-md-5">
          <div className="container">
            <div className="row justify-content-center ">
              {promosi.map((promosi) => {
                return (
                  <div className="col-md-3 col-12 mt-3" key={promosi.id}>
                    <div class="card h-100 border-0 shadow p-2" style={{ borderRadius: "5%" }}>
                      <img src={promosi.image} class="img-responsive" alt="..." style={{ height: "200px", objectFit: "cover", objectPosition: "center center", borderRadius: "5%" }} />
                      <div className="container-fluid">
                        <div class="card-body">
                          <h5 class="card-title">{promosi.title}</h5>
                          <p class="card-text">{promosi.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
