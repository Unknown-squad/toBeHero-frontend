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
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
