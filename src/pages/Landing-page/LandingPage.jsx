import React from "react";
import Default from "../../layout/Default";
import home from "../Home/Home";
import kenawa from "../Landing-page/asset/kenawa.jpg";

export default function LandingPage() {
  return (
    <>
      <Default>
        <div className="b-example-divider"></div>

        <div className="px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-4 fw-bold">Beautiful Island of Sumbawa</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">Salah satu pulau di Indonesia yang memiliki beragam budaya, destinasi wisata dan bahkan kulinernya yang sangat menggugah.</p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button onClick={home} type="button" className="btn btn-dark btn-lg px-4 me-sm-3">
                Lets Get Started
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="container px-5">
              <img src={kenawa} className="img-fluid border rounded-3 shadow-lg mb-4" alt="kenawa" width="700" height="500" loading="lazy" />
            </div>
          </div>
        </div>
      </Default>
    </>
  );
}
