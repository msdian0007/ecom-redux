import React from "react";
import "../assets/css/PageNotFound_404.css";

export const PageNotFound_404 = () => {
  return (
    <>
      <div className="main">
        <div className="not-found-container">
          <div className="not_found_card">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you are looking for might be unavailable.</p>
          </div>
        </div>
      </div>
    </>
  );
};
