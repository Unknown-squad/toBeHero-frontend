import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import sliderItemProgramming from "../../images/slider-item-programming.svg";
import sliderItemMusic from "../../images/slider-item-music.svg";
import sliderItemDrawing from "../../images/slider-item-drawing.svg";
import sliderItemQuran from "../../images/slider-item-quran.svg";
import sliderItemMath from "../../images/slider-item-math.svg";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

const ExploreSlider = ({ history }) => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    history.push({
      pathname: "/explore",
      search: `?page=1${sort ? `&sortby=${sort}` : ""}${
        filter ? `&genre=${filter}` : ""
      }`,
    });
  }, [dispatch, filter, sort, history]);

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
              <div
                key={index}
                className="slider-item"
                onClick={() => setFilter(topic.title)}
              >
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
        </div>
      </div>
    </section>
  );
};

export default ExploreSlider;
