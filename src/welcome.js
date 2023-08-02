import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./welcomeStyle.css";
import Fortnite from './ItemShop';

const RegionSelector = () => {
  const [selectedRegion, setSelectedRegion] = useState("");
  const [showPaymentAccepted, setShowPaymentAccepted] = useState(false);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    setShowPaymentAccepted(true);
  };

  return (
    <div className="region-selector">
      
      <head>
        <meta
          name="trustpilot-one-time-domain-verification-id"
          content="672a6854-e560-4596-b310-7f409f718210"
        />
      </head>
      <h2 style={{ fontWeight: "bold", fontSize: '22px', padding: '5px' }}>
        WELCOME TO <span style={{ color: "#008507" }}>DIGITAL STORE..</span>{" "}
      </h2>
      <h3 style={{ fontWeight: "bold", textAlign: 'center' }}>
        FIND YOUR ITEM AT THE LOWEST PRICE AND WITH A WARRANTY. SHOP WITH CONFIDENCE !{" "}
      </h3> 

      
      <div className="region-options">
        <button
          className={`region-option ${selectedRegion === "Morocco" ? "selected" : ""
            }`}
          onClick={() => handleRegionSelect("Morocco")}
        >
          Morocco
        </button>
        <button
          className={`region-option ${selectedRegion === "Other Countries" ? "selected" : ""
            }`}
          onClick={() => handleRegionSelect("Other Countries")}
        >
          Other Countries
        </button>
        <button className='region-option'>
          <Link to={'/client'} target="_blank">
            Clients
          </Link>
        </button>
        <button className='region-option'>
          <Link to={'/Fortnite'} target="_blank">
            Gifts
          </Link>
        </button>
      </div>
      
      <div className="region-actions">
        
        {selectedRegion ? (
          <>
            {showPaymentAccepted ? (
              <>
                <p style={{ fontWeight: "bold", textAlign: 'center' }}>
                  Payment accepted in {selectedRegion} is :
                </p>
                <p style={{ fontWeight: "", color: "green", textAlign: 'center', padding: '10px' }}>
                  {selectedRegion === "Morocco" ? (
                    <span>
                      <span style={{ fontWeight: "bold", color: "green", textAlign: 'center' }}>
                        Orange, CIH Bank, PayPal, CashPlus
                      </span> <br/><br/> 
                      {/* <span style={{ color: "red", textAlign: 'center',  padding: '10px' }}>
                        jib ay carte orange bghiti ghi matkounch carte dial  <span style={{ fontWeight: "bold", color: "red" }}> 30dh</span> 
                      </span> */}
                     </span>
                  ) : (
                    <span>
                      <span style={{ fontWeight: "bold", color: "green", textAlign: 'center' }}>
                        PayPal, Crypto
                      </span>
                    </span>
                  )}
                </p>
              </>
            ) : null}
            <div className="get-started-button">
              <Link
                to={selectedRegion === "Morocco" ? "/mad" : "/euro"}
                className="btn-cta"
              >
                OK
              </Link>
            </div>
          </>
        ) : (
          <p style={{ fontWeight: "bold", color: "#008507" }}>
            CHOOSE YOUR COUNTRY TO GET STARTED
          </p>
        )}
      </div> 
    </div>

  );
};

export default RegionSelector;
