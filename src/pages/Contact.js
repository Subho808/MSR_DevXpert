import React from 'react';
// import './Contact.css'; // Ensure correct path

const Contact = () => {
    return (
        <section className="contact-section">
            <div className="orange-ball"></div> {/* Only if you're using the ball effect here */}

            <div className="contact-container">
                <h1><span>Contact</span> Us</h1>
                <p className="section-subtitle">We’d love to hear from you. Drop us a message below!</p>

                <form className="contact-form">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
