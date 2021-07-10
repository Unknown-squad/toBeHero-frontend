import React from "react";
import { Link } from "react-router-dom";
import hero1 from "../../../images/hero1.png";
import Footer from "../../../components/Footer";
import LoginRegHeader from "../../../components/LoginRegHeader";
import "../LoginScreen.scss";
import LoginForm from "../../../components/LoginForm";
import Meta from "../../../components/Meta";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const MentorLoginScreen = ({ location, history }) => {
  return (
    <>
      <Meta title="ToBeHero | Mentor Login"></Meta>
      <LoginRegHeader status="login"></LoginRegHeader>
      {/* <!-- start sextion-7 --> */}
      <div className="container-sign">
        <section className="hr-section-7">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-5 col-12 mb-3">
                <h1>Welcome back</h1>
                <LazyLoadImage src={hero1} alt="hero-1" effect="blur" />
              </div>
              <div className="col-lg-offset-1 col-lg-7 col-md-7 col-12">
                <ul className="nav-form">
                  <li>
                    <Link to="/login/guardian">
                      <div className="overlay-form ">Guardian</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login/mentor">
                      <div className="overlay-form active">Mentor</div>
                    </Link>
                  </li>
                  <li>
                    <Link to="/login/hero">
                      <div className="overlay-form">Hero</div>
                    </Link>
                  </li>
                </ul>
                <div className="form-container flex-column just-cont">
                  <div className="sign-in-form">
                    <div className="form-inputs">
                      <LoginForm
                        user="mentor"
                        location={location}
                        history={history}
                      ></LoginForm>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- start sextion-8 --> */}
        <Footer></Footer>
      </div>
    </>
  );
};

export default MentorLoginScreen;
