import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/image/LogoSumbawa1.png";
import AuthModal from "../modal/AuthModal";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { Dropdown } from "react-bootstrap";
import { CustomToggle } from "../dropdown/AvatarDropdown";
import { clearCurrentUser } from "../../redux/auth/action";

function Navbar() {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const { displayName } = useSelector((state) => state.auth.currentUser);

  const handleOpenModal = () => {
    setShow(true);
  };

  const handleSignOut = () => {
    dispatch(clearCurrentUser());
  };

  return (
    <>
      <section id='navbarAll'>
        <nav
          className='navbar navbar-expand-lg navbar-dark shadow-sm'
          style={{ backgroundColor: "#3e497a" }}>
          <div className='container'>
            <img src={Logo} alt='' width='100' />
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ms-3'>
                <li className='nav-item mx-2'>
                  <Link
                    className='navbar-link nav-link'
                    aria-current='page'
                    to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='navbar-link nav-link' to='/Wisata'>
                    Wisata
                  </Link>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='navbar-link nav-link' to='/Kuliner'>
                    Kuliner
                  </Link>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='navbar-link nav-link' to='/Budaya'>
                    Budaya
                  </Link>
                </li>
              </ul>

              <ul className='navbar-nav ms-auto'>
                <li className='nav-item mx-3'>
                  {displayName ? (
                    <Dropdown>
                      <Dropdown.Toggle
                        as={CustomToggle}
                        id='dropdown-custom-components'>
                        {`Hallo, ${displayName}`}
                      </Dropdown.Toggle>

                      <Dropdown.Menu className='w-100'>
                        <Dropdown.Item onClick={handleSignOut}>
                          Sign Out
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : (
                    <button
                      className='btn text-light'
                      onClick={handleOpenModal}>
                      Sign In
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <AuthModal show={show} setShow={setShow} />
      </section>
    </>
  );
}

export default Navbar;
