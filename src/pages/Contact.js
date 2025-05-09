import { Button } from 'antd';
import React from 'react';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
// import './Contact.css'; // Ensure correct path
import { Collapse } from 'antd';

const { Panel } = Collapse;
const faqData = [
    {
      question: 'How do you approach new projects?',
      answer:
        'We begin with a thorough discovery phase to understand your business goals, target audience, and requirements. Then we create a detailed project plan, including timeline and milestones, before moving to design and development phases. Throughout the process, we maintain clear communication and regular updates.',
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We work with a diverse range of industries, including healthcare, finance, retail, education, technology, and more. Our adaptable approach allows us to understand the unique challenges and opportunities in each sector and deliver tailored solutions.',
    },
    {
      question: 'How long does it typically take to complete a project?',
      answer:
        'Project timelines vary based on scope, complexity, and requirements. A simple website might take 4–6 weeks, while a comprehensive web application could take 3–6 months. During our initial consultation, we’ll provide a more accurate timeline for your specific project.',
    },
    {
      question: 'Do you provide ongoing support after project completion?',
      answer:
        'Yes, we offer various maintenance and support plans to ensure your solution continues to perform optimally. Our support services include bug fixes, security updates, performance optimization, and feature enhancements.',
    },
    {
      question: 'What is your pricing structure?',
      answer:
        'We offer flexible pricing models, including fixed-price quotes for well-defined projects and time-and-materials billing for more complex or evolving projects.',
    },
  ];
const Contact = () => {
    return (
        <section className="contact-section">
            <div className="orange-ball"></div> {/* Only if you're using the ball effect here */}

            <div className="contact-container">
                <h1><span>Lets</span> Get In Touch</h1>
                <p className="section-subtitle">We’d love to hear from you. Drop us a message below!</p>
                <div className="contact-info">
                <form className="contact-form">
                <h3 className='msgTitle'><span>Send</span> us a message</h3>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <Button type="submit" size="large">Send Message</Button>
                </form>
                <div className="contact-details">
                <h3 className='msgTitle'><span>Contact</span> Details</h3>
  <p><MailOutlined style={{ marginRight: '8px' }} /><strong>Email:</strong> support@msrdevxpert.com</p>
  <p><PhoneOutlined style={{ marginRight: '8px' }} /><strong>Phone:</strong> +91 98765 43210</p>
  <p><EnvironmentOutlined style={{ marginRight: '8px' }} /><strong>Address:</strong> 2nd Floor, ABC Tower, Salt Lake, Kolkata, India</p>
  
            {/* Embedded Map */}
            <div className="map-container ">
              <iframe
                title="MSR DevXpert Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.4225133653133!2d88.43184931495803!3d22.593755585163845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02753e4e1e5f69%3A0x6a0f4eae8a35a4e2!2sSalt%20Lake%20Sector%20V%2C%20Kolkata%2C%20West%20Bengal%20700102!5e0!3m2!1sen!2sin!4v1652284142915"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '8px', marginTop: '20px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
</div>




                </div>
                <div className="faq-wrapper">
  <div className="faq-section">
    <h2 className="faq-title"><span>Frequently</span> Asked Questions</h2>
    <p className="faq-subtitle">Find answers to common questions about our services.</p>
    <Collapse accordion className="custom-collapse">
      {faqData.map((item, index) => (
        <Panel header={item.question} key={index}>
          <p>{item.answer}</p>
        </Panel>
      ))}
    </Collapse>
  </div>
</div>
            </div>
            
        </section>
    );
};

export default Contact;
