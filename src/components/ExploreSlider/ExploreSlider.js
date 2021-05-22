import React from "react";
import sliderArrowLeft from "../../images/slider-arrow-left.svg";
import sliderItemProgramming from "../../images/slider-item-programming.svg";
import sliderItemMusic from "../../images/slider-item-music.svg";
import sliderItemDrawing from "../../images/slider-item-drawing.svg";
import sliderItemQuran from "../../images/slider-item-quran.svg";
import sliderItemMath from "../../images/slider-item-math.svg";
import sliderArrowRight from "../../images/slider-arrow-right.svg";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const ExploreSlider = () => {
  const topics = [
    { title: "Programming", img: sliderItemProgramming },
    { title: "Music", img: sliderItemMusic },
    { title: "Drawing", img: sliderItemDrawing },
    { title: "Quran", img: sliderItemQuran },
    { title: "Mathematics", img: sliderItemMath },
  ];

  return (
    <section className="hr-section-12">
      <div className="slider-container">
        <div className="slider-content">
          <Carousel
            plugins={[
              "arrows",
              "infinite",

              {
                resolve: slidesToShowPlugin,
                options: {
                  numberOfSlides: 5,
                },
              },
            ]}
            breakpoints={{
              640: {
                plugins: [
                  "arrows",
                  "infinite",

                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 1,
                    },
                  },
                ],
              },
              900: {
                plugins: [
                  "arrows",
                  "infinite",
                  {
                    resolve: slidesToShowPlugin,
                    options: {
                      numberOfSlides: 2,
                    },
                  },
                ],
              },
            }}
          >
            {topics.map((topic, index) => (
              <div key={index} className="slider-item">
                <div className="card-img">
                  <img src={topic.img} alt={`${topic.title}`} />
                  <div className="slider-purple-border"></div>
                </div>
                <div className="card-name">
                  <p>{topic.title}</p>
                </div>
              </div>
            ))}
          </Carousel>

          {/* <div className="slider-item hidden-md-down">
            <div className="card-img">
              <img src={sliderItemMusic} alt="" />
              <div className="slider-purple-border"></div>
            </div>
            <div className="card-name">
              <p>Music</p>
            </div>
          </div>
          <div className="slider-item hidden-lg-down">
            <div className="card-img">
              <img src={sliderItemDrawing} alt="" />
              <div className="slider-purple-border"></div>
            </div>
            <div className="card-name">
              <p>Drawing</p>
            </div>
          </div>
          <div className="slider-item hidden-lg-down">
            <div className="card-img">
              <img src={sliderItemQuran} alt="" />
              <div className="slider-purple-border"></div>
            </div>
            <div className="card-name">
              <p>Quran</p>
            </div>
          </div>
          <div className="slider-item hidden-lg-down">
            <div className="card-img">
              <img src={sliderItemMath} alt="" />
              <div className="slider-purple-border"></div>
            </div>
            <div className="card-name">
              <p>Mathimatics</p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ExploreSlider;
