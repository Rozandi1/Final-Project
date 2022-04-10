<<<<<<< HEAD
import React from 'react';
import CardProduct from '../../component/kuliner/cardProduct';
import CartListItem from '../../component/kuliner/carListItem';
import menu from './kuliner-data';
import { useEffect, useState } from 'react';
import Default from '../../layout/Default';

export default function Kuliner() {
  const [total, setTotal] = useState(0);
  const [purchasedItem, setPurchasedItem] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const isFound = cart.find((item) => item.id === id);

    if (isFound) {
      increaseCartAmount(id);
    } else {
      const data = menu[id - 1];
      data.amount = 1;
      setCart([...cart, data]);
    }
  };

  const decreaseCartAmount = (id) => {
    let indexItem;

    cart.forEach((item, index) => {
      indexItem = item.id === id ? index : indexItem;
    });

    const dataCart = cart;
    dataCart[indexItem].amount > 1
      ? (dataCart[indexItem].amount -= 1)
      : dataCart.splice(indexItem, 1);

    setCart([...dataCart]);
  };

  const increaseCartAmount = (id) => {
    let indexItem;

    cart.forEach((item, index) => {
      indexItem = item.id === id ? index : indexItem;
    });

    const dataCart = cart;
    dataCart[indexItem].amount += 1;

    setCart([...dataCart]);
  };
=======
import Navbar from "../../component/navbar/Navbar";
import Footer from "../../component/footer/Footer";
import React, { useState, useEffect } from "react";

function Kuliner() {
  const [kuliner, setKuliner] = useState([]);
  async function fetchKuliner() {
    fetch("https://west-broad-gerbil.glitch.me/kuliner")
      .then((response) => response.json())
      .then((data) => setKuliner(data))
      .catch((err) => console.log(err));
  }
>>>>>>> ff172e285cb445c18699c6167d81aae83ad171b2

  useEffect(() => {
    fetchKuliner();
  }, [kuliner]);

  return (
    <>
<<<<<<< HEAD
      <Default totalItem={purchasedItem}>
        <div className='container'>
          <div className='pt-5 mt-4  text-start'>
            <h3 className='display-7 fw-bold'>Makanan Khas Pulau Sumbawa</h3>
            <div className='col-xl-12 col-lg-6 mx-auto'>
              <p className='lead mb-3'>
                Destinasi rekomendasi dan hal yang unik di pulau Sumbawa
              </p>
            </div>
          </div>
        </div>
        {/* <div className="container">
          <form className="d-flex">
            <input className="form-control me-5 rounded" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div> */}

        <div className='container py-5'>
          <div className='row'>
            <div className='col-md-8'>
              <div className='card w-100'>
                <div className='card-body'>
                  <div className='row'>
                    {menu.map((menu) => (
                      <div
                        key={menu.id}
                        className='col-md-4 col-sm-6 col-12 my-2'>
                        <CardProduct
                          {...menu}
                          addToCart={() => addToCart(menu.id)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className='col-md-4'>
              <ol className='list-group'>
                {cart.map((c) => {
                  return (
                    <CartListItem
                      key={c.id}
                      {...c}
                      increase={() => increaseCartAmount(c.id)}
                      decrease={() => decreaseCartAmount(c.id)}
                    />
                  );
                })}
                <li className='list-group-item d-flex justify-content-between align-items-start'>
                  <div className='ms-2 me-auto'>
                    <div className='fw-bold'>Total Harga</div>
                  </div>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(total)}
                </li>
                <button type='button' className='btn btn-success w-100'>
                  Pesan Sekarang
                </button>
              </ol>
=======
      <Navbar />

      {/* Title */}
      <section id="title">
        <div className="contaoner-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2>Budaya di Pulau Sumbawa</h2>
                <p>Destinasi rekomendasi dan hal unik Sumbawa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section id="kuliner">
        <div className="container-fluid py-md-5">
          <div className="container">
            <div className="row justify-content-center ">
              {kuliner.map((kuliner) => {
                return (
                  <div className="col-md-3 col-12 mt-3" key={kuliner.id}>
                    <div class="card h-100 border-0 shadow p-2" style={{ borderRadius: "5%" }}>
                      <img src={kuliner.image} class="img-responsive" alt="..." style={{ height: "200px", objectFit: "cover", objectPosition: "center center", borderRadius: "5%" }} />
                      <div class="card-body">
                        <h5 class="card-title">{kuliner.name}</h5>
                        <p class="card-text">{kuliner.price}</p>
                        <button id="buttonDesc" href="#" class="btn shadow border-0 text-white" style={{ borderRadius: "8px", backgroundColor: "#056ccc" }}>
                          Go somewhere
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
>>>>>>> ff172e285cb445c18699c6167d81aae83ad171b2
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Kuliner;
