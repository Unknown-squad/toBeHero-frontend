import React from "react";
import sliderArrowLeft from "../../images/slider-arrow-left.svg";
import sliderItemProgramming from "../../images/slider-item-programming.svg";
import sliderItemMusic from '../../images/slider-item-music.svg"';
import sliderItemDrawing from "../../images/slider-item-drawing.svg";
import sliderItemQuran from "../../images/slider-item-quran.svg";
import sliderItemMath from "../../images/slider-item-math.svg";
import sliderArrowRight from "../../images/slider-arrow-right.svg";

const ExploreSlider = () => {
  return (
    <section className="hr-section-12">
      <div className="slider-container">
        <div className="slider-left-arrow">
          <button>
            <img src={sliderArrowLeft} alt="" />
          </button>
        </div>
        <div className="slider-content">
          <div className="slider-item">
            <div className="card-img">
              <img src={sliderItemProgramming} alt="" />
              <div className="slider-purple-border"></div>
            </div>
            <div className="card-name">
              <p>Programming</p>
            </div>
          </div>
          <div className="slider-item hidden-md-down">
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
          </div>
        </div>
        <div className="slider-right-arrow">
          <button>
            <img src={sliderArrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSlider;
