import React, { useEffect } from "react";
import { Card, Row, Col } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/css/main.css";

const projects = [
  {
    title: "E-Commerce Website",
    description: "A full-stack e-commerce platform with product management, cart, and payment integration.",
    image: "https://source.unsplash.com/featured/?ecommerce,website"
  },
  {
    title: "HR Management System",
    description: "Streamlined HR workflows including recruitment, payroll, and employee management.",
    image: "https://source.unsplash.com/featured/?humanresources,technology"
  },
  {
    title: "Portfolio Website",
    description: "A modern personal portfolio built with React and animated with GSAP.",
    image: "https://source.unsplash.com/featured/?portfolio,webdesign"
  }
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
        <h1><span>Our</span> Projects</h1>
        <p className="section-subtitle ">
          Showcasing our creativity, technical expertise, and commitment to excellence.
        </p>

        <Row gutter={[24, 24]}>
          {projects.map((project, index) => (
            <Col xs={24} sm={12} md={8} key={index} data-aos="zoom-in">
              <Card
                hoverable
                className="project-card"
                cover={<img alt={project.title} src={project.image} />}
              >
                <Card.Meta title={project.title} description={project.description} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
     
    </section>
  );
};

export default Projects;
