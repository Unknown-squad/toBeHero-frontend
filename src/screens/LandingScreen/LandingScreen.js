import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import hero1 from "../../images/hero1.png";
import heroIconTeach from "../../images/hero-icon-teach.svg";
import heroIconProgress from "../../images/hero-icon-progress.svg";
import heroIconSearch from "../../images/hero-icon-search.svg";
import curvedArrow from "../../images/curved-arrow.svg";
import hero3 from "../../images/hero3.png";
import hero4 from "../../images/hero4.png";
import hero5Icon from "../../images/hero5-icon.svg";
import heroImg from "../../images/hero-img-1.png";
import "./LandingScreen.scss";
import Footer from "../../components/Footer";
import LandingHeader from "../../components/LandingHeader";
import Meta from "../../components/Meta";
import Headroom from "react-headroom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { default as locales } from "./locales.json";

const LandingScreen = () => {
  let languageStoredInLocalStorage = localStorage.getItem("language");
  const [language, setLanguage] = useState(
    languageStoredInLocalStorage ? languageStoredInLocalStorage : "English"
  );
  const storeLanguageInLocalStorage = (language) => {
    localStorage.setItem("language", language);
  };
  let content;
  language === "English"
    ? (content = locales.English)
    : (content = locales.Arabic);

  useEffect(() => {
    document.body.dir = content.dir;
  }, [content.dir]);

  return (
    <>
      <Meta></Meta>
      <Headroom style={{ zIndex: "999999" }}>
        <LandingHeader
          language={language}
          handleSetLanguage={(language) => {
            setLanguage(language);
            storeLanguageInLocalStorage(language);
          }}
        ></LandingHeader>
      </Headroom>
      {/* <!-- start sextion-1 --> */}
      <section className="hr-section-1" id="up">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 pr-3 mb-3">
              <LazyLoadImage src={hero1} alt="hero-1" effect="blur" />
            </div>
            <div className="col-md-6 col-12">
              <h1>
                {content.section[0].title.partOne}{" "}
                <span className="hero-bord">
                  {content.section[0].title.partTwo}
                </span>{" "}
                {content.section[0].title.partThree}{" "}
                <span className="to-be">
                  {" "}
                  {content.section[0].title.partFour}
                </span>
              </h1>
              <p className="mb-3">
                {content.section[0].description.partOne}
                <span className="font-500">
                  {content.section[0].description.partTwo}
                </span>{" "}
                {content.section[0].description.partThree}
                <span className="font-500">
                  {" "}
                  {content.section[0].description.partFour}
                </span>
              </p>
              <Link to="/explore">
                <button className="btn ex-now">
                  {content.section[0].button.btnOne}
                </button>
              </Link>
              <p className="font-500">{content.section[0].button.btnFour}</p>
              <Link to="/register/guardian">
                <button className="btn gr-mentor">
                  {content.section[0].button.btnTwo}
                </button>
              </Link>
              <Link to="/register/mentor">
                <button className="btn gr-mentor">
                  {content.section[0].button.btnThree}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* //   <!-- end section-1 --> */}
      {/* //   <!-- start section-2 --> */}
      <section className="hr-section-2">
        <div className="hero-icon-angle">
          <a href="#down">
            <i className="fas fa-angle-double-down"></i>
          </a>
        </div>
        <div className="container" id="down">
          <h1>
            {content.section[1].title.partOne}{" "}
            <span>{content.section[1].title.partTwo} </span>{" "}
            {content.section[1].title.partThree}
          </h1>
          <div className="row just-cont-cntr">
            <div className="col-lg-30 ml-card-4 col-md-6 col-12 mb-4">
              <div className="card-help">
                <div className="img-card">
                  <LazyLoadImage src={heroIconSearch} alt="" effect="blur" />
                </div>
                <h6>{content.section[1].card.titleCardOne}</h6>
                <p>{content.section[1].description.partOne}</p>
              </div>
              <div className="card-overlay"></div>
            </div>
            <div className="col-lg-30 ml-card-4 col-md-6 col-12 mb-4">
              <div className="card-help">
                <div className="img-card">
                  <LazyLoadImage src={heroIconProgress} alt="" effect="blur" />
                </div>
                <h6>{content.section[1].card.titleCardTwo}</h6>
                <p>{content.section[1].description.partTwo}</p>
              </div>
              <div className="card-overlay"></div>
            </div>
            <div className="col-lg-30 ml-card-4 col-md-6 col-12 mb-4">
              <div className="card-help">
                <div className="img-card">
                  <LazyLoadImage src={heroIconTeach} alt="" effect="blur" />
                </div>
                <h6>{content.section[1].card.titleCardThree}</h6>
                <p>{content.section[1].description.partThree}</p>
              </div>
              <div className="card-overlay"></div>
            </div>
          </div>
        </div>
      </section>
      {/* //   <!-- end section-2 --> */}

      {/* //   <!-- start section-3 --> */}
      <section className="hr-section-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 col-12 pr-3 mb-5">
              <h6>{content.section[2].title.partOne}</h6>
              <h1>{content.section[2].title.partTwo}</h1>
              <p>{content.section[2].description.partOne}</p>
              <div className="btn-arrow">
                <Link to="/register/mentor">
                  <button className="btn btn-g-m-start">
                    {content.section[2].button.btnOne}
                  </button>
                </Link>
                <LazyLoadImage
                  src={curvedArrow}
                  alt=""
                  style={
                    language === "Arabic" ? { transform: "scaleX(-1)" } : {}
                  }
                  effect="blur"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-lg-offset-1 col-12 mb-5">
              <div className="shadow-img">
                <LazyLoadImage src={hero3} alt="" effect="blur" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-12 mt-5">
              <div className="shadow-img-cy">
                <LazyLoadImage src={hero4} alt="" effect="blur" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 col-lg-offset-1 col-12 mt-5 pl-3">
              <h6>{content.section[2].title.partThree}</h6>
              <h1>{content.section[2].title.partFour}</h1>
              <p>{content.section[2].description.partTwo}</p>
              <div className="btn-arrow">
                <Link to="/register/guardian">
                  <button className="btn btn-g-m-start">
                    {content.section[2].button.btnTwo}
                  </button>
                </Link>
                <LazyLoadImage
                  src={curvedArrow}
                  alt=""
                  style={
                    language === "Arabic" ? { transform: "scaleX(-1)" } : {}
                  }
                  effect="blur"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //   <!-- end section-3 --> */}

      {/* //   <!-- start section-4 --> */}
      <section className="hr-section-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-12">
              <p>
                <LazyLoadImage
                  src={hero5Icon}
                  alt=""
                  style={
                    language === "Arabic"
                      ? { transform: "scalex(-1)", position: "inherit" }
                      : { top: "-53px", left: "-14px" }
                  }
                  effect="blur"
                />{" "}
                {content.section[3].description.partOne}
              </p>
            </div>
            <div className="col-lg-3 col-12">
              <div className="hero-img-p">
                <LazyLoadImage
                  src={heroImg}
                  alt=""
                  style={
                    language === "Arabic"
                      ? { transform: "scalex(1)", position: "inherit" }
                      : {}
                  }
                  effect="blur"
                />
                <h6>{content.section[3].title.titleOne}</h6>
                <p>{content.section[3].title.titleTwo}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end section-4 --> */}

      {/* //   <!-- start section-5 --> */}
      <section className="hr-section-5">
        <div className="container">
          <div className="wings">
            <h1>{content.section[4].title.titleOne}</h1>
          </div>
          <div className="met-or-gur">
            <Link to="/register/mentor">
              <button className="btn">
                {content.section[4].button.btnOne}
              </button>
            </Link>
            <h1>{content.section[4].text.textOne}</h1>
            <Link to="/register/guardian">
              <button className="btn">
                {content.section[4].button.btnTwo}
              </button>
            </Link>
          </div>
          <hr />
        </div>
      </section>
      {/* //   <!-- end section-5 --> */}
      {/* //   <!-- start section-6 --> */}
      <section className="hr-section-6">
        <div className="container">
          <h2>{content.section[4].title.titleTwo}</h2>
          <p>{content.section[4].description.partOne}</p>
          <p>{content.section[4].description.partTwo}</p>
        </div>
      </section>
      {/* //   <!-- end sextion-6 -->; */}
      <Footer language={language}></Footer>
    </>
  );
};

export default LandingScreen;
