import React from "react";
import Navbar from "../../component/navbar/Navbar";
import ArtikelPict from "../../assets/image/Artikel.png";
import "./Artikel.css";
import Footer from "../../component/footer/Footer";
import Artikel1 from "../../assets/image/Artikel-1.png";
import Artikel2 from "../../assets/image/Artikel-2.png";
import Artikel3 from "../../assets/image/Artikel-3.png";

function Artikel() {
  return (
    <>
      <Navbar />
      <section id="Artikel">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <img src={ArtikelPict} alt="" className="img-fluid" style={{ width: "1000px", borderRadius: "5%" }} />
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-9" id="cardDescription" style={{ marginTop: "-100px" }}>
                <div class="card border-0 shadow rounded">
                  <div className="container">
                    <div class="card-body">
                      <h5 class="card-title fw-bold">Kenawa Sebagai Penyambut Pulau Sumbawa</h5> <br />
                      <p class="card-text">Pulau Kenawa memiliki luas sebesar 15 hektare dengan garis pantai membentang sejauh sekitar 1,73 kilometer terletak di Kabupaten Sumbawa Barat, Provinsi Nusa Tenggara Barat (NTB).</p>
                      <p>
                        Selama ini, Pulau Kenawa identik dengan wisata bukit dan padang savananya, namun ternyata pantainya tidak kalah menarik, tenang dan bersih. Diyakini kalau sudah sampai di Pantai Kenawa, anda tidak bisa melewatkan
                        kesempatan terjun mandi ke laut atau untuk sekedar berendam di pantai tersebut.
                      </p>
                      <p>
                        Keindahan lautnya masih yang masih terjaga, cocok untuk snorkeling agar wisatawan puas melihat warna-warni terumbu karang, ikan dan berbagai jenis binatang laut lainnya yang akan membuat anda berlama-lama di tengah
                        laut.
                      </p>
                      <p>"Kalau kita bersnorkeling, rasanya seperti berada di dalam akuarium raksasa," katanya.</p>
                      <p>
                        Sementara untuk urusan bilas, wisatawan tidak perlu khawatir sebab di Pulau Kenawa sudah ada fasilitas "berugak" atau gazebo tempat beristirahat atau shalat, serta toilet umum gratis yang relatif cukup bersih sebagai
                        tempat bilas.
                      </p>
                      <p>
                        Namun, untuk menggunakan fasilitas tersebut anda hanya perlu membeli air bersih yang dijual per galon. Satu galon dihargai Rp15.000 oleh penjual warung yang ada di Kenawa.Di Pulau Kenawa hanya ada satu warung yang
                        menyediakan berbagai minuman terutama kopi, serta makanan bagi wisatawan yang tidak membawa bekal
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="comment">
        <div className="container-fluid py-5">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h3 className="fw-bold py-4">Apa Kata Mereka?</h3>
              </div>
              <div className="row">
                <div className="col-md-3 col-12 mt-3">
                  <div class="card border-0 shadow" h-100>
                    <div class="card-body">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img src={Artikel1} alt="" className="img-fluid" />
                        </div>
                        <div className="col-6">
                          <br />
                          <h6 className="fw-bold">Aditya Yoga</h6>
                          <p>Content Creator</p>
                        </div>
                        <p class="card-text pt-3">Ke Kenawa pasti gak akan nyesel deh udah ke-4 dan gak pernah bosan</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* akhir card- 1  */}
                <div className="col-md-3 col-12 mt-3">
                  <div class="card border-0 shadow" h-100>
                    <div class="card-body">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img src={Artikel1} alt="" className="img-fluid" />
                        </div>
                        <div className="col-6">
                          <br />
                          <h6 className="fw-bold">Aditya Yoga</h6>
                          <p>Content Creator</p>
                        </div>
                        <p class="card-text pt-3">Ke Kenawa pasti gak akan nyesel deh udah ke-4 dan gak pernah bosan</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* akhir card- 1  */}
                <div className="col-md-3 col-12 mt-3">
                  <div class="card border-0 shadow" h-100>
                    <div class="card-body">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img src={Artikel2} alt="" className="img-fluid" />
                        </div>
                        <div className="col-6">
                          <br />
                          <h6 className="fw-bold">Aditya Yoga</h6>
                          <p>Content Creator</p>
                        </div>
                        <p class="card-text pt-3">Ke Kenawa pasti gak akan nyesel deh udah ke-4 dan gak pernah bosan</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* akhir card- 1  */}
                <div className="col-md-3 col-12 mt-3">
                  <div class="card border-0 shadow" h-100>
                    <div class="card-body">
                      <div className="row align-items-center">
                        <div className="col-6">
                          <img src={Artikel3} alt="" className="img-fluid" />
                        </div>
                        <div className="col-6">
                          <br />
                          <h6 className="fw-bold">Aditya Yoga</h6>
                          <p>Content Creator</p>
                        </div>
                        <p class="card-text pt-3">Ke Kenawa pasti gak akan nyesel deh udah ke-4 dan gak pernah bosan</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* akhir card- 1  */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Artikel;
