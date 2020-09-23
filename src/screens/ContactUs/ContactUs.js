import React, { useState, useEffect } from "react";
import { Icon } from "react-icons-kit";
import { plane } from "react-icons-kit/entypo/plane";
import axios from "../../axios";
import { Spinner, Alert } from "react-bootstrap";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setisLoading] = useState(false);

  const [response, setResponse] = useState();
  const [showError, setShowError] = useState({
    name: false,
    email: false,
    subject: false,
    phone: false,
  });
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
                    Home
                  </a>
                </li>
                <li class="separate">/</li>
                <li> Contact Us</li>
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
                          {response && (
                            <Alert variant={response}>
                              <div style={{ color: "#fff" }}>
                                {response === "success"
                                  ? "We will contact you soon"
                                  : "There was a problem faced please try again later"}
                              </div>
                            </Alert>
                          )}
                        </div>
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
                            <label>
                              Name{" "}
                              <span style={{ color: "red", fontSize: 16 }}>
                                *
                              </span>
                            </label>
                            <input
                              required={true}
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              value={formData.name}
                              type="text"
                              name="name"
                              className="form-control name"
                              placeholder="Daniel"
                              onChange={(e) => {
                                if (e.target.value !== "") {
                                  setShowError({ ...showError, name: false });
                                }
                                setFormData({
                                  ...formData,
                                  name: e.target.value,
                                });
                              }}
                            />
                            {showError.name && (
                              <div style={{ color: "red" }}>
                                This field is required.{" "}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>
                              Subject{" "}
                              <span style={{ color: "red", fontSize: 16 }}>
                                *
                              </span>
                            </label>
                            <input
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              type="subject"
                              value={formData.subject}
                              name="subject"
                              className="form-control"
                              placeholder="Enter Your Subject"
                              onChange={(e) => {
                                if (e.target.value !== "") {
                                  setShowError({
                                    ...showError,
                                    subject: false,
                                  });
                                }
                                setFormData({
                                  ...formData,
                                  subject: e.target.value,
                                });
                              }}
                            />
                            {showError.subject && (
                              <div style={{ color: "red" }}>
                                This field is required.{" "}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>
                              E-mail{" "}
                              <span style={{ color: "red", fontSize: 16 }}>
                                *
                              </span>
                            </label>
                            <input
                              style={{
                                border: 0,
                                backgroundColor: "transparent",
                                fontSize: "16px",
                                borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
                              }}
                              type="email"
                              value={formData.email}
                              name="email"
                              required={true}
                              className="form-control email"
                              placeholder="Example@gmail.com"
                              onChange={(e) => {
                                if (e.target.value !== "") {
                                  setShowError({
                                    ...showError,
                                    email: false,
                                  });
                                }
                                setFormData({
                                  ...formData,
                                  email: e.target.value,
                                });
                              }}
                            />
                            {showError.email && (
                              <div style={{ color: "red" }}>
                                This field is required.{" "}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-group">
                            <label>
                              Phone Number{" "}
                              <span style={{ color: "red", fontSize: 16 }}>
                                *
                              </span>
                            </label>
                            <input
                              required={true}
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
                              value={formData.phone}
                              onChange={(e) => {
                                if (e.target.value !== "") {
                                  setShowError({
                                    ...showError,
                                    phone: false,
                                  });
                                }
                                setFormData({
                                  ...formData,
                                  phone: e.target.value,
                                });
                              }}
                            />
                            {showError.phone && (
                              <div style={{ color: "red" }}>
                                This field is required.{" "}
                              </div>
                            )}
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
                              value={formData.message}
                              onChange={(e) => {
                                setFormData({
                                  ...formData,
                                  message: e.target.value,
                                });
                              }}
                            ></textarea>
                          </div>
                        </div>
                        <div className="col-sm-2">
                          <div className="form-submit">
                            <button
                              type="button"
                              id="submit"
                              onClick={() => {
                                console.log(formData);

                                if (
                                  formData.email !== "" &&
                                  formData.name !== "" &&
                                  formData.subject !== "" &&
                                  formData.phone !== ""
                                ) {
                                  setisLoading(true);
                                  axios
                                    .post("/mail/sendMail", formData)
                                    .then((data) => {
                                      setTimeout(() => {
                                        setResponse("success");
                                        setisLoading(false);
                                      }, 1500);
                                      console.log("data", data);
                                    })
                                    .catch((err) => {
                                      setResponse("danger");
                                      setisLoading(false);
                                    });
                                } else {
                                  setShowError({
                                    name: formData.name !== "" ? false : true,
                                    email: formData.email !== "" ? false : true,
                                    subject:
                                      formData.subject !== "" ? false : true,
                                    phone: formData.phone !== "" ? false : true,
                                  });
                                }
                              }}
                            >
                              <div
                                style={{ borderRadius: "100%", color: "white" }}
                              >
                                {isLoading ? (
                                  <Spinner animation="border" />
                                ) : (
                                  <Icon
                                    icon={plane}
                                    size={30}
                                    style={{
                                      verticalAlign: "middle",
                                      height: "auto",
                                      display: "inline-block",
                                    }}
                                  />
                                )}
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
