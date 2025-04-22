import React from "react";
import { Row, Col } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import "./../styles/css/main.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <Row gutter={[32, 16]} justify="space-between">
        <Col xs={24} md={8}>
          <h2 className="footer-logo">msr <span>devXpert</span></h2>
          <p className="footer-tagline">Building smarter digital experiences.</p>
        </Col>

        <Col xs={12} md={8}>
          <h3 className="footer-title">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </Col>

        <Col xs={12} md={8}>
          <h3 className="footer-title">Contact</h3>
          <p><EnvironmentOutlined /> Kolkata, India</p>
          <p><PhoneOutlined /> +91 9876543210</p>
          <p><MailOutlined /> info@msrdevxpert.com</p>
        </Col>
      </Row>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} msr devXpert. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
