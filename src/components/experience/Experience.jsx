import React from "react";
import "./experience.css";
import { BsBookmarkCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Material-UI</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Ant Design</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Recharts</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Styled Components</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Next.js</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Axios</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>MoongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Dgraph</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>AWS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Formik</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>JWT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Docker</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__blockchain">
          <h3>Blockchain Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Solidity</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Foundry</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Hardhat</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Remix IDE</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Ganache</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>IPFS</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>The Graph</h4>
                <small className="text-light">Advanced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Uniswap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Rust</h4>
                <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details">
              <BsBookmarkCheckFill className="experience__details-icon" />
              <div>
                <h4>Chainlink</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
