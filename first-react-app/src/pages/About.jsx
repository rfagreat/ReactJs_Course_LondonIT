// src/components/About.js
import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <header className="about-header">
        <h1>About Us</h1>
      </header>
      <section className="about-content">
        <p>
          Welcome to our company! We are dedicated to providing top-notch
          services and solutions to our clients. Our team of experts is
          committed to excellence and innovation.
        </p>
        <p>
          Our mission is to deliver high-quality products that meet the needs of
          our customers. We strive to exceed expectations and build long-lasting
          relationships.
        </p>
        <p>
          With years of experience in the industry, we have the expertise to
          handle complex challenges and deliver exceptional results. Thank you
          for visiting our About page!
        </p>
      </section>
      <footer className="about-footer">
        <p>© 2024 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;
