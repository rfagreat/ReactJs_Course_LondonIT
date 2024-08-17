import React from "react";
// Import your CSS file if you want to style the component

function Login() {
  // State for storing form data
  // const [formData, setFormData] = useState({
  //   username: "",
  //   password: "",
  // });

  // Handler for form input changes
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value,
  //   });
  // };

  // Handler for form submission
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formData);
  //   // Add your login logic here, such as API calls
  // };

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            // value={formData.username}
            // onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            // value={formData.password}
            // onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
