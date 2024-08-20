import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f0f0f0",
      }}
    >
      <h1 style={{ fontSize: "5rem", marginBottom: "1rem" }}>404</h1>
      <p style={{ fontSize: "1.5rem", marginBottom: "2rem" }}>
        Oops, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "1rem 2rem",
          textDecoration: "none",
          borderRadius: "0.5rem",
          fontSize: "1.2rem",
          transition: "background-color 0.3s",
          "&:hover": {
            backgroundColor: "#0056b3",
          },
        }}
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
