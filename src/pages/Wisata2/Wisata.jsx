import React, {useState, useEffect} from 'react';
import Navbar from '../../component/nav/Navbar'
import Footer from '../../component/foot/Footer'
import Wisata from '../../assets/wisata.jpg'


function Wisata2() {
  const [wisata, setWisata] = useState([])
  async function fetcWisata() {
    fetch('https://west-broad-gerbil.glitch.me/wisata')
    .then(response => response.json())
    .then(data => setWisata(data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    fetcWisata()
  },[])


  return (
    <>
    <Navbar/>
     {/* Title */}
     <section id='title'>
      <div className="contaoner-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Desinasi terbaik yang ada di Pulau Sumbawa</h2>
              <p>Destinasi rekomendasi dan hal yang unik di Pulau Sumbawa</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Description */}
    <section id='budaya'>
      <div className="container-fluid py-md-5">
        <div className="container" >
          {
            wisata.map(wisata => {
              return <div className="row py-3">
              <div className="card border-0 shadow" key={wisata.id}>
                <div className="card-body">
                  <div className="row align-items-center ">
                  <div className="col-md-4 col-12">
                <img src={wisata.image} alt="" className='img-fluid' style={{ borderRadius: "6%", width: "350px", height: 'auto'}} />
              </div>
              <div className="col-md-8 col-12 mt-4 mt-md-0">
                <h3>{wisata.name}</h3>
                <p>{wisata.description}</p>
              </div>
                  </div>
                </div>
              </div>
            </div>
            })
          }

        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default Wisata2