import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top-area black-bg pt-100 pb-65">
          <div className="container">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <div className="col-md-6 col-lg-3">
                <div className="single-footer-widget mb-30">
                  <a className="footer-logo" href="index.html">
                    <img src="img/logo/logo-footer.png" alt="" />
                  </a>
                  <p>Lawyer boluptatum atque corrupe uas molestias cepturi sint eca itate non nt in culpa modi tempora incidunt</p>
                  <h4 className="newslatter-title">Newsletter</h4>
                  <form style={{ padding: "0" }} action="#" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="footer-subscribe-form validate" target="_blank" noValidate>
                    <div id="mc_embed_signup_scroll">
                      <div id="mc-form" className="mc-form subscribe-form">
                        <input id="mc-email" type="email" autoComplete="off" placeholder="Enter your email here" />
                        <button id="mc-submit">
                          <i className="fa fa-paper-plane-o"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="col-md-6 col-lg-3 footer-menu">
                <div className="single-footer-widget mb-30">
                  <h3 className="footer-title">Quick Links</h3>
                  <ul>
                    <li>
                      <span href="about.html">About us</span>
                    </li>
                    <li>
                      <span href="service.html">Practice Area</span>
                    </li>
                    <li>
                      <span href="appointment.html">Appointment</span>
                    </li>
                    <li>
                      <span href="#">Terms & Conditions</span>
                    </li>
                    <li>
                      <span href="#">FAQ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom-area pt-20 pb-20">
          <div className="container text-center">
            <p>
              <span>&copy;</span> Copyright, 2025 All right reserved by <a href="https://www.justdial.com/Pune/Adv-Madhuri-Mundada-OppSalve-Garden-Kondhwa-Budruk/020PXX20-XX20-211225154405-I6G9_BZDET">Adv Madhuri M Mundada</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
