import React from "react";
import "./testimonials.css";
import Avt1 from "../../assets/AVTR1.jpg";
import Avt2 from "../../assets/Avatar2.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: Avt1,
    name: "Hernan Abeldaño",
    review: "Back and front support in various projects of the BlockChain type",
  },
  {
    avatar: Avt2,
    name: "Looking for more mentors",
    review: ".................................",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Mentors Review</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
