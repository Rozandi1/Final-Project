import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../assets/image/LogoSumbawa1.png';
import AuthModal from '../modal/AuthModal';
import './Navbar.css';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown } from 'react-bootstrap';
import { CustomToggle } from '../dropdown/AvatarDropdown';
import { clearCurrentUser } from '../../redux/auth/action';

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [background, setBackground] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();

  const { pathname } = location;

  const { displayName } = useSelector((state) => state.auth.currentUser);

  const handleOpenModalLogin = () => {
    setShowLogin(true);
  };

  const handleOpenModalRegister = () => {
    setShowRegister(true);
  };

  const handleSignOut = () => {
    dispatch(clearCurrentUser());
  };

  const handleChangeModal = () => {
    setShowLogin(!showLogin);
    setShowRegister(!showRegister);
  };

  const checkScroll = () => {
    const scroll = window.scrollY;
    if (pathname !== '/') {
      setBackground(true);
    } else if (scroll > 50) {
      setBackground(true);
    } else if (background === true) {
      setBackground(false);
    } else {
      setBackground(false);
    }
  };

  window.addEventListener('scroll', checkScroll);

  useEffect(() => {
    checkScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <>
      <section id='navbarAll'>
        <nav
          className={`navbar navbar-expand-lg navbar-dark fixed-top ${
            background && 'shadow-sm'
          }`}
          style={{
            backgroundColor: background && '#3e497a',
            transition: pathname !== '/' && 'background-color 0.5s ease',
          }}>
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
                    <>
                      <button
                        className='btn text-light'
                        onClick={handleOpenModalLogin}
                        style={{ boxShadow: 'none' }}>
                        Sign In
                      </button>
                      <button
                        className='btn text-light'
                        onClick={handleOpenModalRegister}
                        style={{ boxShadow: 'none' }}>
                        Sign Up
                      </button>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <AuthModal
          show={showLogin}
          setShow={setShowLogin}
          handleChange={handleChangeModal}
        />
        <AuthModal
          show={showRegister}
          setShow={setShowRegister}
          handleChange={handleChangeModal}
          register
        />
      </section>
    </>
  );
}

export default Navbar;
