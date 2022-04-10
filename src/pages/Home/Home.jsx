import React from 'react';
// import { Link } from "react-router-dom";
import './Home.css';
import PromosiCard from '../../component/home/card';
import Default from '../../layout/Default';
import { Container, Image } from 'react-bootstrap';
import CardSlider from '../../component/swiperCard/CardSlider';

export default function Home() {
  return (
    <>
      <Default>
        <div
          className='w-100 vh-100'
          style={{
            backgroundImage:
              'url(../../assets/image/randall-ruiz-LVnJlyfa7Zk-unsplash.jpg)',
            backgroundPosition: 'center',
          }}>
          <Container className='h-100'>
            <div className='d-flex flex-column justify-content-center text-light h-100'>
              <h1 className='display-3 fw-bold'>SELAMAT DATANG DI</h1>
              <h1 className='display-3 fw-bold'>VISIT SUMBAWA</h1>
              <h1 className='display-3 fw-bold mb-5'>ISLAND</h1>
              <p className='display-6'>
                Temukan pengalaman terbaikmu di pulau Sumbawa
              </p>
            </div>
          </Container>
          {/* <Image
            src='../../assets/image/randall-ruiz-LVnJlyfa7Zk-unsplash.jpg'
            className='w-100 h-100'
            style={{ objectFit: 'cover' }}
          /> */}
        </div>

        <CardSlider />
        <PromosiCard />
      </Default>
      {/* <Navbar />
      <div id='myCarousel' className='carousel' data-bs-ride='carousel'>
        <div className='carousel-inner'>
          <div className='carousel-item active'>
            <img
              src='../../assets/image/randall-ruiz-LVnJlyfa7Zk-unsplash.jpg'
              className='d-block w-100'
              alt='Hero'
            />
            <div className='container-fluid'>
              <div className='carousel-caption text-start'>
                <h1>SELAMAT DATANG DI</h1>
                <h1>VISIT SUMBAWA</h1>
                <h1>ISLAND</h1>
                <p>Temukan pengalaman terbaikmu di pulau Sumbawa</p>
                <div className='logo'>
                  <img src={Logo} className='logo d-block w-100' alt='Kenawa' />
                  <Link className="btn btn-lg btn-primary" to="/Sign-In">
                    Sign up today
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PromosiCard />
      <Footer /> */}
    </>
  );
}
