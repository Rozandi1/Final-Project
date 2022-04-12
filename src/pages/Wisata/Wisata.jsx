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
          <div className="pt-2 text-start mt-5 py-md-3">
            <h3 className="display-7 fw-bold">Destinasi Wisata di Sumbawa</h3>
            <div className="col-xl-12 col-lg-6 mx-auto">
              <p className="lead mb-3">Destinasi rekomendasi dan hal yang unik di pulau Sumbawa</p>
            </div>
          </div>
        </div>

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
