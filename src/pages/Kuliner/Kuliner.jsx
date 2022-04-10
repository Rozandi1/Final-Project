import React from "react";
import CardProduct from "../../component/kuliner/cardProduct";
import CartListItem from "../../component/kuliner/carListItem";
import menu from "./kuliner-data";
import { useEffect, useState } from "react";
import Default from "../../layout/Default";

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
    dataCart[indexItem].amount > 1 ? (dataCart[indexItem].amount -= 1) : dataCart.splice(indexItem, 1);

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

  useEffect(() => {
    let totalHarga = 0;
    let totalItem = 0;

    cart.forEach((item) => {
      totalHarga += item.price * item.amount;
      totalItem += item.amount;
    });

    setTotal(totalHarga);
    setPurchasedItem(totalItem);
  }, [cart]);
  return (
    <>
      <Default totalItem={purchasedItem}>
        <div className="container">
          <div className="pt-2 text-start">
            <h3 className="display-7 fw-bold">Makanan Khas Pulau Sumbawa</h3>
            <div className="col-xl-12 col-lg-6 mx-auto">
              <p className="lead mb-3">Destinasi rekomendasi dan hal yang unik di pulau Sumbawa</p>
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

        <div className="container py-5">
          <div className="row">
            <div className="col-md-8">
              <div className="card w-100">
                <div className="card-body">
                  <div className="row">
                    {menu.map((menu) => (
                      <div key={menu.id} className="col-md-4 col-sm-6 col-12 my-2">
                        <CardProduct {...menu} addToCart={() => addToCart(menu.id)} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <ol className="list-group">
                {cart.map((c) => {
                  return <CartListItem key={c.id} {...c} increase={() => increaseCartAmount(c.id)} decrease={() => decreaseCartAmount(c.id)} />;
                })}
                <li className="list-group-item d-flex justify-content-between align-items-start">
                  <div className="ms-2 me-auto">
                    <div className="fw-bold">Total Harga</div>
                  </div>
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(total)}
                </li>
                <button type="button" className="btn btn-success w-100">
                  Pesan Sekarang
                </button>
              </ol>
            </div>
          </div>
        </div>
      </Default>
    </>
  );
}
