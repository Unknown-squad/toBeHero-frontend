import React from "react";
import "./Footer.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { default as locales } from "./locales.json";

const Footer = (props) => {
  let content;
  localStorage.getItem("language") === "Arabic"
    ? (content = locales.Arabic)
    : (content = locales.English);

  return (
    <footer>
      <div className="container">
        <div className="footer-info">
          <h5>
            <a href="#up">{content.linkOne}</a> {content.linkTwo}
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
                <LazyLoadImage
                  style={{ width: "20px", marginLeft: "20px" }}
                  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YwRjBGMDsiIGN4PSIyNTYiIGN5PSIyNTYiIHI9IjI1NiIvPg0KPHBhdGggZD0iTTE1NS44MjYsMTY2Ljk1N2gzNDAuMjVDNDU5LjkwNiw2OS40NzIsMzY2LjA3LDAsMjU2LDBDMTg1LjMwNiwwLDEyMS4zMTMsMjguNjU5LDc0Ljk4OSw3NC45ODlMMTU1LjgyNiwxNjYuOTU3eiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzZEQTU0NDsiIGQ9Ik0xNTUuODI2LDM0NS4wNDNoMzQwLjI1QzQ1OS45MDYsNDQyLjUyOCwzNjYuMDcsNTEyLDI1Niw1MTINCgljLTcwLjY5NCwwLTEzNC42ODctMjguNjU5LTE4MS4wMTEtNzQuOTg5TDE1NS44MjYsMzQ1LjA0M3oiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNEODAwMjc7IiBkPSJNNzQuOTgsNzQuOThjLTk5Ljk3NCw5OS45NzQtOTkuOTc0LDI2Mi4wNjUsMCwzNjIuMDRDMTE2LjI5MywzOTUuNzA3LDE1Ni4wMjYsMzU1Ljk3NCwyNTYsMjU2DQoJTDc0Ljk4LDc0Ljk4eiIvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
                  alt="Palestine Flag"
                  effect="blur"
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
                  {content.linkThree}
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
