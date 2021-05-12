import React from "react";
import sliderServiceShow from "../../images/slider-service-show.svg";
import circleArrowLeft from "../../images/circle-arrow-left.svg";
import sliderService1 from "../../images/slider-service-1.svg";
import sliderService2 from "../../images/slider-service-2.svg";
import sliderService3 from "../../images/slider-service-3.svg";
import sliderService4 from "../../images/slider-service-4.svg";
import circleArrowRight from "../../images/circle-arrow-right.svg";

const CourseImageSlider = () => {
  return (
    <div className="col-lg-6 col-12">
      <div className="slider-service">
        <div className="slider-show">
          <img src={sliderServiceShow} alt="" />
        </div>
        <div className="slider-service-content">
          <div className="circle-arrow-left">
            <img src={circleArrowLeft} alt="" />
          </div>
          <div className="slider-service-img">
            <div className="slider-service-1">
              <img src={sliderService1} alt="" />
            </div>
            <div className="slider-service-2">
              <img src={sliderService2} alt="" />
            </div>
            <div className="slider-service-3">
              <img src={sliderService3} alt="" />
            </div>
            <div className="slider-service-4 active">
              <img src={sliderService4} alt="" />
            </div>
          </div>
          <div className="circle-arrow-right">
            <img src={circleArrowRight} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseImageSlider;
