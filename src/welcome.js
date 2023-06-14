import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./welcomeStyle.css";


const RegionSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  return (
    <div className="region-selector">
      <h2>WELCOME TO <span style={{color:'#008507'}}>DIGITAL STORE..</span> </h2>
      <h3>THE CHEAPEST WEBSITE IN MOROCCO </h3>
      <div className="region-options">
        <button
          className={`region-option ${selectedRegion === "maroc" ? "selected" : ""}`}
          onClick={() => handleRegionSelect("maroc")}
        >
          Morocco
        </button>
        <button
          className={`region-option ${selectedRegion === "reste-du-monde" ? "selected" : ""}`}
          onClick={() => handleRegionSelect("reste-du-monde")}
        >
          Others Country
        </button>
      </div>
      <div className="region-actions">
        {selectedRegion ? (
          <Link to={selectedRegion === "maroc" ? "/mad" : "/euro"} className="btn-cta">
            Get Started
          </Link>
        ) : (
          <p style={{fontWeight:'bold', color:'#008507'}}>CHOOSE YOUR COUNTRY TO GET STARTED :)</p>
        )}


      </div>
      
    </div>
  );
};

export default RegionSelector;
