import React from "react";
import "./footer.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        FEDERICO ABELDAÑO
      </a>

      <ul className="permalinks">
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Competences</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Diplomas</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://github.com/GasFeDev?tab=repositories"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/federico-abelda%C3%B1o-0b0429250/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Federico Abeldaño. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
