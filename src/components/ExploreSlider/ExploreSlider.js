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
    <section class="hr-section-12">
      <div class="slider-container">
        <div class="slider-left-arrow">
          <button>
            <img src={sliderArrowLeft} alt="" />
          </button>
        </div>
        <div class="slider-content">
          <div class="slider-item">
            <div class="card-img">
              <img src={sliderItemProgramming} alt="" />
              <div class="slider-purple-border"></div>
            </div>
            <div class="card-name">
              <p>Programming</p>
            </div>
          </div>
          <div class="slider-item hidden-md-down">
            <div class="card-img">
              <img src={sliderItemMusic} alt="" />
              <div class="slider-purple-border"></div>
            </div>
            <div class="card-name">
              <p>Music</p>
            </div>
          </div>
          <div class="slider-item hidden-lg-down">
            <div class="card-img">
              <img src={sliderItemDrawing} alt="" />
              <div class="slider-purple-border"></div>
            </div>
            <div class="card-name">
              <p>Drawing</p>
            </div>
          </div>
          <div class="slider-item hidden-lg-down">
            <div class="card-img">
              <img src={sliderItemQuran} alt="" />
              <div class="slider-purple-border"></div>
            </div>
            <div class="card-name">
              <p>Quran</p>
            </div>
          </div>
          <div class="slider-item hidden-lg-down">
            <div class="card-img">
              <img src={sliderItemMath} alt="" />
              <div class="slider-purple-border"></div>
            </div>
            <div class="card-name">
              <p>Mathimatics</p>
            </div>
          </div>
        </div>
        <div class="slider-right-arrow">
          <button>
            <img src={sliderArrowRight} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreSlider;
