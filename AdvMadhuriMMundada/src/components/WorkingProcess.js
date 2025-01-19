import React from "react";
import icon6 from "../img/icon/icon6.png";
import icon7 from "../img/icon/icon7.png";
import icon8 from "../img/icon/icon8.png";

function WorkingProcess() {
  return (
    <div className="our-working-area bg-img pb-60">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="section-title text-center mb-70">
              <img src="img/icon/icon1.png" alt="" />
              <h4>Wroking Process</h4>
              <h2>Our Working Way</h2>
              <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias cepturi sint eca itate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aerat</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="working-wrap">
              <div className="row">
                <div className="col-md-4">
                  <div className="single-working d-flex flex-wrap">
                    <div className="working-icon">
                      <img src={icon6} alt="" />
                    </div>
                    <div className="working-title">
                      <h2>
                        Analyzing <br /> Case
                      </h2>
                    </div>
                    <p>&#8594;</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="single-working d-flex flex-wrap">
                    <div className="working-icon">
                      <img src={icon7} alt="" />
                    </div>
                    <div className="working-title">
                      <h2>
                        Research & <br /> Investigation
                      </h2>
                    </div>
                    <p>&#8594;</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="single-working d-flex flex-wrap">
                    <div className="working-icon">
                      <img src={icon8} alt="" />
                    </div>
                    <div className="working-title">
                      <h2>
                        Court of Law <br /> Success
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkingProcess;
