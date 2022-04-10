import React, { useState, useEffect } from "react";

export default function KulinerCard() {
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
      <div className="card" style="width: 18rem;">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </>
  );
}
