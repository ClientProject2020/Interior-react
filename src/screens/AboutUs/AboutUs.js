import React from "react";
import signature from "../../assets/images/signature.png";
import aboutus2 from "../../assets/images/aboutus2.jpg";
import aboutus3 from "../../assets/images/aboutus3.jpg";
import aboutus4 from "../../assets/images/aboutus4.jpg";

const AboutUs = () => {
  return (
    <>
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
                About Us
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
                <li>About Us </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="about-section">
        <div className="auto-container">
          <h1 className="big-title">Interior</h1>
          <div className="title-box">
            <div className="row clearfix">
              <div className="col-lg-5 col-md-12 col-sm-12">
                <div className="sec-title">
                  <div className="inner-title">
                    <div className="title">Azure Homes And Consultants</div>
                    <h2>
                      We are pleased to introduce ourselves as one of the
                      leading contractors in the field of
                      Exterior/Interior/Civil works in the construction
                      Industry.
                    </h2>
                  </div>
                </div>
              </div>
              <div className="col-lg-7 col-md-12 col-sm-12">
                <div className="bold-text">
                  Being in the business from last three generations, we have
                  amassed immense skills and knowledge in the Field of
                  Interior/Exterior works for over 97 years of our 3
                  generations.
                </div>
                <div className="text">
                  First my grandfather Mr. Nawab Choudhary who started as a
                  Interior Labour specialized in doing P.O.P work and graced the
                  field for almost 30-40 years, then My father Mr. Ilyas
                  Choudhary , who learned the skills from his father, took the
                  specialization of P.O.P. and his marketing skills to become
                  the first contractor in our family and started taking contract
                  work of the individual flats. Then I Mr.Mohammed Ali Choudhary
                  under the able guidance of my father Mr.Ilyas Choudhary
                  learned the basic skills and expertise in the field of P.O.P.
                  work and then after completing few projects of the individual
                  flats, I along with my father started looking to expand our
                  field of operations and went on to meet the industry leaders
                  for proving us with the opportunity to expand our level of
                  work and also to share our expertise with them in the Interior
                  and Exterior works of the buildings like INTERIOR DECORATION,
                  EXTERIOR/INTERIOR PAINTS, FURNITURE AND FLOORING. We Formed
                  Deluxe Decorator Company in the year 1997.
                </div>
                {/* <div className="signature">
                <img src={signature} alt="" />
              </div> */}
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
                  <a href="#">
                    <img style={{ height: 267 }} src={aboutus4} alt="" />
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
                    <img style={{ height: 267 }} src={aboutus2} alt="" />
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
                  <a href="#">
                    <img style={{ height: 267 }} src={aboutus3} alt="" />
                  </a>
                </div>
                <div className="lower-box">
                  <h3>
                    <a href="#">With Signature Style</a>
                  </h3>
                  <div className="text">Some content here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="background-grey">
        <div class="container">
          <div class="heading-text heading-section">
            <h2>Profile</h2>
            <span class="lead">
              <p>
                At the heart of every organization are it’s culture, workplace
                practices, and most importantly it’s people. Deluxe Decorators
                workplace we aim to understand, translate and respond to all
                elements of a business. Through analyzing the impact of space on
                your people, technology and business processes we develop a full
                understanding of the objectives behind our relocation and
                refurbishment. This information becomes the blueprint for
                creating intelligent, hardworking solutions to address your
                business’s ongoing needs.
              </p>
              <p>
                We have developed a project management approach that focuses on
                minimizing the effect of a relocation or refurbishment on
                day-today business practices, enabling our team to focus on
                their core business activities. Our project managers are
                involved throughout every project ensuring successful execution
                and delivery within the agreed time scale and budget. This
                guarantees that the project is delivered to meet, and often
                exceed your expectations.
              </p>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
