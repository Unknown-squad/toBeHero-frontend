import React from "react";
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
import "./HomeScreen.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const HomeScreen = () => {
  return (
    <>
      <Header></Header>
      {/* <!-- start sextion-1 --> */}
      <section className="hr-section-1">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-12 pr-3 mb-3">
              <img src={hero1} alt="hero-1" />
            </div>
            <div className="col-md-6 col-12">
              <h1>
                Turn your child to the <span className="hero-bord">hero</span>{" "}
                he deserves <span className="to-be"> to be</span>
              </h1>
              <p className="mb-3">
                We are a platform that assists guardians in finding
                <span className="font-500">mentors</span> for their children for
                a better education through a
                <span className="font-500">one-on-one live video calls</span>
              </p>
              <button className="btn ex-now">
                <Link to="">Explore now</Link>
              </button>
              <p className="font-500">Or join as a</p>
              <button className="btn gr-mentor">Guardian</button>
              <button className="btn gr-mentor">Mentor</button>
            </div>
          </div>
        </div>
      </section>
      {/* //   <!-- end section-1 --> */}
      {/* //   <!-- start section-2 --> */}
      <section className="hr-section-2">
        <div className="hero-icon-angle">
          <i className="fas fa-angle-double-down"></i>
        </div>
        <div className="container">
          <h1>
            How <span>ToBeHero</span> can Help
          </h1>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card-help">
                <div className="img-card">
                  <img src={heroIconSearch} alt="" />
                </div>
                <h6>Easy to find a Mentor</h6>
                <p>
                  Finding a suitable mentor to satisfy your child's needs is
                  fast and easy
                </p>
              </div>
              <div className="card-overlay"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card-help">
                <div className="img-card">
                  <img src={heroIconProgress} alt="" />
                </div>
                <h6>Simple progress monitoring</h6>
                <p>
                  Monitoring a child's progress with their mentor is as easy as
                  reading a list
                </p>
              </div>
              <div className="card-overlay"></div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 mb-4">
              <div className="card-help">
                <div className="img-card">
                  <img src={heroIconTeach} alt="" />
                </div>
                <h6>Variable teaching methods</h6>
                <p>
                  Mentors have the freedom of teaching using their creative and
                  innovative methods
                </p>
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
            <div className="col-md-6 col-12 pr-3 mb-5">
              <h6>Mentors</h6>
              <h1>Become the creative mentor you always wanted to be</h1>
              <p>
                Simple course management and you can be as creative and
                innovative with your mentoring methods
              </p>
              <div className="btn-arrow">
                <button className="btn btn-g-m-start">
                  <Link to="">Mentors, start here</Link>
                </button>
                <img src={curvedArrow} alt="" />
              </div>
            </div>
            <div className="col-md-6 col-12 mb-5">
              <img src={hero3} alt="" />
            </div>
            <div className="col-md-6 col-12 mt-5">
              <img src={hero4} alt="" />
            </div>
            <div className="col-md-6 col-12 mt-5 pl-3">
              <h6>Guardian</h6>
              <h1>Finding a mentor for your child never been easier!</h1>
              <p>
                Find the most suitable mentor for your child and it is easy to
                monitor their progress
              </p>
              <div className="btn-arrow">
                <button className="btn btn-g-m-start">
                  <Link to="">Mentors, start here</Link>
                </button>
                <img src={curvedArrow} alt="" />
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
                <img src={hero5Icon} alt="" /> "I have been using To Be Hero for
                all my children for their favorite hobbies and they
                magnificently improved since i started using the platform. It is
                easy to find a suitable mentor to satisfy your child's needs."
              </p>
            </div>
            <div className="col-lg-3 col-12">
              <div className="hero-img-p">
                <img src={heroImg} alt="" />
                <h6>Mohamed</h6>
                <p>Egypt</p>
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
            <h1>Join TO BE HERO today</h1>
          </div>
          <div className="met-or-gur">
            <button className="btn">
              <Link to="">Mentor</Link>
            </button>
            <h1>OR</h1>
            <button className="btn">
              <Link href="">Guardian</Link>
            </button>
          </div>
          <hr />
        </div>
      </section>
      {/* //   <!-- end section-5 --> */}
      {/* //   <!-- start section-6 --> */}
      <section className="hr-section-6">
        <div className="container">
          <h2>built and developed by</h2>
          <p>
            Mohammed Sobhi - Mohammed Ramadan - Islam Goher - Mahmoud serag
            Osama Ammar - Mohammed Ali - Mohammed Ibrahim
          </p>
          <p>
            under supervision of: Prof. Mohammed Badawy and T.A. Andrew Nader
          </p>
        </div>
      </section>
      {/* //   <!-- end sextion-6 -->; */}
      <Footer></Footer>
    </>
  );
};

export default HomeScreen;
