import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Hero() {
  return (
    <>
      <Swiper
        slidesPerView={2}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/3851790/pexels-photo-3851790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            </SwiperSlide>
        <SwiperSlide>
            <h2>How To Choose The Right Face Mask For Your Skin</h2>
            <h3 className="text-decoration-line: underline mt-10">READ MORE</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/4046314/pexels-photo-4046314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2>Tips For Handling Hyperpigmentation</h2>
            <h3 className="text-decoration-line: underline mt-10">READ MORE</h3>

            </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/2022421/pexels-photo-2022421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </SwiperSlide>
        <SwiperSlide>
            <h2>Top Products For Fine Lines and Wrinkles</h2>
            <h3 className="text-decoration-line: underline mt-10">READ MORE</h3>
            </SwiperSlide>
        <SwiperSlide>
            <img src="https://images.pexels.com/photos/948873/pexels-photo-948873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
