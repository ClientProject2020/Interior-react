import React from "react";
import contactus from "../../assets/images/contact-us.jpg";

import Submit from "../../assets/icons/submit.png";
import { ic_location_on } from "react-icons-kit/md/ic_location_on";
import { Icon } from "react-icons-kit";
import { clockO } from "react-icons-kit/fa/clockO";
import { mail } from "react-icons-kit/entypo/mail";
import { phone } from "react-icons-kit/entypo/phone";
import { plane } from "react-icons-kit/entypo/plane";

const ContactUs = () => {
  return (
    <>
      <div
        className="contact-bg"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 85,
        }}
      >
        {" "}
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
      </div>
      <section className="page-content">
        <div className="container">
          <div className="contact-page">
            <div className="contact-head">
              <p>
                Any questions or suggestions? <br /> Write us a message and we
                will contact you!
              </p>
            </div>
            <div className="contact-main">
              <div className="row">
                <div className="col-lg-5">
                  <div className="contact_info">
                    <h3 className="sub-title white">Contacts</h3>
                    <ul className="cl-list">
                      <li>
                        <span className="ci-icon">
                          <div style={{ color: "white" }}>
                            <Icon
                              icon={ic_location_on}
                              size={30}
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
                              icon={clockO}
                              size={30}
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
                              icon={mail}
                              size={30}
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
                              icon={phone}
                              size={30}
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
                </div>
                <div className="col-lg-7">
                  <div className="contact-main-form">
                    <form method="post" action="#" id="contact-form">
                      <div className="response"></div>
                      <div className="row">
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
                              <option>Los Angeles</option>
                              <option>Los Angeles</option>
                              <option>Los Angeles</option>
                              <option>Los Angeles</option>
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
                              placeholder="44 20 7700 0055"
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
