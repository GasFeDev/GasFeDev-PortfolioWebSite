import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Junior Full Stack Developer</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheckLg className="service__list-icon" />
              <p>
                Combine those of the frontend and backend; developing the
                structure and web architecture, designing the interface and
                visual part, translating the design into HTML and CSS code and
                creating, managing and connecting databases.
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
