import React, { useEffect } from "react";
import Logo from "../img/logo/logo.png";
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaXTwitter, FaMapLocation } from "react-icons/fa6";

function Header() {
  useEffect(() => {
    const handleScroll = () => {
      const headerSticky = document.querySelector(".header-sticky");
      if (window.scrollY > 50) {
        headerSticky.classList.add("is-sticky");
      } else {
        headerSticky.classList.remove("is-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="header-top-area default-bg">
          <div className="container">
            <div className="row row-75">
              <div className="header-top-wrap col-12">
                <div className="row">
                  <div className="col-md-4 col-xl-3">
                    <div className="header-top-left">
                      <p>
                        CALL US : <a href="#"> +91 9423234131</a>
                      </p>
                    </div>
                  </div>

                  <div className="col-md-4 col-xl-6">
                    <div className="header-top-middle text-center">
                      <ul className="social-link">
                        <li>
                          <a href="#">
                            <FaFacebookF />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaXTwitter />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaInstagram />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FaLinkedinIn />
                          </a>
                        </li>
                        <li>
                          <a href="#location">
                            <FaMapLocation />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-md-4 col-xl-3">
                    <div className="header-top-right">
                      <p>
                        MAIL US :<a href="#">advmadhuri@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="header-bottom-area header-sticky">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <div className="header-logo">
                  <a href="index.html">
                    <img src={Logo} width={300} alt="" />
                  </a>
                </div>
              </div>

              <div className="col-md-9">
                <div className="header-menu-area text-right">
                  <nav>
                    <ul className="main-menu">
                      <li className="active">
                        <a href="#">HOME</a>
                      </li>
                      <li>
                        <a href="#aboutUS">ABOUT</a>
                      </li>
                      <li>
                        <a href="#services">PRACTICE AREA</a>
                      </li>
                      <li>
                        <a href="#appointment">Appointment</a>
                      </li>
                      <li>
                        <a href="#testimonials">Testimonials</a>
                      </li>
                      <li>
                        <a href="#contact">CONTACT</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="mobile-menu d-lg-none d-xl-none"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
