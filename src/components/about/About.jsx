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
                  I have worked on the creation and implementation of smart
                  contracts, integrating them into Web3 projects. My experience
                  includes the design and development of decentralized
                  applications (dApps), database management, API creation and
                  consumption, and the implementation of solutions. I have
                  mastered both frontend and backend technologies, leveraging
                  design libraries and modern tools to deliver robust, scalable,
                  and high-quality solutions. My approach combines advanced
                  technical skills and in-depth knowledge of blockchain
                  architectures for effective project management. In addition to
                  my work as a Full Stack Blockchain Developer, I also serve as
                  a university professor in Blockchain Development, where I
                  share my knowledge and expertise with the next generation of
                  developers. As a professional with a background in Industrial
                  Engineering, I bring a strategic focus to process optimization
                  and efficient project management in all of my work.
                </small>
              </article>
              <article className="about__card">
                <VscFolderActive className="about__icon" />
                <h5>Web Projects</h5>
                <div className="projects__list">
                  <small>frontend-ispo</small>
                  <small>dashboards-fe</small>
                  <small>dashboards-be</small>
                  <small>snapshot</small>
                  <small>Creation of ERC20 and NFT contracts</small>
                  <small>
                    Subgraph Development and Deployment with The Graph
                  </small>
                  <small>ReservasColas</small>
                  <small>PantallaMultiRedes</small>
                  <small>Thirdweb Smart Contracts:</small>
                  <small>FrontPanel</small>
                  <small>FrontDeploySmartContract</small>
                  <small>Uniswap</small>
                  <small>api-Graphql-ApolloServer</small>
                  <small>Squarespace Templates</small>
                  <small>
                    Upgradeable Smart Contracts, DAO, DeFi, Airdrop and
                    Decentralized Stablecoin
                  </small>
                </div>
              </article>
            </div>
            <p>
              Summary: I am a professional in Industrial Engineering, graduated
              from the National Technological University (2017), with a solid
              foundation in process optimization and project management. Since
              2021, I have specialized in programming and the development of
              technological solutions, gaining experience in key areas such as
              full-stack development, blockchain, smart contracts, and
              decentralized applications (dApps). My focus is centered on
              continuous learning, innovation, and constant improvement, which
              drives me to take on new challenges and grow both professionally
              and personally. I currently reside in Malargüe, Mendoza,
              Argentina, and I am committed to excellence and delivering a
              positive impact in every project I undertake.
            </p>
            <a href="#contact" className="btn btn-primary">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
