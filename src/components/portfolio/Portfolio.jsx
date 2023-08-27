import React from "react";
import "./portfolio.css";
import IMG1 from "../../asstets/portfolio1.jpg";
import IMG2 from "../../asstets/portfolio2.jpg";
import IMG3 from "../../asstets/portfolio3.jpg";
import IMG4 from "../../asstets/portfolio4.jpg";
import IMG5 from "../../asstets/portfolio5.png";
import IMG6 from "../../asstets/portfolio6.jpg";

// =============================================================================//

const data = [
  {
    id: 1,
    image: IMG1,
    title: "EDA of Zomato data set across Bengaluru City",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization",
  },
  {
    id: 2,
    image: IMG2,
    title: "Crop Prediction model using Machine Learning",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 3,
    image: IMG3,
    title: "E-commerce website of Clothings and Wearings",
    github: "https://github.com/Ganesh-Prasad01/e-commerce-site",
    demo: "https://ganesh-prasad01.github.io/e-commerce-site/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Clone of a OTT site - Inspired from Disney +Hotstar",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16955822-Maintaining-tasks-and-tracking-progress",
  },
  {
    id: 5,
    image: IMG5,
    title: "Interactive Dashboard of Reliance Digital sales using web-scrapping",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  },
  {
    id: 6,
    image: IMG6,
    title: "Library Management System of a College with Admin and user portal",
    github: "https://github.com",
    demo: "https://dribbble.com/shots/21518917-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank" rel="noreferrer">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
