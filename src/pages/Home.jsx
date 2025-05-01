import React from "react";
import { Button } from "antd";
import logo from "../styles/images/MSR_logo-removebg-preview.png";
import "./../styles/css/main.css";
import { Row, Col } from "antd";
import {
  CodeOutlined,
  MobileOutlined,
  CloudServerOutlined,
} from "@ant-design/icons";
import { TeamOutlined, HeartOutlined, BulbOutlined } from "@ant-design/icons";
import { useEffect } from "react";
import TagCloud from "TagCloud";
import { Link } from "react-router-dom";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "JavaScript",
      "React",
      "Node.js",
      "HTML5",
      "CSS3",
      "MongoDB",
      "Express",
      "Bootstrap",
      "Tailwind",
      "Firebase",
      "MySQL",
      "Git",
      "Docker",
      "Spring Boot",
      "JAVA",
      "AWS",
    ];
    const options = {
      radius: 180,
      maxSpeed: "normal",
      initSpeed: "fast",
      keep: true,
    };

    // ✅ Clear existing children before reinitializing
    const existing = document.querySelector(container);
    if (existing) {
      existing.innerHTML = "";
    }

    TagCloud(container, texts, options);

    const colors = [
      "#008b8b",
      "#7a4210",
      "#304520",
      "#6e6009",
      "#FF69B4",
      "#1E90FF",
      "#FF4500",
      "#32CD32",
      "#8A2BE2",
      "#FF1493",
      "#096c6e",
      "#FF8C00",
      "#20B2AA",
    ];

    const tagItems = document.querySelectorAll(".tagcloud--item");
    tagItems.forEach((item, index) => {
      item.style.color = colors[index % colors.length];
    });
  }, []);

  return (
    <div className="home-wrapper">
      {/* === Hero Section === */}
      {/* === Hero Section === */}
      <section className="hero-modern" data-aos="fade-up">
        <div className="hero-row">
          {/* Left Text Section */}
          <div className="hero-content">
            <h1 className="animated-heading">
              Empowering Ideas
              <br />
              <span className="highlight">
                {"Building Digital Futures".split("").map((char, index) => (
                  <span key={index} className="letter">
                    {char === " " ? "\u00A0" : char}
                  </span>
                ))}
              </span>
            </h1>
            <p className="hero-subtitle">
              We blend creativity and technology to build next-gen web
              experiences.
            </p>

            <Button type="primary" size="large" href="/contact">
              Let’s Talk →
            </Button>
          </div>

          {/* Right Cloud Section */}
          <div className="hero-cloud text-end">
            <span className="tagcloud"></span>
          </div>
        </div>
      </section>

      {/* // src/pages/Home.jsx (inside return, after Hero) */}
      <section className="home-container">
        <h2 className="section-title">Our Services</h2>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="100">
            <div className="service-card web-dev">
              <CodeOutlined className="service-icon" />
              <h3>Web Development</h3>
              <p>
              We design and develop custom website development in India, SEO-optimized websites tailored to your brand. From landing pages to dynamic web platforms, we deliver responsive, fast, and scalable solutions.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="200">
            <div className="service-card mob-dev" >
              <MobileOutlined className="service-icon" />
              <h3>Mobile Solutions</h3>
              <p>
              Mobile app developers for startups.Launch cross-platform mobile apps that offer a seamless user experience. We build high-performance applications for both Android and iOS that meet your business goals.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="300">
            <div className="service-card backend-dev">
              <CloudServerOutlined className="service-icon" />
              <h3>Backend & APIs</h3>
              <p>
              Power your frontend with secure, scalable backend systems. We specialize in creating RESTful APIs and robust server-side logic using Node.js, Spring Boot, and more.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* Why choose us */}
      <section className="why-us">
        <h2 className="section-title">Why Choose Us</h2>
        <Row gutter={[24, 24]} justify="center">
          <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
            <div className="why-card">
              <TeamOutlined className="why-icon" />
              <h3>Expert Team</h3>
              <p>
              Our team of experienced developers, designers, and strategists bring your digital vision to life with precision and innovation.
              </p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
            <div className="why-card">
              <HeartOutlined className="why-icon" />
              <h3>Client-Centric</h3>
              <p>We collaborate closely with you at every step, ensuring your business goals are reflected in the final product.</p>
            </div>
          </Col>
          <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
            <div className="why-card">
              <BulbOutlined className="why-icon" />
              <h3>Innovative Solutions</h3>
              <p>
              From cloud deployment to mobile optimization, we use cutting-edge tools to future-proof your digital presence.
              </p>
            </div>
          </Col>
        </Row>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-aos="fade-up">
        <div className="cta-content">
          <h2>Ready to elevate your digital presence?</h2>
          <p>Partner with MSR DevXpert to build solutions that scale with your growth.</p>
          <Button type="primary" size="large" shape="round" href="/contact">
          Contact Us Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
