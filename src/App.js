import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import { Layout } from "antd";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import FooterSection from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Careers from "./pages/Career";
import Blog from "./pages/Blog";
import ApplyNow from './pages/ApplyNow';
import AOS from "aos";
import "aos/dist/aos.css";
import "antd/dist/reset.css";
import "./App.css";
import "./styles/css/main.css";

const { Content } = Layout;

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Navbar />
        <Content
          style={{ padding: "2rem", background: "#f0f2f5", minHeight: "80vh" }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/team" element={<Team />} />
            <Route path="/career" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/apply" element={<ApplyNow />} />
          </Routes>
        </Content>
        <FooterSection />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
