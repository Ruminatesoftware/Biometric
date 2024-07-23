import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-bootstrap/Modal";

import "./Biometric.css";
import "./Scanner.css";

const Numpad = () => {
  const [showAccess, setShowAccess] = useState(true);
  const [disAllowShow, setDisAllowShow] = useState(true);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  return (
    <>
      <div className="biometric-wrapper">
        <div className="biometric-wrap">
          <div className="biometric-block">
            <div className="biometric-box">
              <h3>
                ENTER <br></br>CODE...
              </h3>
              <div className="line-img">
                <img src="../images/line.png" />
              </div>
              <ul>
                <li>
                  <button>
                    <span>1</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>2</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>3</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>4</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>5</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>6</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>7</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>8</span>
                  </button>
                </li>
                <li>
                  <button>
                    <span>9</span>
                  </button>
                </li>
                <li>
                  <button>
                    <img src="../images/11.png" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src="../images/0.png" />
                  </button>
                </li>
                <li>
                  <button>
                    <img src="../images/12.png" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="biometric-wrap">
          <Modal
            className="alert-modal"
            show={false}
            onHide={handleClose}
            centered
          >
            <Modal.Body>
              <div className="alert-block">
                <div className="alert-box access-allowed"></div>
              </div>
            </Modal.Body>
          </Modal>

          <Modal
            className="alert-modal"
            show={false}
            onHide={handleClose}
            centered
          >
            <Modal.Body>
              <div className="alert-block">
                <div className="alert-box"></div>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </>
  );
};
export default Numpad;
