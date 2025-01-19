import React from "react";

function SingleService({ service }) {
  return (
    <div className="col-md-4">
      <div className="single-service mb-60 d-flex flex-nowrap">
        <div className="service-icon">
          <img src={service.icon} alt="" />
        </div>
        <div className="service-content">
          <h4 style={{color:'#b99044'}}>{service.name}</h4>
        </div>
      </div>
    </div>
  );
}

export default SingleService;
