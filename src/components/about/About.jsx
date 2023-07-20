import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { FaAward } from "react-icons/fa";
import { VscFolderActive } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__column">
          <div className="about__me">
            <div className="about__me-image">
              <img src={ME} alt="About Image" />
            </div>
          </div>
        </div>
        <div className="about__column">
          <div className="about__contect">
            <div className="about__cards">
              <article className="about__card">
                <FaAward className="about__icon" />
                <h5>Experience</h5>
                <small>
                  As a freelancer developer, I have applied my skills in web
                  development, blockchain integration, database management, API
                  creation, deployment of applications in Docker containers, and
                  utilization of styling and design libraries. I have worked on
                  both frontend and backend projects, utilizing a variety of
                  technologies and tools to deliver effective and high-quality
                  solutions to my clients.
                </small>
              </article>
              <article className="about__card">
                <VscFolderActive className="about__icon" />
                <h5>Projects</h5>
                <div className="projects__list">
                  <small>frontend-ispo</small>
                  <small>dashboards-fe</small>
                  <small>dashboards-be</small>
                  <small>snapshot</small>
                  <small>chatPDF</small>
                  <small>CRUD-AWS</small>
                  <small>CRUD</small>
                  <small>ReservasColas</small>
                  <small>PantallaMultiRedes</small>
                  <small>CurriculumVitae</small>
                  <small>FrontPanel</small>
                  <small>FrontDeploySmartContract</small>
                  <small>GasFeDev-PortfolioWebSite</small>
                  <small>api-Graphql-ApolloServer</small>
                  <small>Squarespace Templates</small>
                </div>
              </article>
            </div>
            <p>
              Summary: An Argentine national currently residing in Malargüe,
              Mendoza (Argentina). Freelance developer with skills in web
              development, blockchain integration, database management, API
              creation, and deploying applications using Docker containers.
              Proficient in both frontend and backend development, leveraging a
              wide range of technologies and tools. Committed to professional
              growth and continuous learning, taking my first steps in the world
              of programming in 2021. Hold a degree in Industrial Engineering
              from the National Technological University (2017). Ever since I
              entered the world of Programming, I felt immense satisfaction with
              each step I took and with every knowledge I acquired. That's why,
              regardless of the learning and experience gained through my
              Degree, my short-term or medium-term goal is to earn one hundred
              percent of my income as a Developer, and above all, to work the
              rest of my days in something that I am passionate about and brings
              me happiness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
