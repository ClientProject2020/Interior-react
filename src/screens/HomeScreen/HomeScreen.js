import React, { useState, useRef } from "react";
import { Animated } from "react-animated-css";
import PlaningComponent from "./Component/PlaningComponent";
import OurServicesComponent from "./Component/OurServicesComponent";
import AboutUs from "./Component/AboutUs";
import Blog from "./Component/Blog";
import { plane } from "react-icons-kit/entypo/plane";
import axios from "../../axios";
import { Spinner, Alert } from "react-bootstrap";
import { Icon } from "react-icons-kit";
import { Link } from "react-router-dom";
import { chevronUp } from "react-icons-kit/fa/chevronUp";
import FaqTestimonial from "./Component/FaqTestimonial";
const HomeScreen = () => {
  const ref = useRef();
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isLoading, setisLoading] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  const [response, setResponse] = useState();
  const [showError, setShowError] = useState({
    name: false,
    email: false,
    subject: false,
    phone: false,
  });
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <>
      <Icon
        icon={chevronUp}
        size={20}
        className="scrollTop"
        onClick={scrollTop}
        style={{
          // verticalAlign: "middle",
          height: 40,
          display: showScroll ? "flex" : "none",
        }}
      />
      <div
        className="homepage-bg"
        style={{
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // paddingBottom: 85,
          position: "relative",
        }}
      >
        <div
          className="contact-main-form"
          style={{
            height: "auto",
            position: "absolute",
            top: 50,
            left: 10,
            maxWidth: "600px",
            marginRight: 10,
            overflowY: "auto",
            padding: "20px 30px 20px",
            backgroundColor: "#FFFFFF",
          }}
        >
          <form method="post" action="#" id="contact-form">
            <div className="response"></div>
            <div className="row">
              <div className="col-sm-12" style={{ margin: "7px 0px" }}>
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
              <div className="col-sm-12" style={{ margin: "7px 0px" }}>
                <h3>
                  Get personalised interior designs with professional execution:
                </h3>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Name <span style={{ color: "red", fontSize: 16 }}>*</span>
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
                    <div style={{ color: "red" }}>This field is required. </div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Subject{" "}
                    <span style={{ color: "red", fontSize: 16 }}>*</span>
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
                    <div style={{ color: "red" }}>This field is required. </div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    E-mail <span style={{ color: "red", fontSize: 16 }}>*</span>
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
                    <div style={{ color: "red" }}>This field is required. </div>
                  )}
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <label>
                    Phone Number{" "}
                    <span style={{ color: "red", fontSize: 16 }}>*</span>
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
                    <div style={{ color: "red" }}>This field is required. </div>
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
              <div
                className="col-sm-2"
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                {/* <div className="form-submit"> */}
                <button
                  type="button"
                  className="btn btn-sm"
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
                        subject: formData.subject !== "" ? false : true,
                        phone: formData.phone !== "" ? false : true,
                      });
                    }
                  }}
                >
                  {/* <div style={{ borderRadius: "100%", color: "white" }}> */}
                  {isLoading && <Spinner animation="border" />} Submit
                  {/* </div> */}
                </button>
                {/* </div> */}
              </div>
            </div>
          </form>
        </div>
        <div
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            paddingBottom: 85,
            height: "100%",
          }}
          className="homepage-text-content"
        >
          <Animated animationIn="zoomIn" isVisible={true}>
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
              Welcome To Azure Homes And Consultants
            </div>
          </Animated>
          <Animated animationIn="zoomIn" isVisible={true}>
            <div
              style={{
                color: "#64a9a6",
                fontSize: 14,
                justifyContent: "center",
                display: "flex",
                fontFamily: `'Josefin Sans', sans-serif`,
                textAlign: "center",
              }}
            >
              <Link
                to="/contact"
                className="btn btn-sm"
                style={{ height: "auto", color: "#FFF" }}
              >
                Get personalised interior designs
              </Link>
              {/* Dedicated To Hardwork */}
            </div>
          </Animated>
          <Animated
            animationIn="zoomIn"
            isVisible={true}
            style={{
              display: "flex",
              justifyContent: "center",
              position: "absolute",
              left: "50%",
              bottom: 50,
            }}
          >
            <div
              id="mouse_icon"
              style={{ cursor: "pointer" }}
              onClick={() => {
                console.log(ref.current);
                ref.current.scrollIntoView({
                  block: "start",
                  behavior: "smooth",
                  inline: "nearest",
                });
              }}
            ></div>
          </Animated>
        </div>
      </div>
      <section id="about-us" ref={ref}>
        <AboutUs />
      </section>
      <section id="service">
        <OurServicesComponent />
      </section>
      <section className="block" id="planning">
        <PlaningComponent />
      </section>
      {/* <FaqTestimonial /> */}
      {/* <section
        class="secondary blog section-padding"
        data-scroll-index="5"
        id="blog"
      >
        <Blog />
      </section> */}
    </>
  );
};

export default HomeScreen;
