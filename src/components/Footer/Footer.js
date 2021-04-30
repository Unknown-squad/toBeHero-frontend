import React from "react";
import { Link } from "react-router-dom";
import "./Footer.scss";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <h5>ToBeHERO Inc. © Copyright 2021. All Rights Reserved.</h5>
          <ul className="icon-foooter">
            <li>
              {" "}
              <Link to="">
                <i className="fab fa-twitter"></i>
              </Link>{" "}
            </li>
            <li>
              <Link to="">
                <i className="fab fa-github"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
