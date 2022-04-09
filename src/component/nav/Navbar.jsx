import { Link } from "react-router-dom"
import Logo from '../../assets/image/LogoSumbawa1.png'
import '../../component/nav/Navbar.css'

function Navbar() {
  return (
    <>
    <section id='navbarAll'>
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm" style={{backgroundColor: '#3e497a'}}>
      <div className="container">
        <img src={Logo} alt="" width="100" />
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-3">
            <li className="nav-item mx-2">
              <Link className="nav-link" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/Wisata2">Wisata</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/Kuliner">Kuliner</Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/Budaya">Budaya</Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item mx-3">
              <Link className="nav-link active" aria-current="page" to="#">Sign In&emsp;<i className="bi bi-person-circle fs-4"></i></Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
    </section>
    </>
  )
}

export default Navbar