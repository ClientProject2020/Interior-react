import React from "react";
import { Icon } from "react-icons-kit";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { behance } from "react-icons-kit/fa/behance";
import { pinterest } from "react-icons-kit/entypo/pinterest";

const AppFooter = () => {
  return (
    // <footer id="footer">
    //   <div className="footer-content">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-md-4">
    //           <div className="icon-box effect small clean">
    //             <div className="icon">
    //               <a href="#">
    //                 <i class="far fa-clock"></i>
    //               </a>
    //             </div>
    //             <h3>Working Days</h3>
    //             <p>
    //               <strong>Monday - Friday</strong>
    //               <br />
    //               10:00 AM - 11:00 PM
    //             </p>
    //             <p>
    //               <strong>Saturday - Sunday</strong>
    //               <br />
    //               10:00 AM - 04:00 PM
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-md-4">
    //           <div className="icon-box effect small clean">
    //             <div className="icon">
    //               <a href="#">
    //                 <i className="fas fa-map-marker-alt"></i>
    //               </a>
    //             </div>
    //             <h3>Office Location</h3>
    //             <p>
    //               <strong>Office Address:</strong>
    //               <br /> 795 Folsom Ave, Suite 600
    //               <br /> San Francisco, CA 94107
    //               <br />
    //               <br />
    //             </p>
    //           </div>
    //         </div>
    //         <div className="col-md-4">
    //           <div className="icon-box effect small clean">
    //             <div className="icon">
    //               <a href="#">
    //                 <i
    //                   class="fa fa-phone"
    //                   style={{ transform: "rotate(100deg)" }}
    //                   aria-hidden="true"
    //                 ></i>
    //               </a>
    //             </div>
    //             <h3>Office Contact</h3>
    //             <p>
    //               <strong>Phone:</strong>
    //               <br /> (123) 456-7890
    //               <br /> (987) 654-3210
    //               <br />
    //             </p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="copyright-content">
    //     <div className="container">
    //       <div className="row">
    //         <div className="col-lg-6">
    //           <div className="social-icons social-icons-colored float-left">
    //             <ul>
    //               <li className="social-facebook">
    //                 <a href="#">
    //                 <i class="fab fa-facebook-f"></i>
    //                 </a>
    //               </li>
    //               <li className="social-twitter">
    //                 <a href="#">
    //                   <i className="fab fa-twitter"></i>
    //                 </a>
    //               </li>
    //               <li className="social-vimeo">
    //                 <a href="#">
    //                   <i className="fab fa-vimeo"></i>
    //                 </a>
    //               </li>
    //               <li className="social-youtube">
    //                 <a href="#">
    //                   <i className="fab fa-youtube"></i>
    //                 </a>
    //               </li>
    //               <li className="social-pinterest">
    //                 <a href="#">
    //                   <i className="fab fa-pinterest"></i>
    //                 </a>
    //               </li>
    //               <li className="social-gplus">
    //                 <a href="#">
    //                   <i className="fab fa-google-plus-g"></i>
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </div>
    //         <div className="col-lg-6">
    //           <div className="copyright-text text-center">
    //             &copy; 2019 POLO - Responsive Multi-Purpose HTML5 Template. All
    //             Rights Reserved.
    //             <a href="http://www.inspiro-media.com" target="_blank">
    //               INSPIRO
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>
    <footer class="main-footer dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-3">
            <div class="item abot">
              <div class="logo-footer mb-20">
                <a class="logo">
                  <img src="img/logo-light.png" alt="" />
                </a>
              </div>
              <p>
                Our team takes over everything, from an idea and concept
                development to realization.
              </p>
              <div class="social-icon">
                <a>
                  <Icon icon={socialFacebook} style={{ color: "#fff" }} />
                </a>
                <a>
                  <Icon icon={socialTwitter} style={{ color: "#fff" }} />
                </a>
                <a>
                  <Icon icon={behance} style={{ color: "#fff" }} />
                </a>
                <a>
                  <Icon icon={pinterest} style={{ color: "#fff" }} />
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-2 offset-lg-1">
            <div class="item usful-links">
              <div class="fothead">
                <h6>Useful Links</h6>
              </div>
              <ul>
                <li>
                  <i
                    class="fas fa-chevron-right"
                    style={{
                      fontSize: 10,
                    }}
                  ></i>
                  &nbsp;&nbsp;
                  <a
                    style={{
                      fontFamily: ` 'Montserrat', sans-serif`,
                    }}
                  >
                    Interior Design
                  </a>
                </li>
                <li>
                  <i
                    class="fas fa-chevron-right"
                    style={{
                      fontSize: 10,
                    }}
                  ></i>
                  &nbsp;&nbsp;
                  <a
                    style={{
                      fontFamily: ` 'Montserrat', sans-serif`,
                    }}
                  >
                    Design Agency
                  </a>
                </li>
                <li>
                  <i
                    class="fas fa-chevron-right"
                    style={{
                      fontSize: 10,
                    }}
                  ></i>
                  &nbsp;&nbsp;
                  <a
                    style={{
                      fontFamily: ` 'Montserrat', sans-serif`,
                    }}
                  >
                    Mattress Shop
                  </a>
                </li>
                <li>
                  <i
                    class="fas fa-chevron-right"
                    style={{
                      fontSize: 10,
                    }}
                  ></i>
                  &nbsp;&nbsp;
                  <a
                    style={{
                      fontFamily: ` 'Montserrat', sans-serif`,
                    }}
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="item fotcont">
              <div class="fothead">
                <h6>Call</h6>
              </div>
              <p>+7(111)123456789</p>
              <p>+1(000)987654321</p>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="item fotcont">
              <div class="fothead">
                <h6>Write</h6>
              </div>
              <p>contact@Archo.com</p>
              <p>Username@website.com</p>
            </div>
          </div>
          <div class="col-lg-2">
            <div class="item fotcont">
              <div class="fothead">
                <h6>Visit</h6>
              </div>
              <p>
                B17 Princess Road, London, Greater London NW18JR, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="sub-footer">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="text-left">
                <p>
                  © 2020, by Lorem Ipsum ans lor lump{" "}
                  <a href="https://themeforest.net/user/ui-themez">simpLo</a>.
                </p>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="text-right">
                <p>All right reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
