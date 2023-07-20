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
      "Project developed on the server side where data is processed, interactions with a database are made, and services and functionalities are provided through an API for the client side to use. I have used TypeScript, a statically-typed programming language that allowed me to detect and prevent errors at compile time. To build the API, I have used Express, a fast and flexible web framework for Node.js, simplifying the creation of routes, handling requests and responses, and implementing middleware to add additional functionalities to the application. For interaction with a MongoDB database, I have utilized the Mongoose library, which facilitated schema definition, model creation, and execution of query and data manipulation operations in the database. Additionally, I have used Axios, a promise-based HTTP library, to make requests to other external services and APIs from the backend, such as the 'https://cardano-mainnet.blockfrost.io/api/v0/pools/' API. I have also utilized other libraries and tools, such as Cors to enable cross-origin resource sharing, Node Cache for data caching, Node-localstorage for server-side data persistence, and Nodemon for facilitating automatic server restart during development.",
    github: "https://github.com/GasFeDev/dashboards-be-docker",
    demo: "https://dashboards-be-docker.onrender.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "dashboards-fe-docker",
    subtitle:
      "Project developed in JavaScript with React, along with TypeScript, a statically typed programming language that allowed me to detect and prevent errors at compile-time. For the user interface design, I used Ant Design, a component library that provides a comprehensive set of well-designed and customizable UI elements. As for state management, I used TypeScript along with React Context or Redux to efficiently handle the global state of the application, making it easier to maintain and manipulate data in the user interface. For data visualization and creating interactive charts, I utilized Recharts, a React-based charting library. Additionally, I used libraries like Axios for making HTTP requests to facilitate communication with the server, and Day.js or Moment.js for handling and manipulating dates. Similar to the cases of dashboards-be and dashboards-fe, I created and configured Docker containers for both local and production environments.",
    github: "https://github.com/GasFeDev/dashboards-fe-docker",
    demo: "https://dashboards-fe-docker.onrender.com/",
  },
  {
    id: 3,
    image: IMG5,
    title: "dashboards-fe+dashboards-be-Production",
    subtitle:
      "For both projects, I used Dockerfile and Nginx for deploying my applications on the Render.com platform. I utilized Docker to build container images, allowing me to efficiently and reproducibly package my frontend and backend applications. For my frontend application, I used a Dockerfile where I configured a Node.js environment and performed the build of the static assets. Afterwards, I utilized a lightweight Nginx image to serve these static assets. I configured an nginx.conf file where I defined the location of the static files and set up a proxy route to redirect requests to the backend server. For my backend application, I also used a Dockerfile with a Node.js image. I configured dependencies and exposed the necessary ports for Render.com to correctly route traffic. Once I had the images of my applications built, I deployed them on Render.com as two separate deployments. This allowed me to have a URL for my frontend application (https://dashboards-fe-docker.onrender.com/) and another one for my backend application (https://dashboards-be-docker.onrender.com/). Throughout the entire deployment process, I applied my skills in dependency management, Nginx configuration, port exposure, and utilized Render.com as the deployment platform.",
    github: "https://github.com/GasFeDev/dashboards-fe-docker",
    demo: "https://dashboards-fe-docker.onrender.com/",
  },
  {
    id: 4,
    image: IMG4,
    title: "dashboards-fe+dashboards-be-Local",
    subtitle:
      "For both projects, I have applied knowledge and skills to create and configure Docker containers in a local environment. I have used Docker to implement a container architecture, allowing me to efficiently isolate and deploy components of my application. For container creation, I have used Dockerfile to define the images and used the sudo docker build command to build the necessary images. I have also leveraged Docker's ability to create networks and establish communication between containers. I have configured a Docker network and linked the containers using that network, enabling seamless communication between them. For persistent data storage, I have utilized Docker volumes, allowing me to maintain data even if the containers were removed or restarted. This was particularly useful when working with the MongoDB container, where I used volumes to persist the database data.",
  },
  {
    id: 5,
    image: IMG1,
    title: "frontend-ispo",
    subtitle:
      "Project developed in JavaScript with React, utilizing the styling and design capabilities of the Bootstrap CSS framework to achieve a modern and responsive visual appearance in my application. Additionally, the project involves interaction with the Ethereum network and smart contracts using the Ethers library, allowing for reading contract states, sending transactions, and making specific function calls. Furthermore, to further enhance the user experience and create interfaces with rich animations and transitions, I have utilized RainbowKit and Wagmi. These libraries have been instrumental in achieving attractive and seamless interaction with smart contracts.",
    github: "https://github.com/GasFeDev/frontend-gasfedev-stake",
    demo: "https://frontend-gasfedev-stake.onrender.com/",
  },
  {
    id: 6,
    image: IMG12,
    title: "FrontPanel",
    subtitle:
      "Development project of a protocol based on React, where I utilized Next.js, a React framework, to build a fast and scalable web application. For styling management, I employed libraries like Emotion and Styled Components. These libraries allowed me to apply styles to components using CSS in JavaScript, facilitating the creation of an attractive and customized user interface. To design the user interface and visual components, I made use of MUI (Material-UI), a component library based on Material Design. MUI provides a wide range of pre-defined components and aesthetically pleasing styles to create a modern and appealing user interface.",
    github: "https://github.com/GasFeDev/FrontPanel",
    demo: "https://gasfedev-frontpanel.vercel.app/",
  },
  {
    id: 7,
    image: IMG15,
    title: "api-Graphql-ApolloServer",
    subtitle:
      "Project of developing an API, where I have applied a variety of knowledge and technologies to build a robust and scalable API. I used TypeScript, a statically-typed programming language, for the development, enabling me to detect and prevent errors at compile time. For the API development, I utilized Express, a web application framework for Node.js, which provided a simple and flexible approach to construct the API infrastructure. To create GraphQL servers, I employed Apollo Server, a GraphQL development platform. With Apollo Server, I defined and executed GraphQL queries and mutations, while also validating and resolving client requests. For interacting with databases, I used Dgraph, a distributed and highly scalable database. Utilizing Dgraph and related libraries like dgraph-js and dgraph-js-http, I effectively performed queries and mutations on the database. Additionally, I made use of Axios to handle HTTP requests and responses seamlessly. I also utilized Web3 and web3-providers-http to interact with the Ethereum network and smart contracts. As for development tools, I employed Nodemon to automatically restart the server during development, TypeScript for code compilation, and ESLint and Prettier to maintain clean and consistent code.",
    github: "https://github.com/GasFeDev/api-Graphql-ApolloServer",
  },
  {
    id: 8,
    image: IMG8,
    title: "CRUD-AWS",
    subtitle:
      "Project for developing a CRUD application (Create, Read, Update, Delete), where I applied a variety of knowledge and technologies to create an interactive and functional user interface. I used React and Bootstrap for the design and appearance of the application. For form management and data interaction, I utilized React Bootstrap, a library that integrates Bootstrap with React. This allowed me to use pre-defined form components and efficiently handle events and data changes. To display icons, I used the React Icons library, and I also leveraged the SweetAlert and SweetAlert2 libraries to easily and attractively display custom pop-up messages and modals in the application. Furthermore, I integrated the functionality of a webcam using React Webcam, enabling users to capture images. Lastly, for state management and communication with an API, I utilized the useState and useEffect hooks provided by React. These hooks allowed me to store and update states in the application, as well as make HTTP requests to retrieve and update data. In this project, data creation, storage, updating, and deletion were achieved through HTTP requests using the GET and PUT methods to the 'https://528676oyjb.execute-api.us-east-1.amazonaws.com' URL on Amazon, where management data tables were previously created in DynamoDB, and endpoints were set up through Amazon API Gateway to facilitate communication with the requests.",
    github: "https://github.com/GasFeDev/CRUD-AWS",
    demo: "https://crud-aws.vercel.app/",
  },
  {
    id: 9,
    image: IMG13,
    title: "FrontDeploySmartContract",
    subtitle:
      "Project developed in Next.js, a React framework, which provides advanced functionalities such as server-side rendering and static page generation, enhancing the efficiency and performance of my application. For user interface styling and design, I used the UI libraries MUI (formerly known as Material-UI) and RainbowKit. MUI offered predefined components and styles based on the Material Design language, while RainbowKit allowed me to create user interfaces with rich experiences, animations, and transitions. For form validation, I employed Formik and Yup. Formik simplified the management of complex forms by providing a set of utilities and functions for state control and form field validation. On the other hand, Yup enabled me to define flexible validation schemas and perform precise data validations. For state management and interaction with contracts, I utilized the libraries React Hook Form and Ethers. React Hook Form simplified form handling with a hooks-based approach for state management and form validation. Ethers, on the other hand, facilitated interaction (with the help of RainbowKit) with smart contracts on the Ethereum network, allowing me to read contract states and perform transactions. Additionally, I employed other libraries and tools such as Moment.js for date and time handling, Styled Components and Emotion for styling and component manipulation, React Toastify for displaying pop-up notifications, and ESLint to maintain code quality and ensure best development practices.",
    github: "https://github.com/GasFeDev/FrontDeploySmartContract",
    demo: "https://gasfedev-deployreactor.vercel.app/",
  },
  {
    id: 10,
    image: IMG6,
    title: "snapshot",
    subtitle:
      "Project developed on the server-side where data is processed, interactions with a database are performed, and services and functionalities are provided through an API. I have used TypeScript as the programming language to leverage its static typing and prevent errors at compile time. For server development and API creation, I utilized Express, a fast and flexible web framework for Node.js, enabling easy and efficient handling of routes, HTTP requests, and responses. To interact with MongoDB databases, I used Mongoose to define and model data schemas, perform queries, and manipulate documents in the database. For making HTTP requests to other APIs, I employed Axios, in this case, to send requests to the 'https://cardano-mainnet.blockfrost.io/api/v0' API. Additionally, I utilized Winston and 'winston-transport' for log management and detailed logging of application activities, allowing for event and error tracking on the server. Similar to the cases of dashboards-be and dashboards-fe, I created and configured Docker containers both for local development and production environments.",
    github: "https://github.com/GasFeDev/gasfedev-snapshot",
    demo: "https://gasfedev-snapshot.onrender.com/",
  },
  {
    id: 11,
    image: IMG7,
    title: "chatPDF",
    subtitle:
      "Project Description: Web Application Development using React. For the design and styling of the application, I have utilized the Material-UI framework, specifically the @mui/material package, which provides a set of predefined components and styles to create a modern and attractive user interface. I have also used @emotion/react and @emotion/styled for managing styles with CSS in JS, allowing me to apply styles more efficiently and modularly. Regarding communication with cloud services, I have used the aws-sdk and @aws-sdk/client-s3 libraries to interact with the AWS S3 cloud storage service. These libraries have provided me with methods to perform operations such as uploading, downloading, and deleting files in S3. For making HTTP requests to API servers, I have utilized the Axios library to send requests to the chatGPT API. In handling PDF files, I have employed the pdf-lib and react-pdf libraries, which have allowed me to create, modify, and view PDF files within the application.",
    github: "https://github.com/GasFeDev/ChatPDF",
    demo: "https://chat-pdf.vercel.app/",
  },
  {
    id: 12,
    image: IMG14,
    title: "PortfolioWebSite",
    subtitle:
      "Project developed in React, to style and add icons to my website, I have used the React Icons library. This library offers a wide range of predefined icons that can be easily used in the user interface components. For sending emails from the website, I have utilized the EmailJS and emailjs-com libraries. These libraries provide functionalities to send emails directly from the browser using third-party services, which facilitated the implementation of the contact functionality on my website. Additionally, I have used the Swiper library to create interactive slideshow presentations and image carousels on my website. Swiper offers a wide range of customization options and transition effects, allowing me to showcase my work attractively and dynamically.",
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
      "Project developed using a combination of HTML, CSS, and JavaScript along with jQuery and unicons libraries to create an attractive and functional webpage. I have structured the HTML document using appropriate tags, configured meta tags for character set and initial page scale. I have linked custom CSS files and an external icon library. Additionally, I have utilized JavaScript to provide additional functionality such as DOM manipulation and event handling.",
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
