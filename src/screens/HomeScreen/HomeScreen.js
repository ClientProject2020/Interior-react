import React, { useState, useRef } from "react";
import { Animated } from "react-animated-css";
import PlaningComponent from "./Component/PlaningComponent";
import OurServicesComponent from "./Component/OurServicesComponent";
import AboutUs from "./Component/AboutUs";
import Blog from "./Component/Blog";

const HomeScreen = () => {
  const ref = useRef();
  return (
    <>
      <div
        className="homepage-bg"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          paddingBottom: 85,
        }}
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
            Welcome To Atul Interiors And Achitecture
          </div>
        </Animated>
        <Animated animationIn="zoomIn" isVisible={true}>
          <div
            style={{
              color: "#e6c663",
              fontSize: 14,
              justifyContent: "center",
              display: "flex",
              fontFamily: `'Josefin Sans', sans-serif`,
              textAlign: "center",
            }}
          >
            We are a Team of Excellent Designing and Building of Products
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
      <section id="about-us" ref={ref}>
        <AboutUs />
      </section>
      <section id="service">
        <OurServicesComponent />
      </section>
      <section className="block" id="planning">
        <PlaningComponent />
      </section>
      <section class="secondary blog section-padding" data-scroll-index="5" id="blog">
        <Blog />
      </section>
    </>
  );
};

export default HomeScreen;
