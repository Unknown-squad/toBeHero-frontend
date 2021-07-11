import React from "react";
import sliderServiceShow from "../../images/slider-service-show.svg";
import circleArrowLeft from "../../images/circle-arrow-left.svg";
// import sliderService01 from "../../images/slider-service-01.svg";
// import sliderService02 from "../../images/slider-service-02.svg";
// import sliderService03 from "../../images/slider-service-03.svg";
// import sliderService04 from "../../images/slider-service-04.svg";
import circleArrowRight from "../../images/circle-arrow-right.svg";
import Slider from "react-slick";
import "./style.scss";
const CourseImageSlider = ({ details }) => {
  let baseUrl = `${process.env.REACT_APP_DOMAIN_MEDIA}`;
  let gg = [];
  details.mediaURLS.map((images) => gg.push(images));
  // console.log(gg);
  const settings = {
    customPaging: function (i) {
      return (
        <img
          src={`${baseUrl}${i + 1 ? gg[i] : i}`}
          alt=""
          // onError={(e) => {
          //   e.target.onerror = null;
          //   e.target.src =
          //     "https://img.icons8.com/ultraviolet/40/000000/user.png";
          // }}
        />
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    // <div className="col-lg-6 col-12">
    //   <div className="slider-service">
    //     {/* {details.mediaURLS.map} */}
    //     <div className="slider-show">
    //       <img src={sliderServiceShow} alt="" />
    //     </div>
    //     <div className="slider-service-content">
    //       <div className="circle-arrow-left">
    //         <img src={circleArrowLeft} alt="" />
    //       </div>
    //       <div className="slider-service-img">
    //         <div className="slider-service-1">
    //           <img src={sliderService1} alt="" />
    //         </div>
    //         <div className="slider-service-2">
    //           <img src={sliderService2} alt="" />
    //         </div>
    //         <div className="slider-service-3">
    //           <img src={sliderService3} alt="" />
    //         </div>
    //         <div className="slider-service-4 active">
    //           <img src={sliderService4} alt="" />
    //         </div>
    //       </div>
    //       <div className="circle-arrow-right">
    //         <img src={circleArrowRight} alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="col-lg-6 col-12">
      <div className="slider-service">
        <Slider {...settings} className="slider-show">
          <div className={`slider-service-1`}>
            <img
              src={`${baseUrl}${details.picture}`}
              alt=""
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://img.icons8.com/ultraviolet/40/000000/user.png";
              }}
            />
          </div>
          {details.mediaURLS.map((images, i) => (
            <div className={`slider-service-${i}`} key={i}>
              <img
                src={`${baseUrl}${images}`}
                alt=""
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://img.icons8.com/ultraviolet/40/000000/user.png";
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CourseImageSlider;
