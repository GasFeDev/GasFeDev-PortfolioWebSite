import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/frontend-ispo.png";
import IMG2 from "../../assets/dashboards-fe-docker.png";
import IMG3 from "../../assets/dashboards-be-docker.png";
import IMG4 from "../../assets/dashboards-fe + dashboards-be - Local.png";
import IMG5 from "../../assets/dashboards-fe-docker.png";
import IMG6 from "../../assets/snapshot.png";
import IMG7 from "../../assets/CHATpdf.png";
import IMG8 from "../../assets/CRUD-AWS.png";
import IMG9 from "../../assets/ReservasColas.png";
import IMG10 from "../../assets/PantallaMultiRedes.png";
import IMG11 from "../../assets/CurriculumVitae.png";
import IMG12 from "../../assets/FrontPanel.png";
import IMG13 from "../../assets/FrontDeploySmartContract.png";
import IMG14 from "../../assets/PortfolioWebSite.png";
import IMG15 from "../../assets/api-Graphql-ApolloServer.jpg";

const data = [
  {
    id: 1,
    image: IMG3,
    title: "dashboards-be-docker",
    subtitle:
      "Project developed in TypeScript on the server-side, where data is processed, interactions with a database are performed, and services and functionalities are provided through an API for client-side use.",
    github: "https://github.com/GasFeDev/dashboards-be-docker",
    demo: "https://dashboards-be-docker.onrender.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "dashboards-fe-docker",
    subtitle:
      "Project developed in JavaScript with React, along with TypeScript. For the user interface design, I used Ant Design, and for state management, TypeScript along with Redux. Recharts was used for data visualization and creating interactive charts. Additionally, libraries like Axios were used for making HTTP requests to facilitate communication with the server, and Day.js or Moment.js to handle and manipulate dates.",
    github: "https://github.com/GasFeDev/dashboards-fe-docker",
    demo: "https://dashboards-fe-docker.onrender.com/",
  },
  {
    id: 3,
    image: IMG5,
    title: "dashboards-fe+dashboards-be-Production",
    subtitle:
      "For both projects, I used Dockerfile and Nginx to deploy my applications on the Render.com platform. Docker was used to create container images. Subsequently, a lightweight Nginx image was used to serve these static assets. I configured an nginx.conf file, defining the location of the static files and setting up a proxy route to redirect requests to the backend server.",
    github: "https://github.com/GasFeDev/dashboards-fe-docker",
    demo: "https://dashboards-fe-docker.onrender.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "dashboards-fe+dashboards-be-Local",
    subtitle:
      "For both projects, I created and configured Docker containers in a local environment. Docker was used to implement a container architecture. I also took advantage of Docker's ability to create networks and establish communication between containers. I configured a Docker network and linked the containers using that network, allowing smooth communication between them.",
  },
  {
    id: 5,
    image: IMG1,
    title: "frontend-ispo",
    subtitle:
      "Project developed in JavaScript with React, using Bootstrap CSS. The project involves interaction with the Ethereum network and smart contracts using the Ethers library. Additionally, RainbowKit and Wagmi were used. These libraries have been fundamental in achieving an engaging and seamless interaction with the smart contracts.",
    github: "https://github.com/GasFeDev/frontend-gasfedev-stake",
    demo: "https://frontend-gasfedev-stake.onrender.com/",
  },
  {
    id: 6,
    image: IMG12,
    title: "FrontPanel",
    subtitle:
      "Project developing a protocol based on React, using Next.js. For styling management, I used libraries like Emotion and Styled Components. Material-UI was used to design the user interface and visual components.",
    github: "https://github.com/GasFeDev/FrontPanel",
    demo: "https://gasfedev-frontpanel.vercel.app/",
  },
  {
    id: 7,
    image: IMG15,
    title: "api-Graphql-ApolloServer",
    subtitle:
      "Project developing an API using TypeScript. For API development, I used Express, and for creating GraphQL servers, Apollo Server was employed—a GraphQL development platform. Dgraph was used to interact with databases, and Axios was utilized for handling HTTP requests and responses. Web3 and web3-providers-http were also used to interact with the Ethereum network and smart contracts.",
    github: "https://github.com/GasFeDev/api-Graphql-ApolloServer",
  },
  {
    id: 8,
    image: IMG8,
    title: "CRUD-AWS",
    subtitle:
      "I used React and Bootstrap for the application's design and appearance. React Bootstrap was used for form management and data interaction. I integrated webcam functionality using React Webcam, enabling users to capture images. In this project, data creation, storage, updating, and deletion were achieved through HTTP requests using the GET and PUT methods to an Amazon URL, where management data tables were previously created in DynamoDB, and endpoints were configured through Amazon API Gateway for facilitating communication with the requests.",
    github: "https://github.com/GasFeDev/CRUD-AWS",
    demo: "https://crud-aws.vercel.app/",
  },
  {
    id: 9,
    image: IMG13,
    title: "FrontDeploySmartContract",
    subtitle:
      "Project developed in Next.js. For the user interface design and styling, I used the MUI and RainbowKit UI libraries. For state management and interaction with smart contracts on the Ethereum network, I used React Hook Form and Ethers libraries.",
    github: "https://github.com/GasFeDev/FrontDeploySmartContract",
    demo: "https://gasfedev-deployreactor.vercel.app/",
  },
  {
    id: 10,
    image: IMG6,
    title: "snapshot",
    subtitle:
      "Project developed on the server-side, where data is processed, interactions with a database are performed, and services and functionalities are provided through an API. TypeScript was used as the programming language. For server development and creating the API, I used Express. Mongoose was employed to interact with MongoDB databases. Axios was used to make HTTP requests to other APIs. Similar to the cases of dashboards-be and dashboards-fe, I created and configured Docker containers for both local development and production environments.",
    github: "https://github.com/GasFeDev/gasfedev-snapshot",
    demo: "https://gasfedev-snapshot.onrender.com/",
  },
  {
    id: 11,
    image: IMG7,
    title: "chatPDF",
    subtitle:
      "Development of a Web Application using React. For the application's design and style, I used the Material-UI framework. I also used @emotion/react and @emotion/styled to manage styles with CSS in JS. As for communication with cloud services, I utilized the aws-sdk and @aws-sdk/client-s3 libraries to interact with AWS S3 cloud storage service. Axios was used to send requests to the chatGPT API.",
    github: "https://github.com/GasFeDev/ChatPDF",
    demo: "https://chat-pdf.vercel.app/",
  },
  {
    id: 12,
    image: IMG14,
    title: "PortfolioWebSite",
    subtitle:
      "Project developed in React. For adding style and icons to my website, I used the React Icons library. To send emails from the website, I used the EmailJS and emailjs-com libraries.",
    github: "https://github.com/GasFeDev/GasFeDev-PortfolioWebSite",
    demo: "https://gasfedev-portfoliowebsite.vercel.app/",
  },
  {
    id: 13,
    image: IMG10,
    title: "PantallaMultiRedes",
    subtitle:
      "Project developed in JavaScript with React, utilizing the styling and design capabilities of Ant Design, a user interface framework based on React that provided a wide range of pre-defined components and aesthetic styles, allowing me to build a modern and attractive user interface.",
    github: "https://github.com/GasFeDev/PantallaMultiRedes",
    demo: "https://pantalla-multi-redes.vercel.app/",
  },
  {
    id: 14,
    image: IMG11,
    title: "CurriculumVitae",
    subtitle:
      "Project developed using a combination of HTML, CSS, and JavaScript along with jQuery and unicons libraries to create an attractive and functional webpage. The HTML document was structured using appropriate tags, configured meta tags for character set and initial page scale. Custom CSS files and an external icon library were linked. Additionally, JavaScript was utilized to provide additional functionality such as DOM manipulation and event handling.",
    github: "https://github.com/GasFeDev/CurriculumVitae",
    demo: "https://gasfedev.github.io/CurriculumVitae/",
  },
  {
    id: 15,
    image: IMG9,
    title: "ReservasColas",
    subtitle:
      "Project developed in JavaScript with React, featuring interaction with the Ethereum network and smart contracts using the Ethers library, allowing to read the contract's state, send transactions, and make specific function calls. Additionally, to further enhance the user experience and create interfaces rich in animations and transitions, I have utilized RainbowKit and Wagmi. These libraries have been crucial in achieving an engaging and seamless interaction with the smart contracts.",
    github: "https://github.com/GasFeDev/ReservasColas",
    demo: "https://reservas-colas.vercel.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, subtitle, github, demo }) => {
          const showLinks = github || demo;

          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small>{subtitle}</small>
              <div className="portfolio__item-cta">
                {showLinks && (
                  <>
                    <a
                      href={github}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    <a
                      href={demo}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Website
                    </a>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
