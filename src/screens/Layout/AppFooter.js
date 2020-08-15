import React from "react";

const AppFooter = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="icon-box effect small clean">
                <div className="icon">
                  <a href="#">
                    <i class="far fa-clock"></i>
                  </a>
                </div>
                <h3>Working Days</h3>
                <p>
                  <strong>Monday - Friday</strong>
                  <br />
                  10:00 AM - 11:00 PM
                </p>
                <p>
                  <strong>Saturday - Sunday</strong>
                  <br />
                  10:00 AM - 04:00 PM
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box effect small clean">
                <div className="icon">
                  <a href="#">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                </div>
                <h3>Office Location</h3>
                <p>
                  <strong>Office Address:</strong>
                  <br /> 795 Folsom Ave, Suite 600
                  <br /> San Francisco, CA 94107
                  <br />
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="icon-box effect small clean">
                <div className="icon">
                  <a href="#">
                    <i
                      class="fa fa-phone"
                      style={{ transform: "rotate(100deg)" }}
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
                <h3>Office Contact</h3>
                <p>
                  <strong>Phone:</strong>
                  <br /> (123) 456-7890
                  <br /> (987) 654-3210
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="social-icons social-icons-colored float-left">
                <ul>
                  <li className="social-facebook">
                    <a href="#">
                    <i class="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="social-twitter">
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-vimeo">
                    <a href="#">
                      <i className="fab fa-vimeo"></i>
                    </a>
                  </li>
                  <li className="social-youtube">
                    <a href="#">
                      <i className="fab fa-youtube"></i>
                    </a>
                  </li>
                  <li className="social-pinterest">
                    <a href="#">
                      <i className="fab fa-pinterest"></i>
                    </a>
                  </li>
                  <li className="social-gplus">
                    <a href="#">
                      <i className="fab fa-google-plus-g"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyright-text text-center">
                &copy; 2019 POLO - Responsive Multi-Purpose HTML5 Template. All
                Rights Reserved.
                <a href="http://www.inspiro-media.com" target="_blank">
                  INSPIRO
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
