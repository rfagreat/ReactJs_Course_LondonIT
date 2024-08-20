import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="not-found-page">
      <div className="not-found-content">
        <h1>404</h1>
        <span className="label">Page Not Found</span>
        <p>Oops! The page you're looking for doesn't exist.</p>
        <p>It seems you've ventured into uncharted territory.</p>
        <Link to="/" className="go-home-link">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
