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
        backgroundColor: "#0077b6",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "2rem",
          borderRadius: "1rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.3)",
        }}
      >
        <h1 style={{ fontSize: "6rem", marginBottom: "1rem" }}>404</h1>
        <p style={{ fontSize: "2rem", marginBottom: "2rem" }}>
          Oops, the page you're looking for doesn't exist.
        </p>
        <Link
          to="/"
          style={{
            backgroundColor: "#0056b3",
            color: "#fff",
            padding: "1rem 2rem",
            textDecoration: "none",
            borderRadius: "0.5rem",
            fontSize: "1.2rem",
            transition: "background-color 0.3s",
            "&:hover": {
              backgroundColor: "#003366",
            },
          }}
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
