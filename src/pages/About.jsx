import React from 'react';
import { Row, Col, Card } from 'antd';
import { RocketOutlined, EyeOutlined, StarOutlined } from '@ant-design/icons';
import '../styles/css/main.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Background Blob */}
      <div className="about-blob-bg"></div>

      {/* Heading */}
      <div className="about-header" data-aos="fade-down">
        <h1><span>About</span> MSR devXpert</h1>
        <p className='section-subtitle'>
          We are a dynamic full-stack web development company delivering impactful digital solutions
          using modern technologies like React & Spring Boot.
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <Row gutter={[24, 24]} className="about-section">
        <Col xs={24} md={12} data-aos="fade-right">
          <Card className="about-card glass">
            <RocketOutlined className="about-icon" />
            <h3>Our Mission</h3>
            <p>
              Empower businesses with innovative, fast, and scalable web solutions that
              drive digital transformation.
            </p>
          </Card>
        </Col>
        <Col xs={24} md={12} data-aos="fade-left">
          <Card className="about-card glass">
            <EyeOutlined className="about-icon" />
            <h3>Our Vision</h3>
            <p>
              To be the leading tech partner for global enterprises through excellence and
              customer-first strategies.
            </p>
          </Card>
        </Col>
      </Row>

      {/* Why Choose Us */}
      <div className="why-choose" data-aos="fade-up">
        <h2><StarOutlined /> Why Choose Us</h2>
        <ul>
          <li>🚀 Expert React & Spring Boot team</li>
          <li>🤝 Personalized & scalable solutions</li>
          <li>⏱️ Fast turnaround & support</li>
          <li>💡 Innovative, creative, and reliable</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
