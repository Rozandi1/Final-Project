import React from 'react'
import Navbar from '../../component/nav/Navbar'

function Kuliner() {
  return (
    <>
        <Navbar/>
        {/* Title */}
        <section id='title'>
      <div className="contaoner-fluid py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2>Makanan Khas pulau Sumbawa</h2>
              <p>Destinasi rekomendasi dan hal yang unik di Pulau Sumbawa</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id='bannerKuliner'>
    <div className="container-fluid my-3" style={{backgroundColor: '#056ccc'}}>
        <div className="container">
            <div className="row">
                <div className="col">
                <h1>halo</h1>
                </div>
            </div>
        </div>
    </div>
    </section>
    </> 
  )
}

export default Kuliner