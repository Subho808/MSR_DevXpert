import React from 'react';
// import './Blog.css';

const Blog = () => {
    return (
        <section className="blog-section">
            <div className="blog-container">
                <h1 className="gradient-title"><span>Latest</span> Blog</h1>
                <p className="section-subtitle">Insights, updates & development tips from our team</p>

                <div className="blog-grid">
                    <div className="blog-card">
                        <img src="/blog1.jpg" alt="Blog" />
                        <h3>How React is Transforming Web Development</h3>
                        <p>Learn how modern JavaScript frameworks speed up your workflow and create better UX.</p>
                        <a href="#">Read More →</a>
                    </div>

                    <div className="blog-card">
                        <img src="/blog2.jpg" alt="Blog" />
                        <h3>Spring Boot Best Practices</h3>
                        <p>Discover how to build scalable and secure backend services with Java Spring Boot.</p>
                        <a href="#">Read More →</a>
                    </div>
                    {/* Add more blogs here */}
                </div>
            </div>
        </section>
    );
};

export default Blog;
