/* eslint-disable jsx-a11y/alt-text */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCoverflow, Pagination } from "swiper";

export default function CardSlider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        loopFillGroupWithBlank={true}
        coverflowEffect={{
          rotate: 25,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className='mySwiper'>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649607243/budaya/rimpu_ljoa7d.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649400147/wisata/pantai_oabgjx.png' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649607252/budaya/tenun_idiqwf.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649696279/wisata/tess/moyoo_umpk23.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649696279/wisata/tess/keboo_xtsvxq.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649696279/wisata/tess/kenawaaaaaa_rianqf.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649696490/wisata/tess/mantarrrr_rf1dg0.jpg' />
        </SwiperSlide>
        <SwiperSlide>
          <img src='https://res.cloudinary.com/djvggstwx/image/upload/v1649696490/wisata/tess/bedilll_ivhwyv.jpg' />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
