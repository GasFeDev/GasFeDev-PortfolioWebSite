import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>...</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Web Site</h4>
            <h5>https://gasfedev-portfoliowebsite.vercel.app/</h5>
            <a
              href="https://gasfedev-portfoliowebsite.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Visit my Web Site
            </a>
          </article>
          <article className="contact__option">
            <MdOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>gasfedev@gmail.com</h5>
            <a href="mailto: gasfedev@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <SiMessenger className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>https://www.linkedin.com/</h5>
            <a
              href="https://www.linkedin.com/in/federico-abelda%C3%B1o-0b0429250/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsGithub className="contact__option-icon" />
            <h4>GitHub</h4>
            <h5>https://github.com/GasFeDev</h5>
            <a
              href="https://github.com/GasFeDev?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              Visit my repositories
            </a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>+542604225858</h5>
            <a
              href="https://api.whatsapp.com/send?phone+542604225858"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Contact;
