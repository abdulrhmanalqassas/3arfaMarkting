import React, { useRef, useState } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import "./card.css";
export default function CardsSwiper() {
  return (
    <div id="card-swiper">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <SwiperSlide className="swiper-slide">
          <img
            // className="w-full h-full"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 2</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 3</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 4</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 5</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 6</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 7</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 8</div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div>Slide 9</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
