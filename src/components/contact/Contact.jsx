import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { SiMessenger } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";
import { useRef } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rbdvimj",
        "template_mgosgap",
        form.current,
        "RZewQ4uKpn4thQmWB"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            icon: "success",
            title: "Success!",
            text: "Your message has been sent successfully.",
          });
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: "There was an error sending your message.",
          });
        }
      );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
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
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            type="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
