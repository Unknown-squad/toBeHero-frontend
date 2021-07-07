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
import heroImgSobhi from "../../images/hero-img-1.png";
import heroImgOsama from "../../images/hero-img-2.jpg";
import "./LandingScreen.scss";
import Footer from "../../components/Footer";
import LandingHeader from "../../components/LandingHeader";
import Meta from "../../components/Meta";
import Headroom from "react-headroom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { default as locales } from "./locales.json";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "./sliderLanding.scss";
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

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      />
    );
  }
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          lazyLoad: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          lazyLoad: true,
          dots: true,
          autoplay: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
          dots: true,
          autoplay: false,
        },
      },
    ],
  };
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
            <div className="col-md-6 col-12 pr-3 mb-3" data-aos="fade-right">
              <LazyLoadImage src={hero1} alt="hero-1" effect="blur" />
            </div>
            <div className="col-md-6 col-12" data-aos="fade-left">
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
          <h1 data-aos="fade-down">
            {content.section[1].title.partOne}{" "}
            <span>{content.section[1].title.partTwo} </span>{" "}
            {content.section[1].title.partThree}
          </h1>
          <div className="row just-cont-cntr">
            <div
              className="col-lg-30 ml-card-4 col-md-6 col-12 mb-4"
              data-aos="zoom-in-up"
            >
              <div className="card-help">
                <div className="img-card">
                  <LazyLoadImage src={heroIconSearch} alt="" effect="blur" />
                </div>
                <h6>{content.section[1].card.titleCardOne}</h6>
                <p>{content.section[1].description.partOne}</p>
              </div>
              <div className="card-overlay"></div>
            </div>
            <div
              className="col-lg-30 ml-card-4 col-md-6 col-12 mb-4"
              data-aos="zoom-in-up"
            >
              <div className="card-help">
                <div className="img-card">
                  <LazyLoadImage src={heroIconProgress} alt="" effect="blur" />
                </div>
                <h6>{content.section[1].card.titleCardTwo}</h6>
                <p>{content.section[1].description.partTwo}</p>
              </div>
              <div className="card-overlay"></div>
            </div>
            <div
              className="col-lg-30 ml-card-4 col-md-6 col-12 mb-4"
              data-aos="zoom-in-up"
            >
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
            <div
              className="col-lg-5 col-md-6 col-12 pr-3 mb-5"
              data-aos="fade-left"
            >
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
            <div
              className="col-lg-5 col-md-6 col-lg-offset-1 col-12 mb-5"
              data-aos="fade-left"
            >
              <div className="shadow-img">
                <LazyLoadImage src={hero3} alt="" effect="blur" />
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 col-12 mt-5"
              data-aos="fade-right"
            >
              <div className="shadow-img-cy">
                <LazyLoadImage src={hero4} alt="" effect="blur" />
              </div>
            </div>
            <div
              className="col-lg-5 col-md-6 col-lg-offset-1 col-12 mt-5 pl-3"
              data-aos="fade-right"
            >
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
        <Slider {...settings}>
          <div className="container">
            <div className="row" dir={language === "Arabic" ? "rtl" : "ltr"}>
              <div
                className="col-lg-9 col-12"
                style={{ marginLeft: "5rem", flex: "0 0 65%" }}
              >
                <p
                  style={
                    language === "Arabic"
                      ? { marginTop: "1rem" }
                      : { marginTop: "2rem" }
                  }
                >
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
                    src={heroImgSobhi}
                    alt=""
                    style={
                      language === "Arabic"
                        ? { transform: "scalex(1)", position: "inherit" }
                        : {}
                    }
                    effect="blur"
                  />
                  <h6>{content.section[3].title.titleOne}</h6>
                  <p style={{ marginBottom: "0.7rem" }}>
                    {content.section[3].title.titleTwo}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row" dir={language === "Arabic" ? "rtl" : "ltr"}>
              <div
                className="col-lg-9 col-12"
                style={{ marginLeft: "5rem", flex: "0 0 65%" }}
              >
                <p
                  style={
                    language === "Arabic"
                      ? { marginTop: "1rem" }
                      : { marginTop: "3rem" }
                  }
                >
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
                  {content.section[3].description.partTwo}
                </p>
              </div>
              <div className="col-lg-3 col-12">
                <div className="hero-img-p">
                  <LazyLoadImage
                    src={heroImgOsama}
                    alt=""
                    width="118"
                    height="118"
                    style={
                      language === "Arabic"
                        ? { transform: "scalex(1)", position: "inherit" }
                        : {}
                    }
                    effect="blur"
                  />
                  <h6>{content.section[3].title.titleThree}</h6>
                  <p style={{ marginBottom: "0.7rem" }}>
                    {content.section[3].title.titleFour}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/* <!-- end section-4 --> */}

      {/* //   <!-- start section-5 --> */}
      <section className="hr-section-5">
        <div className="container">
          <div className="wings" data-aos="zoom-in-down">
            <h1>{content.section[4].title.titleOne}</h1>
          </div>
          <div className="met-or-gur">
            <Link to="/register/mentor">
              <button className="btn" data-aos="flip-left">
                {content.section[4].button.btnOne}
              </button>
            </Link>
            <h1>{content.section[4].text.textOne}</h1>
            <Link to="/register/guardian">
              <button className="btn" data-aos="flip-left">
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
