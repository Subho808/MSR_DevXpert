import React, { useEffect } from "react";
import { Card, Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/css/main.css";

const projects = [
  {
    title: "Vision Green RKR",
    description:
      "A clean, modern website for Vision Green RKR, showcasing their eco-friendly waste management solutions and community initiatives.",
    image: require("../styles/images/RKR.png"), // Corrected path for local image
    link: "https://visiongreenrkr.com/",
  },
  {
    title: "Oxynet Telecommunications Pvt. Ltd.",
    description:
      "A professional broadband service website with dynamic service plans, contact integration, and customer-first UI/UX.",
    image: require("../styles/images/oxyHome.png"), // Replace with the correct local image file name
    link: "https://oxynet.co.in/",
  },
];

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="projects-section">
      {/* Unique Background Blob */}
      {/* Background Blob */}
      <div className="about-blob-bg"></div>

      <div className="container" data-aos="fade-up">
        {/* <h1 className="section-heading">Our Projects</h1> */}
        <h1>
          <span>Our</span> Projects
        </h1>
        <p className="section-subtitle">
          Explore the impactful digital solutions we've crafted for our valued
          clients.
        </p>

        <Row className="card" gutter={[24, 24]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index} data-aos="zoom-in">
  <a href={project.link} target="_blank" rel="noopener noreferrer">
    <div className="custom-project-card">
      <img src={project.image} alt={project.title} className="project-img-top" />
      <Card hoverable className="project-card">
        <Card.Meta
          title={project.title}
          description={project.description}
        />
      </Card>
    </div>
  </a>
</Col>

          ))}
        </Row>
      </div>
    </section>
  );
};

export default Projects;
