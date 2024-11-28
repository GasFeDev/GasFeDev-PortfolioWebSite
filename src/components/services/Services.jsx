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
  {
    title: "Blockchain Development",
    items: [
      "Languages and Frameworks: Extensive experience in smart contract development using Solidity, with expertise in standards such as ERC20, ERC721, and governance contracts. | Proficient in Ethers.js and Web3.js, with strong skills in interacting with Ethereum networks, sending transactions, and querying smart contracts. | In-depth knowledge of OpenZeppelin libraries for secure and robust smart contract implementation. | Experienced in development environments such as Hardhat, Truffle, and Forge, with a focus on testing, contract deployment, gas optimization, and simulation.",
      "Smart Contract Development: Expertise in developing ERC20, ERC721, Stablecoins, DAOs, UUPS, and Proxies; designing and implementing smart contracts for fungible and non-fungible tokens, stablecoins, DAOs, and contracts with proxies for state-updating without loss of data. | Practical experience with DeFi platforms like Uniswap V2, creating and managing liquidity pools, performing swaps, and optimizing liquidity aggregation strategies, including the use of TWAP (Time-Weighted Average Price).",
      "DApp Development: Frontend (React): Designing and implementing interactive user interfaces for decentralized applications (DApps), including advanced functionalities for interacting with smart contracts (staking, unstaking, token visualization). | Backend (Node.js/Express): Developing backend solutions for managing real-time data queries, NFT migrations, and processing staking events on blockchain platforms. | Smart Contract Integration: Ability to integrate Ethereum smart contracts into decentralized applications (DApps) using technologies like Ethers.js and Web3.js.",
      "Backend and API: API Development with Express: Expertise in creating RESTful APIs to interact with blockchain, process events, and manage large volumes of real-time data related to liquidity pools, staking, and NFTs. | MongoDB: Implementation of scalable and efficient storage solutions for querying staking events and NFT migrations, ensuring persistence and high availability of data on decentralized platforms. | IPFS Integration: Managing decentralized metadata using IPFS, enabling efficient retrieval and visualization of NFT and other digital asset data.",
      "Data Management: NFT Data on EVM Networks: Developing backend systems to manage NFTs across different EVM networks (Ethereum, Polygon, etc.). | Query Optimization: Implementing advanced solutions to query large volumes of NFT and staking data efficiently, using filtered queries in databases like MongoDB and GraphQL.",
      "Testing: Smart Contract Testing: Using frameworks such as Hardhat and Foundry to conduct unit, integration, and security tests on smart contracts, ensuring robustness and efficiency.",
      "Gas Optimization and Arbitrage: DEX Arbitrage: Developing arbitrage strategies between decentralized exchanges (DEXs), using flash swaps and other mechanisms to profit from price differences. | Gas Optimization: Expertise in optimizing gas usage in smart contracts, ensuring more cost-effective transactions.",
      "Ethereum Networks and Blockchain: Ethereum Interaction: In-depth knowledge of how to interact with the Ethereum network, read and interpret contract states, call specific functions, and send transactions. | EVM Contract Management: Ability to deploy, update, and manage smart contracts across different EVM networks, applying principles of scalability, efficiency, and security in every implementation.",
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
          <article
            className={`service ${
              competence.title === "Blockchain Development" ? "full-width" : ""
            }`}
            key={index}
          >
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
