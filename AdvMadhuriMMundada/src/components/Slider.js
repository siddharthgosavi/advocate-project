import React from "react";
import SliderBg from "../img/slider/slider-bg.jpg";
import profile from "../img/pics/profile_cropped.jpg";

function Slider() {
  return (
    <div className="slider-area">
      <div className="single-slider" style={{ backgroundImage: `url(${SliderBg})` }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-xl-6">
              <div className="hero-content">
                <div className="title">
                  <h1>Madhuri M Mundada</h1>
                  <h2>Expert Lawyer</h2>
                </div>
                <div className="description">
                  <p>Hi, I am expert lawyer. We solve your problems tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam</p>
                </div>
                <a href="appointment.html">Make an appointment</a>
              </div>
            </div>
            <div className="col-md-4 col-xl-6">
              <div className="hero-img img-full mt-30" data-wow-duration="1.5s" style={{ visibility: "visible", animationDuration: "1.5s", animationName: "fadeInUp" }}>
                <img src={profile} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
