import React from 'react';
import { Row, Col, Card } from 'antd';
import {
  CodeOutlined,
  MobileOutlined,
  CloudServerOutlined,
  DatabaseOutlined,
  SettingOutlined,
  DeploymentUnitOutlined,
} from '@ant-design/icons';
import '../styles/css/main.css';

const services = [
  {
    icon: <CodeOutlined />,
    title: 'Web Development',
    desc: 'Modern websites using React.js, HTML, CSS, and more.',
    aos: 'fade-up',
  },
  {
    icon: <MobileOutlined />,
    title: 'Mobile App UI',
    desc: 'Beautiful and responsive mobile-first user interfaces.',
    aos: 'fade-up',
  },
  {
    icon: <CloudServerOutlined />,
    title: 'Cloud Hosting',
    desc: 'Deploy and scale your apps on modern cloud services.',
    aos: 'fade-up',
  },
  {
    icon: <DatabaseOutlined />,
    title: 'Database Design',
    desc: 'Secure and optimized database structures.',
    aos: 'fade-up',
  },
  {
    icon: <SettingOutlined />,
    title: 'Backend APIs',
    desc: 'Powerful APIs built with Spring Boot & Node.js.',
    aos: 'fade-up',
  },
  {
    icon: <DeploymentUnitOutlined />,
    title: 'Full-Stack Projects',
    desc: 'End-to-end development with frontend + backend.',
    aos: 'fade-up',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      {/* Orange Ball Background */}
      <div className="about-blob-bg"></div>

      <div className="section-heading" data-aos="fade-down">
        <h1><span>Our</span> Services</h1>
        <p>We deliver a wide range of web solutions for all your business needs.</p>
      </div>

      <Row gutter={[24, 24]}>
        {services.map((service, index) => (
          <Col xs={24} sm={12} md={8} key={index} data-aos={service.aos} data-aos-delay={index * 100}>
            <Card className="service-card-glass">
              <div className="service-icon-glow">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Services;
