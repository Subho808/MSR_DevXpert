import React from 'react';
import ranitImage from '../styles/images/oxyHome.png'; // Import the image
const Team = () => {
    return (
        <section className="team-section">
            <div className="team-container">
                <h1 className="gradient-title"><span>Our</span> Team</h1>
                <p className="section-subtitle">Meet the brains behind MSR DevXpert</p>

                <div className="team-grid">
                    <div className="team-card">
                        <img src="/team1.jpg" alt="Subhojit Sah" />
                        <h3>Subhojit Saha</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="team-card">
                        <img src="/team2.jpg" alt="Munna Sharma" />
                        <h3>Munna Sharma</h3>
                        <p>Backend Developer</p>
                    </div>
                    <div className="team-card">
                        <img src={ranitImage} alt="Ranit Mondal" />
                        <h3>Ranit Mondal</h3>
                        <p>Backend Developer & Cloud Engineer</p>
                        <p></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
