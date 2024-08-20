import React from "react";
import { useAuth } from "../context/AuthContext";
import { useState, useRef } from "react";
import Home from "./Home";
import { Link } from "react-router-dom";
// Import your CSS file if you want to style the component

//Controlled components rely on React state to manage the form data,
// while uncontrolled components use the DOM itself to handle form data.
function Login() {
  const input_ref = useRef();

  // context hook
  const { login, isAuthenticated } = useAuth();

  // State for storing form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your login logic here, such as API calls
    login(formData);
  };
  console.log("Input Ref", input_ref.current);
  return (
    <>
      {isAuthenticated ? (
        <Home />
      ) : (
        <div className="login-container">
          <form onSubmit={handleSubmit} className="login-form">
            <h2>Login</h2>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                ref={input_ref}
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-button">
              Login
            </button>
            <Link className="about-link" to="/about">
              Go to About Page
            </Link>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
