import React from "react";
import { Button } from "antd";
import "./../styles/css/main.css";
import { Row, Col } from "antd";
import {
    CodeOutlined,
    MobileOutlined,
    CloudServerOutlined,
} from "@ant-design/icons";
import {
    TeamOutlined,
    HeartOutlined,
    BulbOutlined,
} from "@ant-design/icons";

const Home = () => {
    return (
        <div className="home-wrapper">
            {/* === Hero Section === */}
            <section className="hero-modern" data-aos="fade-up">
                <div className="hero-content">
                    <h1 className="animated-heading">
                        Empowering Ideas<br />
                        <span className="highlight">
                            {'Building Digital Futures'.split('').map((char, index) => (
                                <span key={index} className="letter">
                                    {char === ' ' ? '\u00A0' : char}
                                </span>
                            ))}
                        </span>

                    </h1>
                    <p className="hero-subtitle">
                        We blend creativity and technology to build next-gen web experiences.
                    </p>
                    <Button type="primary" size="large" href="/contact">
                        Let's Talk
                    </Button>
                </div>
                <div className="hero-visual">
                    <img src="/assets/hero-illustration.svg" alt="Development Illustration" />
                </div>
            </section>

            {/* // src/pages/Home.jsx (inside return, after Hero) */}
            <section className="home-container">
                <h2 className="section-title">Our Services</h2>
                <Row gutter={[24, 24]} justify="center">
                    <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="100">
                        <div className="service-card">
                            <CodeOutlined className="service-icon" />
                            <h3>Web Development</h3>
                            <p>Modern and responsive websites tailored to your business needs.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="200">
                        <div className="service-card">
                            <MobileOutlined className="service-icon" />
                            <h3>Mobile Solutions</h3>
                            <p>Cross-platform mobile apps with intuitive UI and smooth performance.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} data-aos="fade-up" data-aos-delay="300">
                        <div className="service-card">
                            <CloudServerOutlined className="service-icon" />
                            <h3>Backend & APIs</h3>
                            <p>Robust backend systems and RESTful APIs using modern frameworks.</p>
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
                            <p>We are a skilled and passionate team focused on delivering quality.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
                        <div className="why-card">
                            <HeartOutlined className="why-icon" />
                            <h3>Client-Centric</h3>
                            <p>Your success is our mission — we prioritize your goals.</p>
                        </div>
                    </Col>
                    <Col xs={24} sm={12} md={8} data-aos="zoom-in" data-aos-delay="100">
                        <div className="why-card">
                            <BulbOutlined className="why-icon" />
                            <h3>Innovative Solutions</h3>
                            <p>We use the latest technologies to create future-ready solutions.</p>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* CTA */}
            <section className="cta-banner" data-aos="fade-up">
                <div className="cta-content">
                    <h2>Ready to elevate your digital presence?</h2>
                    <p>Let MSR DevXpert transform your ideas into powerful solutions.</p>
                    <Button type="primary" size="large" shape="round">
                        Contact Us
                    </Button>
                </div>
            </section>


        </div>
    );
};

export default Home;
