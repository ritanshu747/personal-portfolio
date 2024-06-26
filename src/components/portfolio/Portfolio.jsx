import "./portfolio.css";
import IMG1 from "../../assets/Educational Website.jpg";
import IMG2 from "../../assets/RubyCode Blog Project.jpg";
import IMG4 from "../../assets/Covid-19 Project.jpg";
import React from "react";

// Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "StudyNotion",
      img: IMG1,
      description: "StudyNotion your go-to platform for streamlined online education. Enjoy seamless features like user authentication, course browsing, enrollment, and instructor tools. Crafted with React.js, Node.js, MongoDB, and Cloudinary for a seamless learning journey.",
      technologies: "MONGODB | Express.js | React.js | Node.js | Cloudinary | Razorpay | JWT | Material-UI | Redux",
      github: "https://github.com/ritanshu747/studynotions.git",
      link:"https://edtech-client-one.vercel.app/"
    },
    {
      id: 2,
      title: "AuraSKy",
      img: IMG2,
      description:
        "This weather app provides real-time weather information and forecasts. Users can check current weather conditions, view forecasts for the upcoming days, and track weather changes for different locations.",
      technologies: "HTML | CSS | JavaScript | React.js",
      link: "https://aura-sky.vercel.app/",
      github: "https://github.com/ritanshu747/AuraSky.git",
    },
     {
      id: 2,
      title: "IMAGIN-AI",
      img: IMG4,
      description:
        "This project is a clone of OpenAI's DallE model, allowing users to generate images from textual descriptions using artificial intelligence. The web application includes features such as image generation, user authentication, and admin tools for managing datasets.",
      technologies: "MONGODB | Express.js | React.js | Node.js | OpenAI API",
      link: "https://imagine-client.vercel.app/",
      github: "https://github.com/ritanshu747/Imagine-client.git",
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
