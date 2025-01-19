import React from "react";
const SingleTestimonial = ({ testimonial }) => {
  return (
    <div className="item carousel-item active">
      <div className="img-box">
        <img src={testimonial.image} alt="" />
      </div>
      <p className="testimonial">{testimonial.text}</p>
      <p className="overview">
        <b>{testimonial.name}</b>,{testimonial.profession}
      </p>
    </div>
  );
};

export default SingleTestimonial;
