import React from "react";

import { FaPhone, FaEnvelope } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";

function Location() {
  return (
    <div id="location" className="bg-img pt-60 pb-30">
      <div className="container location-content">
        <h1 className="text-center">Located at</h1>
        <div className="row">
          <iframe title="Location" src="https://maps.google.com/maps?width=1920&height=540&hl=en&q=Pukhraj Villa Kondhwa Budruk Kadath Nagar Opp.Shantinagar Society, Kasathnagar Road, Kondhwa Budruk, Pune - 411048&t=&z=17&ie=UTF8&iwloc=B&output=embed" width="100%" height="320" style={{ border: "2px solid #b99044" }} allowFullScreen></iframe>
        </div>
        <div className="row text-center">
          <div className="col-4 box1 pt-4">
            <a href="tel:+123456789">
              <FaPhone />
              <h3 className="d-none d-lg-block d-xl-block">Phone</h3>
              <p className="d-none d-lg-block d-xl-block">+91 9423234131</p>
            </a>
          </div>
          <div className="col-4 box2 pt-4">
            <a href="#">
              <FaHome />
              <h3 className="d-none d-lg-block d-xl-block">Address</h3>
              <p className="d-none d-lg-block d-xl-block">Pukhraj Villa Sr.No 61/2 Opp.Shantinagar Society, Kasathnagar Road, Kondhwa Budruk, Pune - 411048</p>
            </a>
          </div>
          <div className="col-4 box3 pt-4">
            <a href="mailto:test@test.com">
              <FaEnvelope />
              <h3 className="d-none d-lg-block d-xl-block">E-mail</h3>
              <p className="d-none d-lg-block d-xl-block">advmadhuri@gmail.com</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
