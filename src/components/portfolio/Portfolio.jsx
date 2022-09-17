import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/shoppingcart.jpg";
import IMG2 from "../../assets/booking.webp";
import IMG3 from "../../assets/blog.jpg";
import IMG4 from "../../assets/netflix.jpg";
import IMG5 from "../../assets/face.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "ShoppingCart",
    github: "https://github.com/GasFeDev/gfd-shoppingcart",
    demo: "https://gfd-shoppingcart.herokuapp.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "BookingApp",
    github: "https://github.com/GasFeDev/gfd-booking",
    demo: "https://gfd-booking.herokuapp.com/",
  },
  {
    id: 3,
    image: IMG3,
    title: "BlogApp",
    github: "https://github.com/GasFeDev/BlogAppFede",
    demo: "https://app-blog-fede.herokuapp.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "NetflixDemo",
    github: "https://github.com/GasFeDev/NetflixDemo",
    demo: "https://gfd-netflixdemo.herokuapp.com/",
  },
  {
    id: 5,
    image: IMG5,
    title: "FacebookDemo",
    github: "https://github.com/GasFeDev/gfd-chatapp",
    demo: "https://gfd-chatapp.herokuapp.com/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Desktop Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
