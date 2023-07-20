import React, { useRef, useState } from "react";
import "./testimonials.css";
import Avt1 from "../../assets/TituloIngIndustrial1.png";
import Avt2 from "../../assets/TituloIngIndustrial2.png";
import Avt3 from "../../assets/Argentina Programa1.jpeg";
import Avt4 from "../../assets/Argentina Programa2.jpeg";
import Avt5 from "../../assets/DesarrolloDeAplicacionesMoviles.png";
import Modal from "react-modal";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const data = [
  {
    avatar: Avt1,
    name: "Title: Industrial Engineer",
    review: "Universidad Técnologica Nacional - Facultad Regional San Rafael",
  },
  {
    avatar: Avt2,
    name: "Title: Industrial Engineer",
    review: "Universidad Técnologica Nacional - Facultad Regional San Rafael",
  },
  {
    avatar: Avt3,
    name: "Title: Argentina Programa 4.0",
    review: "First Steps in Frontend Development",
  },
  {
    avatar: Avt4,
    name: "Title: Argentina Programa 4.0",
    review: "First Steps in Frontend Development",
  },
  {
    avatar: Avt5,
    name: "Title: Argentina Programa 4.0",
    review: "Currently attending the course 'Mobile Application Development'",
  },
];

const Diplomas = () => {
  const swiperRef = useRef(null);

  // Estado para controlar la apertura y cierre del modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Estado para almacenar la URL de la imagen seleccionada en el modal
  const [selectedImage, setSelectedImage] = useState(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  // Función para abrir el modal y mostrar la imagen ampliada
  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <section id="testimonials">
      <h5>Some certificates</h5>
      <h2>Diplomas</h2>

      <Swiper
        ref={swiperRef}
        className="container testimonials__container"
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img
                  src={avatar}
                  alt="Avatar"
                  onClick={() => openModal(avatar)}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Imagen Ampliada"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          },
          content: {
            position: "relative",
            top: "auto",
            left: "auto",
            right: "auto",
            bottom: "auto",
            padding: "20px",
            border: "none",
            borderRadius: "8px",
            maxWidth: "90%",
            maxHeight: "90%",
            backgroundColor: "transparent",
          },
        }}
      >
        {selectedImage && (
          <img
            src={selectedImage}
            alt="Imagen Ampliada"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        )}
        <button onClick={closeModal}>Cerrar</button>
      </Modal>
    </section>
  );
};

export default Diplomas;
