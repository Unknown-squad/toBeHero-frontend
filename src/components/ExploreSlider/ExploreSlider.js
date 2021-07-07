import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import sliderItemProgramming from "../../images/slider-item-programming.svg";
import sliderItemMusic from "../../images/slider-item-music.svg";
import sliderItemDrawing from "../../images/slider-item-drawing.svg";
import sliderItemQuran from "../../images/slider-item-quran.svg";
import sliderItemMath from "../../images/slider-item-math.svg";
import Slider from "react-slick";
import { useHistory } from "react-router";
import "./ExploreSlider.scss";
const ExploreSlider = (props) => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  console.log(history);
  useEffect(() => {
    history.push({
      pathname: "/explore",
      search: `?page=1${sort ? `&sortby=${sort}` : ""}${
        filter ? `&genre=${filter}` : ""
      }`,
    });
  }, [dispatch, filter, sort, history]);
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
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
          lazyLoad: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          lazyLoad: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          lazyLoad: true,
          dots: false,
        },
      },
    ],
  };
  const topics = [
    { title: "Programming", img: sliderItemProgramming },
    { title: "Music", img: sliderItemMusic },
    { title: "Drawing", img: sliderItemDrawing },
    { title: "Quran", img: sliderItemQuran },
    { title: "Mathematics", img: sliderItemMath },
  ];

  return (
    <section className="hr-section-12">
      <div
        className="slider-container"
        style={{ width: "90%", margin: "auto" }}
      >
        <div className="slider-content">
          <Slider {...settings}>
            {topics.map((topic, index) => (
              <div
                key={index}
                className="slider-item"
                onClick={() => setFilter(topic.title)}
              >
                <div
                  className="card-img"
                  style={{ marginLeft: "1rem", marginRight: "1rem" }}
                >
                  <img src={topic.img} alt={`${topic.title}`} />
                  <div className="slider-purple-border"></div>
                </div>
                <div className="card-name">
                  <p>{topic.title}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ExploreSlider;
