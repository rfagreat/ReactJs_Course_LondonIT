import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>About Page</h1>
      <p>This is the About page.</p>
      {/* Link to Login Page */}
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default About;
