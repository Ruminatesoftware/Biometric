import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Scanner.css";
import "./Biometric.css";

const Scanner = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const handleClick = () => {
    setShowAnimation(true);
  };
  return (
    <>
      <div className="biometric-wrapper">
        <div className="biometric-wrap">
          <div className="biometric-block">
            <div className="biometric-box">
              <h3>
                BIOMETRIC<br></br>SCANNER...
              </h3>
              <div className="line-img">
                <img src="../images/line.png" />
              </div>
              <div className="scanner">
                <div
                  className={`fingerprint ${
                    showAnimation ? "shownanimation" : ""
                  }`}
                >
                  <img
                    className="fingerprint-img"
                    src="../images/fingerprint.png"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Scanner;
