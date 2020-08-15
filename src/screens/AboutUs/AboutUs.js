import React from "react";
import signature from "../../assets/images/signature.png";
import aboutus from "../../assets/images/aboutus.jpg";

const AboutUs = () => {
  return (
    <section className="about-section">
      <div className="auto-container">
        <h1 className="big-title">Interior</h1>
        <div className="title-box">
          <div className="row clearfix">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="sec-title">
                <div className="inner-title">
                  <div className="title">About Interior</div>
                  <h2>
                    We are passionate and always produce better results for
                    interiors.
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="bold-text">
                Sit eit malis civibus kase iuvaret blandit no nec, ipsum volumus
                indis aissentias referrentur vix euno utamur vivendo
                interpretaris quo
              </div>
              <div className="text">
                Beyond more stoic this along goodness hey this this wow manatee
                mongoose one as since a far flustered impressive manifest far
                crud opened inside owing punitively around forewent and after
                wasteful telling sprang coldly and spoke less clients. Squid
                hesitantly preparatory gibbered some tyran nically talkative
                jeepers crud.
              </div>
              <div className="signature">
                <img src={signature} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row clearfix">
          <div className="services-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp animated"
              data-wow-delay="0ms"
              data-wow-duration="1500ms"
              style={{
                visibility: "visible",
                animationDelay: "0ms",
                animationDuration: "1500ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="image">
                <a href="service-interior.html">
                  <img src={aboutus} alt="" />
                </a>
              </div>
              <div className="lower-box">
                <h3>
                  <a href="#" className="lower-box-title">
                    Committed to Work
                  </a>
                </h3>
                <div className="text"> Duo hinc omnis maluisset</div>
              </div>
            </div>
          </div>

          <div className="services-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp animated"
              data-wow-delay="300ms"
              data-wow-duration="1500ms"
              style={{
                visibility: "visible",
                animationDelay: "0ms",
                animationDuration: "1500ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="image">
                <a href="service-interior.html">
                  <img src={aboutus} alt="" />
                </a>
              </div>
              <div className="lower-box">
                <h3>
                  <a href="service-interior.html">Live Detailed Ideas</a>
                </h3>
                <div className="text"> Duo hinc omnis maluisset</div>
              </div>
            </div>
          </div>

          <div className="services-block col-lg-4 col-md-6 col-sm-12">
            <div
              className="inner-box wow fadeInUp animated"
              data-wow-delay="600ms"
              data-wow-duration="1500ms"
              style={{
                visibility: "visible",
                animationDelay: "0ms",
                animationDuration: "1500ms",
                animationName: "fadeInUp",
              }}
            >
              <div className="image">
                <a href="service-interior.html">
                  <img src={aboutus} alt="" />
                </a>
              </div>
              <div className="lower-box">
                <h3>
                  <a href="service-interior.html">With Signature Style</a>
                </h3>
                <div className="text">Some content here</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
