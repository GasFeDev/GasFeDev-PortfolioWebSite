import React from "react";
import "./services.css";
import { BsCheckLg } from "react-icons/bs";

const competences = [
  {
    title: "Frontend Development",
    items: [
      "Languages: JavaScript, TypeScript.",
      "Libraries and Frameworks: React, Material-UI, Ant Design, Bootstrap.",
      "Styling and Design: CSS, Emotion, Styled Components.",
      "Data Visualization: Recharts.",
      "Using Next.js as a React framework.",
    ],
  },
  {
    title: "API Development",
    items: [
      "Using Express as a framework for creating RESTful APIs.",
      "Interacting with GraphQL API: Apollo Server, GraphQL.",
      "Interacting with databases like Dgraph.",
      "Communication with External Services: Axios.",
      "Making HTTP requests with Axios",
    ],
  },
  {
    title: "Backend Development",
    items: [
      "Languages: JavaScript, TypeScript.",
      "Frameworks: Express.",
      "Databases: MongoDB, Dgraph.",
      "Communication with External Services: Axios.",
      "Form Validation: Formik, Yup.",
      "Authentication and Authorization: JWT.",
    ],
  },
  {
    title: "Blockchain Interaction",
    items: [
      "Ethereum: Proficient in interacting with the Ethereum network and developing smart contracts using Solidity.",
      "Ethereum Networks: Ability to read contract states, send transactions, and make specific function calls, demonstrating your understanding and practical application of blockchain technology.",
    ],
  },
  {
    title: "Application Deployment",
    items: [
      "Docker Containers: Dockerfile, image creation.",
      "Container Orchestration: Docker Compose.",
      "Docker Network Configuration.",
      "Using Nginx for serving applications and configuring proxies.",
    ],
  },
  {
    title: "Other Tools and Technologies",
    items: [
      "Date and Time Manipulation: Moment.js, Day.js.",
      "PDF File Manipulation: pdf-lib, react-pdf.",
      "Routing and Request Handling: React Router.",
      "State Management: React Context, Redux.",
    ],
  },
  {
    title: "Cloud Service Integration",
    items: [
      "AWS: S3, DynamoDB, Amazon API Gateway.",
      "Render.com: Application deployment.",
    ],
  },
];

const Services = () => {
  return (
    <section id="services">
      <h5>What I know</h5>
      <h2>Competences</h2>

      <div className="container services__container">
        {competences.map((competence, index) => (
          <article className="service" key={index}>
            <div className="service__head">
              <h3>{competence.title}</h3>
            </div>

            <ul className="service__list">
              {competence.items.map((item, itemIndex) => (
                <li key={itemIndex}>
                  <BsCheckLg className="service__list-icon" />
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
