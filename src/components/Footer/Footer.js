import React from "react";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <h5>
            <a href="#up">ToBeHERO Inc.</a> © Copyright 2021. All Rights
            Reserved.
          </h5>
          <ul className="icon-foooter">
            <li>
              {" "}
              <a href="https://twitter.com/" target="blank">
                <i className="fab fa-twitter"></i>
              </a>{" "}
            </li>
            <li>
              <a href="https://www.github.com/Unknown-squad" target="blank">
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.github.com/Unknown-squad" target="blank">
                <img
                  style={{ width: "20px", marginLeft: "20px" }}
                  src="https://www.flaticon.com/svg/vstatic/svg/197/197467.svg?token=exp=1620799049~hmac=aec3ee6c11daa478b7607d114a9076b9"
                  alt="Palestine Flag"
                />
                <p
                  style={{
                    display: "inline",
                    fontSize: "14px",
                    position: "relative",
                    top: "-3px",
                    marginLeft: "5px",
                  }}
                >
                  Palestine is Free
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
