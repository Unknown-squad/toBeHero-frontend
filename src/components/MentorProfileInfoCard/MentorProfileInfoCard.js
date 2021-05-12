import React from "react";
import mentorProfile from "../../images/mentor-profile.svg";
import coloredAt from "../../images/colored-at-icon.svg";
import locationIcon from "../../images/location-icon.svg";
import infoIcon from "../../images/info-icon.svg";
import coloredPhoneIcon from "../../images/colored-phone-icon.svg";
import langIcon from "../../images/lang-icon.svg";

import { Link } from "react-router-dom";

const MentorProfileInfoCard = () => {
  return (
    <section className="hr-section-15">
      <div className="container container-profile">
        <div className="row">
          <div className="col-lg-2 col-md-6 col-12 p-profile">
            <div className="upload-img-profile">
              <img src={mentorProfile} alt="" />
              <p>Mohamed sobhi</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-12 p-profile">
            <div className="mentor-contact">
              <ul>
                <li>
                  <img src={coloredAt} alt="" />
                  <h6>example.example99@example.com</h6>
                </li>
                <li>
                  <img src={locationIcon} alt="" />
                  <h6>city,country</h6>
                </li>
                <li>
                  <img src={infoIcon} alt="" />
                  <h6>22 years old, gender</h6>
                </li>
                <li>
                  <img src={coloredPhoneIcon} alt="" />
                  <Link to="">Show</Link>
                </li>
                <li>
                  <img src={langIcon} alt="" />
                  <h6>English, Arabic</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 col-12 p-profile">
            <div className="description-profile">
              <h4>Description</h4>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              </p>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-12 p-profile">
            <div className="occupations-profile">
              <h4>Occupations</h4>
              <p>Programming</p>
              <p>Design</p>
              <p>Drawing</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorProfileInfoCard;
