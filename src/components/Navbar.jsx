import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Drawer, Button, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from "../styles/images/MSR_logo-removebg-preview.png"
const Navbar = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => setVisible(true);
    const onClose = () => setVisible(false);

    return (
        <header className="navbar-container" data-aos="fade-down" data-aos-once="true">
            <div className="navbar-logo">
    <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img
            src={logo} // <-- Replace with actual image path
            alt="MSR DevXpert Logo"
            style={{ height: '150px', width: 'auto' }} // adjust size as needed
        />
        {/* <span><strong>MSR</strong> devXpert</span> */}
    </Link>
</div>


            {/* Desktop Menu */}
            <nav className="navbar-menu-desktop">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/team">Team</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/career">Career</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            {/* Mobile Menu Button */}
            <div className="navbar-menu-mobile">
                <Button
                    type="text"
                    icon={<MenuOutlined />}
                    onClick={showDrawer}
                    style={{ color: '#fff' }}
                />
                <Drawer
                    title={<span style={{ color: '#40a9ff' }}>MSR devXpert</span>}
                    placement="right"
                    onClose={onClose}
                    open={visible}
                >
                    <Menu mode="vertical" onClick={onClose}>
                        <Menu.Item key="home"><Link to="/">Home</Link></Menu.Item>
                        <Menu.Item key="about"><Link to="/about">About</Link></Menu.Item>
                        <Menu.Item key="services"><Link to="/services">Services</Link></Menu.Item>
                        <Menu.Item key="projects"><Link to="/projects">Projects</Link></Menu.Item>
                        <Menu.Item key="team"><Link to="/team">Team</Link></Menu.Item>
                        <Menu.Item key="blog"><Link to="/blog">Blog</Link></Menu.Item>
                        <Menu.Item key="career"><Link to="/career">Career</Link></Menu.Item>
                        <Menu.Item key="contact"><Link to="/contact">Contact</Link></Menu.Item>
                    </Menu>
                </Drawer>
            </div>
        </header>
    );
};

export default Navbar;
