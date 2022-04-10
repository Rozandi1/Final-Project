import Navbar from '../../component/nav/Navbar'
// import Singang from '../../assets/Singang.jpg'
import React, {useState, useEffect} from 'react'
import '../Kuliner2/Kuliner.css'
import Footer from '../../component/foot/Footer'

function Kuliner() {
    const [kuliner, setKuliner] = useState([])
    async function fetchKuliner() {
      fetch('https://west-broad-gerbil.glitch.me/kuliner')
      .then(response => response.json())
      .then(data => setKuliner(data))
      .catch(err => console.log(err))
    }
  
    useEffect(()=> {
        fetchKuliner()
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
              <h2>Makanan Khas pulau Sumbawa</h2>
              <p>Destinasi rekomendasi dan hal yang unik di Pulau Sumbawa</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* card kuliner */}
     {/* kuliner Card */}
     <section id='kulinerCard'>
      <div className="container-fluid">
        <div className="container">
          <div className="row justify-content-center ">
            {
              kuliner.map(kuliner => {
                return <div className="col-md-3 col-12 mt-3" key={kuliner.id} >
                <div class="card h-100 border-0 shadow p-2" style={{borderRadius: '5%'}}>
                <img src={kuliner.image} class="img-responsive" alt="..." style={{height: '200px', objectFit: 'cover', objectPosition: 'center center', borderRadius: '5%'}} />
                <div class="card-body">
                        <h5 class="card-title">{kuliner.name}</h5>
                        <p class="card-text">{kuliner.price}</p>
                        <button id='buttonDesc' href="#" class="btn shadow border-0 text-white" style={{borderRadius: '8px', backgroundColor: '#056ccc'}}>Go somewhere</button>
                      </div>
                    </div>
                </div>
              })
            }
            {/* end row 1 */}
          </div>
        </div>
      </div>
    </section>
    <Footer/>
    </> 
  )
}

export default Kuliner