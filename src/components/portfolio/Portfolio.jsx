import "./portfolio.css";

import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";


import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "WEATHER PREDICTION APPLICATION",
      img: IMG1,
      description:
        "weather app provides real-time weather information, forecasts.",
      technologies: "Html | CSS | Javascript| React.Js ",
      link: "https://github.com/ritanshu747/WEATHER-PREDICTION-APPLICATION.git",
      github: "https://github.com/ritanshu747/WEATHER-PREDICTION-APPLICATION.git",
    },
    {
      id: 2,
      title: "DriveEasyRentals",
      img: IMG4,
      description:
        " The auto rental website provides vehicle search, reservations, secure login, and admin tools for inventory management.",
      technologies: "MONGODB | Express.js | React.js |Node.js",
      link: "https://github.com/ritanshu747/DriveEasyRentals.git",
      github: "https://github.com/ritanshu747/DriveEasyRentals.git",
    },
    {
      id: 3,
      title: "PERSONAL FINANCE MANAGER",
      img: IMG2,
      description: " Personal Finance Manager helps users track earnings, expenses, budgets, and finances, fostering financial awareness.",
      technologies: "MONGODB | Express.js | React.js |Node.js ",
      link: "https://github.com/ritanshu747/PERSONAL-FINANCE-MANAGER.git",
      github: "https://github.com/ritanshu747/PERSONAL-FINANCE-MANAGER.git",
    },
   
    
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
