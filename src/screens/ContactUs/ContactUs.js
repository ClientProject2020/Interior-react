import React from "react";
import contactus from "../../assets/images/contact-us.jpg";

import Submit from "../../assets/icons/submit.png";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { Icon } from "react-icons-kit";
import { clock } from "react-icons-kit/ionicons/clock";
import { email } from "react-icons-kit/ionicons/email";
import { iosTelephone } from "react-icons-kit/ionicons/iosTelephone";
import { plane } from "react-icons-kit/entypo/plane";

const ContactUs = () => {
  return (
    <>
      {/* <div
        className="contact-bg"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 85,
        }}
      >
        <div
          style={{
            color: "white",
            fontSize: 45,
            justifyContent: "center",
            display: "flex",
            fontFamily: `'Josefin Sans', sans-serif`,
            textAlign: "center",
          }}
        >
          Contact Us
        </div>
      </div> */}
      <div class="page-heading">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1
                style={{
                  fontSize: 22,
                  fontFamily: `'Montserrat',sans-serif`,
                  fontWeight: "650",
                  marginBottom: 0,
                  lineHeight: "34px",
                }}
              >
                Contact Us
              </h1>
            </div>
            <div class="col-md-6">
              <ul class="bread-crumb">
                <li>
                  <a title="HOME" href="#">
                    Contact Us
                  </a>
                </li>
                <li class="separate">/</li>
                <li>Lorem Ipsum </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="page-content">
        <div className="" style={{ padding: "0px 55px" }}>
          <div className="contact-page">
            <div className="contact-head">
              <p>
                Any questions or suggestions? <br /> Write us a message and we
                will contact you!
              </p>
            </div>
            <div className="contact-main">
              <div className="row" style={{ padding: "0px 0px" }}>
                {/* <div className="col-lg-5">
                  <div className="contact_info">
                    <h3 className="sub-title white">Contacts</h3>
                    <ul className="cl-list">
                      <li>
                        <span className="ci-icon">
                          <div style={{ color: "white" }}>
                            <Icon
                              icon={ic_location_on}
                              size={25}
                              style={{
                                verticalAlign: "middle",
                                height: "auto",
                                display: "inline-block",
                              }}
                            />
                          </div>
                        </span>
                        <p className="para">
                          1556 Broadway, suite 416 <br />
                          New York, NY 10120 USA
                        </p>
                      </li>
                      <li>
                        <span className="ci-icon">
                          <div style={{ color: "white" }}>
                            <Icon
                              icon={clock}
                              size={25}
                              style={{
                                verticalAlign: "middle",
                                height: "auto",
                                display: "inline-block",
                              }}
                            />
                          </div>
                        </span>
                        <p className="para">
                          <span>Mon-Sat:</span> 9 am - 6 pm
                          <br />
                          <span>Sunday:</span> Closed
                        </p>
                      </li>
                      <li>
                        <span className="ci-icon">
                          <div style={{ color: "white" }}>
                            <Icon
                              icon={email}
                              size={25}
                              style={{
                                verticalAlign: "middle",
                                height: "auto",
                                display: "inline-block",
                              }}
                            />
                          </div>
                        </span>
                        <p className="para">in.design@gmail.com</p>
                      </li>
                      <li>
                        <span className="ci-icon">
                          <div style={{ color: "white" }}>
                            <Icon
                              icon={iosTelephone}
                              size={25}
                              style={{
                                verticalAlign: "middle",
                                height: "auto",
                                display: "inline-block",
                              }}
                            />
                          </div>
                        </span>
                        <p className="para">+44 20 7722 0088</p>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="col-lg-12">
                  <div className="contact-main-form">
                    <form method="post" action="#" id="contact-form">
                      <div className="response"></div>
                      <div className="row">
                        <div
                          className="col-sm-12"
                          style={{ margin: "7px 0px" }}
                        >
                          <h3>
                            Please fill in the form to get in touch with us:
                          </h3>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Name</label>
                            <input
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              type="text"
                              name="name"
                              className="form-control name"
                              placeholder="Daniel"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>What city are you from?</label>
                            <select
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              className="form-control"
                            >
                              <option>India</option>
                              <option>Nepal</option>
                              <option>Banladesh</option>
                              <option>America</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>E-mail</label>
                            <input
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              type="email"
                              name="email"
                              className="form-control email"
                              placeholder="Example@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>Phone Number</label>
                            <input
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              type="text"
                              name="name"
                              className="form-control"
                              placeholder="+91 20 7700 0055"
                            />
                          </div>
                        </div>
                        <div className="col-sm-10">
                          <div className="form-group">
                            <label>Message</label>
                            <textarea
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              className="form-control"
                              placeholder="Hello! I have this question..."
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <div className="form-submit">
                            <button type="button" id="submit">
                              <div
                                style={{ borderRadius: "100%", color: "white" }}
                              >
                                <Icon
                                  icon={plane}
                                  size={30}
                                  style={{
                                    verticalAlign: "middle",
                                    height: "auto",
                                    display: "inline-block",
                                  }}
                                />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
