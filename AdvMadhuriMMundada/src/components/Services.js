import React from "react";
import service1 from "../img/service/service.jpg";
import icon1 from "../img/icon/icon8.png";
import icon2 from "../img/icon/icon2.png";
import icon3 from "../img/icon/icon3.png";
import icon4 from "../img/icon/icon4.png";
import icon5 from "../img/icon/icon5.png";
import SingleService from "./SingleService";

const services = [
  { name: "Criminal Law", icon: icon2 },
  { name: "Family Case", icon: icon1 },
  { name: "Business Registration", icon: icon4 },
  { name: "Matrimonial Cases", icon: icon3 },
  { name: "Affidavit", icon: icon1 },
  { name: "Stamp Duty Registration", icon: icon1 },
  { name: "Online Legal Advisors", icon: icon1 },
  { name: "Property Registration", icon: icon5 },
  { name: "Deed Registration", icon: icon1 },
  { name: "Divorce Law", icon: icon3 },
  { name: "Corporate Law", icon: icon4 },
  { name: "Civil Litigation", icon: icon1 }
];

function Services() {
  return (
    <div id="services" className="service-area pt-120 pb-55">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-4">
            <div className="service-img-custom">
              <img src={service1} alt="" />
            </div>
          </div>
          <div className="col-12 col-lg-8">
            <div className="row">
              <div className="col-12">
                <div className="section-title mb-60">
                  <h4>My Practice Area</h4>
                </div>
              </div>
              <div className="col-12">
                <div className="row">
                  {services.map((service, index) => {
                    return <SingleService key={index} service={service} />;
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
