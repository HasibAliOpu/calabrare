import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

import Background from "../../assets/Background.jpg";
import Page1 from "../../assets/Page1.jpg";
import Page2 from "../../assets/Page2.jpg";
import Page3 from "../../assets/Page3.jpg";
const Card = () => {
  return (
    <div className="relative h-screen">
      <div className="px-20 pb-10">
        <img src={Background} alt="" className="rounded-full w-full h-96" />
        <h1 className="absolute top-10 left-1/3 text-6xl text-white tracking-wider">
          Digital Card Details
        </h1>
      </div>
      <div className="absolute top-40 grid grid-cols-2 bg-white py-10 mx-36 mb-10 rounded-full shadow-2xl border-2">
        <div className="w-1/2 mx-auto">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={Page1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Page2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Page3} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="m-auto font-bold">
          <h1 className="text-6xl text-center font-bold">Card Title</h1>
          <span className="flex justify-around py-5 text-2xl font-semibold">
            <h2>
              $499{" "}
              <sub className="line-through text-red-500 text-sm">$2000</sub>
            </h2>
            <h2 className="text-lime-400">75%Off</h2>
          </span>
          <p className="tracking-widest pb-5 text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aperiam
            laboriosam saepe voluptatum veritatis exercitationem ad consectetur
            dolores. Necessitatibus deleniti maiores aspernatur quas. Deleniti
            quisquam commodi quasi aliquid dolor ducimus?
          </p>

          <button className="btn px-32 pt-8 pb-12 rounded-3xl text-white text-2xl">
            Try This Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
