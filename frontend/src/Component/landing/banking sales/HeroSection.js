import React from "react";
import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
      <div className="col-lg-6">
        <h1 className="display-4 text-white">Professional certificate program in Banking Sales and Relationship Management</h1>
        <p className="lead mt-3 text-primary">
        Pursue a rewarding career in Banking and Financial Sales with leading organizations.
        </p>
        <button className="btn btn-primary mt-4">Apply Now</button>
      </div>
    </div>
  );
};

export default HeroSection;
