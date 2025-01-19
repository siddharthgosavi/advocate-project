import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import SingleTestimonial from "./SingleTestimonial";
import testimonialsData from "../data/testimonials.json";
import "./Testimonial.css";

function Testimonial() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTestimonials(testimonialsData);
  }, []);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="testimonials" className="bg-img">
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-center m-auto">
            <h2 className="heading-custom">Testimonials</h2>
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">{testimonials.length > 0 && <SingleTestimonial testimonial={testimonials[currentIndex]} />}</div>
              <span className="carousel-control left carousel-control-prev">
                <i className="fa fa-angle-left">
                  <FaAngleLeft onClick={handlePrevClick} />
                </i>
              </span>
              <span className="carousel-control right carousel-control-next">
                <i className="fa fa-angle-right">
                  <FaAngleRight onClick={handleNextClick} />
                </i>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
