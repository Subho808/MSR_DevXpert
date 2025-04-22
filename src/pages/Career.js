import React from 'react';
// import './Career.css';

const Career = () => {
    return (
        <section className="career-section">
            <div className="career-container">
                <h1 className="gradient-title"><span>Join</span> Our Team</h1>
                <p className="section-subtitle">Be part of MSR DevXpert and build the future of web development.</p>

                <div className="career-intro">
                    <p>
                        At MSR DevXpert, we value creativity, collaboration, and continuous learning. If you're passionate
                        about creating impactful digital solutions and want to grow your career with a team that supports
                        innovation—you're in the right place.
                    </p>
                </div>

                <div className="career-grid">
                    <div className="career-card">
                        <h3>Frontend Developer</h3>
                        <p><strong>Experience:</strong> 1-3 years</p>
                        <p><strong>Skills:</strong> React.js, HTML, CSS, JavaScript</p>
                        <button>Apply Now</button>
                    </div>

                    <div className="career-card">
                        <h3>Backend Developer</h3>
                        <p><strong>Experience:</strong> 2+ years</p>
                        <p><strong>Skills:</strong> Java, Spring Boot, REST APIs</p>
                        <button>Apply Now</button>
                    </div>

                    <div className="career-card">
                        <h3>UI/UX Designer</h3>
                        <p><strong>Experience:</strong> 1+ year</p>
                        <p><strong>Skills:</strong> Figma, Adobe XD, Wireframing</p>
                        <button>Apply Now</button>
                    </div>
                </div>

                <p className="apply-text">
                    Don’t see your role? We’re always on the lookout for talented individuals. Send your resume to <a href="mailto:careers@msrdevxpert.com">careers@msrdevxpert.com</a>.
                </p>
            </div>
        </section>
    );
};

export default Career;
