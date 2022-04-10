import React, { useEffect } from "react";
import { Container, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { CardHorizontal } from "../../component";
import Default from "../../layout/Default";
import { getWisata } from "../../redux/wisata/action";

export default function Wisata() {
  const { loading, wisata } = useSelector((state) => state.wisata);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWisata());
  }, [dispatch]);
  return (
    <>
      <Default>
        <div className="container">
          <div className="pt-2 text-start">
            <h3 className="display-7 fw-bold">Destinasi Wisata di Sumbawa</h3>
            <div className="col-xl-12 col-lg-6 mx-auto">
              <p className="lead mb-3">Destinasi rekomendasi dan hal yang unik di pulau Sumbawa</p>
            </div>
          </div>
        </div>
        {/* <div className='container mb-5'>
          <form className='d-flex'>
            <input
              className='form-control me-5 rounded'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div> */}

        <Container>
          {loading ? (
            <div className="w-100 vh-100 d-flex justify-content-center align-items-center">
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </div>
          ) : (
            <div className="d-flex flex-column align-items-center my-3">
              <CardHorizontal data={wisata} />
            </div>
          )}
        </Container>
      </Default>
    </>
  );
}
