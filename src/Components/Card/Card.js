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
      <div className="px-7 lg:px-20 pb-10">
        <img
          src={Background}
          alt=""
          className="rounded-full w-full h-52 lg:h-96"
        />
        <h1 className="absolute top-10 left-1/3 text-xl lg:text-6xl text-white tracking-wider">
          Digital Card Details
        </h1>
      </div>
      <div className="absolute top-20 lg:top-40 grid grid-cols-1 lg:grid-cols-2 bg-white py-10 mx-10 lg:mx-36 mb-10 rounded-full shadow-2xl border-2">
        <div className="lg:w-1/2 px-2 mx-auto">
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
          <h1 className="text-4xl lg:text-6xl text-center font-bold pt-3 lg:pt-0">
            Card Title
          </h1>
          <span className="flex justify-around py-5 text-2xl font-semibold">
            <h2>
              $499{" "}
              <sub className="line-through text-red-500 text-sm">$2000</sub>
            </h2>
            <h2 className="text-lime-400">75%Off</h2>
          </span>
          <p className="tracking-widest pb-5 px-3 lg:px-0 lg:text-xl">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aperiam
            laboriosam saepe voluptatum veritatis exercitationem ad consectetur
            dolores. Necessitatibus deleniti maiores aspernatur quas. Deleniti
            quisquam commodi quasi aliquid dolor ducimus?
          </p>

          <button className="btn px-12 ml-12 lg:ml-0 lg:px-32 pt-4 lg:pt-8 pb-12 rounded-3xl text-white text-xl lg:text-2xl">
            Try This Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
