import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Feature from "../components/Feature";
import Services from "../components/Services";
import FunFact from "../components/FunFact";
import WorkingProcess from "../components/WorkingProcess";
import ContactUs from "../components/ContactUs";
import Location from "../components/Location";
import aboutImg from "../img/about/aboutImg.jpg";
import { FaPlayCircle } from "react-icons/fa";
import Testimonial from "../components/Testimonial";
import ScrollToTop from "../components/ScrollToTop";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <Slider />
      <Feature />

      <div id="aboutUS" className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-wrapper black-bg pt-110 pb-110">
                <div className="row">
                  <div className="col-md-5">
                    <div className="about-img">
                      <img src={aboutImg} alt="" />
                      <a className="venobox" data-vbtype="video" data-gall="gall-video" data-autoplay="true" href="https://www.youtube.com/watch?v=W7viYitBreU">
                        <FaPlayCircle />
                      </a>
                    </div>
                  </div>

                  <div className="col-md-7">
                    <div className="about-content">
                      <span>20 years of experience</span>
                      <h1>Hay! Here is Madhuri Mundada</h1>
                      <h5>Professional & Experienced Lawyer</h5>
                      <p>Lawyer boluptatum deleniti atque corrupti quos dolores et quas molestias epturi sint eca iditate non provident, similique sunt in culpa modi tempora incidunt ut labore et dolor am aerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam poris suscipit modi tempora incidunt </p>
                      <div className="author-signeture">
                        <img src="img/about/signeture.png" alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-area bg-img">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="single-timeline mb-50 d-flex align-items-center">
                <div className="timeline-frame">
                  <h3>
                    2001<span>5th Jan</span>
                  </h3>
                </div>
                <div className="timeline-content">
                  <h4>Start my Career</h4>
                  <p>voluptatum deleniti atque uos es et quas molestias cepte</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-timeline mb-50 d-flex align-items-center">
                <div className="timeline-frame">
                  <h3>
                    2007 <span>10th Feb</span>
                  </h3>
                </div>
                <div className="timeline-content">
                  <h4>Best lawyer Award</h4>
                  <p>voluptatum deleniti atque uos es et quas molestias cepte</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-timeline mb-50 d-flex align-items-center">
                <div className="timeline-frame">
                  <h3>
                    2012<span>22 Aug</span>
                  </h3>
                </div>
                <div className="timeline-content">
                  <h4>Best lawyer Award</h4>
                  <p>voluptatum deleniti atque uos es et quas molestias cepte</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
      <WorkingProcess />
      <FunFact />
      <Testimonial />
      <ContactUs />
      <Location />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Home;
