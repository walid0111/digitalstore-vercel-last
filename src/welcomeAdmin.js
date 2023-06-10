import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./welcomeStyle.css";


const RegionSelector = () => {
  const [selectedTask, setselectedTask] = useState("");

  const handleSelect = (region) => {
    setselectedTask(region);
  };

  return (
    <div className="region-selector">
      <h2>WELCOME BACK, <span style={{ color: '#008507' }}>ADMIN.</span> </h2>
      <div className="region-options">
        <button
          className={`region-option ${selectedTask === "ajouter" ? "selected" : ""}`}
          onClick={() => handleSelect("ajouter")}
        >
          Add Order
        </button>
        <button
          className={`region-option ${selectedTask === "lister" ? "selected" : ""}`}
          onClick={() => handleSelect("lister")}
        >
          Detail Order
        </button>
        <button
          className={`region-option ${selectedTask === "bugs" ? "selected" : ""}`}
          onClick={() => handleSelect("bugs")}
        >
          Bugs
        </button>
      </div>
      <div className="region-actions">
        {selectedTask ? (
          <Link
            to={selectedTask === "ajouter" ? "/addOrder" :
             selectedTask === "lister" ? "/updateOrder" :
              selectedTask === "bugs" ? "/bugList" :"/bugList"
            }
            className="btn-cta"
          >            Get Started
          </Link>
        ) : (
          <p style={{ fontWeight: 'bold', color: '#008507' }}>CHOOSE YOUR desired service :)</p>
        )}
      </div>
    </div>
  );
};

export default RegionSelector;
