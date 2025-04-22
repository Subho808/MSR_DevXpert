import React from 'react';
// import './Team.css';

const Team = () => {
    return (
        <section className="team-section">
            <div className="team-container">
                <h1 className="gradient-title"><span>Our</span> Team</h1>
                <p className="section-subtitle">Meet the brains behind MSR DevXpert</p>

                <div className="team-grid">
                    <div className="team-card">
                        <img src="/team1.jpg" alt="Team Member" />
                        <h3>Jane Doe</h3>
                        <p>Frontend Developer</p>
                    </div>
                    <div className="team-card">
                        <img src="/team2.jpg" alt="Team Member" />
                        <h3>John Smith</h3>
                        <p>Backend Developer</p>
                    </div>
                    {/* Add more team members as needed */}
                </div>
            </div>
        </section>
    );
};

export default Team;
