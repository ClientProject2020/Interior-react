import React from "react";
import BlogImg from "../../../assets/images/blog.jpg";
import Slider from "react-slick";
import { clock } from "react-icons-kit/ionicons/clock";
import { Icon } from "react-icons-kit";

const Blog = () => {
  const settings = {
    className: "center",
    // centerMode: true,
    infinite: true,
    centerPadding: "15",
    // slidesToShow: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 962,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blog section-padding">
      <div className="container">
        <div className="row" style={{ display: "block" }}>
          {/* <!-- Section Title --> */}
          <div className="section-title">
            <span>Blog</span>
            <h3>Latest news</h3>
          </div>
          {/* <!-- Carousel --> */}
          <Slider {...settings}>
            <div className="home-blog-padding">
              <div class="block-blog">
                <div class="blog-img">
                  <img src={BlogImg} alt="" />
                  <div class="sec">
                    <h6>Life Style</h6>
                  </div>
                </div>
                <div class="blog-content">
                  <a href="blog.html" tabindex="0">
                    <h3 class="mb-20">New Webdesign Trends Of The Year</h3>
                  </a>
                  <p
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 16,
                    }}
                  >
                    Maecenas volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                </div>

                <div class="blog-footer">
                  <span
                    style={{
                      margin: "10px 5px",
                    }}
                  >
                    <Icon icon={clock} />
                  </span>
                  <h5
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#666",
                      margin: "10px 0px",
                    }}
                  >
                    January 16, 2017
                  </h5>
                  <h6
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#666",
                      margin: "10px 0px",
                    }}
                  >
                    by <span style={{ color: "#000" }}>John Doe</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="home-blog-padding">
              <div
                class="block-blog defr overlay"
                style={{ background: `url(${BlogImg})` }}
              >
                <div class="blog-img">
                  <img src={BlogImg} alt="" />
                  <div class="sec">
                    <h6>Tech</h6>
                  </div>
                </div>
                <div class="blog-content">
                  <a href="blog.html" tabindex="0">
                    <h3 class="mb-20">New Webdesign Trends Of The Year</h3>
                  </a>
                  <p
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 16,
                    }}
                  >
                    Maecenas volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                </div>

                <div class="blog-footer">
                  <span
                    style={{
                      margin: "10px 5px",
                    }}
                  >
                    <Icon icon={clock} />
                  </span>
                  <h5
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#fff",
                      margin: "10px 0px",
                    }}
                  >
                    January 16, 2017
                  </h5>
                  <h6
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#fff",
                      margin: "10px 0px",
                    }}
                  >
                    by <span>John Doe</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="home-blog-padding">
              <div class="block-blog">
                <div class="blog-img">
                  <img src={BlogImg} alt="" />
                  <div class="sec">
                    <h6>Life Style</h6>
                  </div>
                </div>
                <div class="blog-content">
                  <a href="blog.html" tabindex="0">
                    <h3 class="mb-20">New Webdesign Trends Of The Year</h3>
                  </a>
                  <p
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 16,
                    }}
                  >
                    Maecenas volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                </div>

                <div class="blog-footer">
                  <span
                    style={{
                      margin: "10px 5px",
                    }}
                  >
                    <Icon icon={clock} />
                  </span>
                  <h5
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#666",
                      margin: "10px 0px",
                    }}
                  >
                    January 16, 2017
                  </h5>
                  <h6
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#666",
                      margin: "10px 0px",
                    }}
                  >
                    by <span style={{ color: "#000" }}>John Doe</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="home-blog-padding">
              <div
                class="block-blog defr overlay"
                style={{ background: `url(${BlogImg})` }}
              >
                <div class="blog-img">
                  <img src={BlogImg} alt="" />
                  <div class="sec">
                    <h6>Tech</h6>
                  </div>
                </div>
                <div class="blog-content">
                  <a href="blog.html" tabindex="0">
                    <h3 class="mb-20">New Webdesign Trends Of The Year</h3>
                  </a>
                  <p
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 16,
                    }}
                  >
                    Maecenas volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                </div>

                <div class="blog-footer">
                  <span
                    style={{
                      margin: "10px 5px",
                    }}
                  >
                    <Icon icon={clock} />
                  </span>
                  <h5
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#fff",
                      margin: "10px 0px",
                    }}
                  >
                    January 16, 2017
                  </h5>
                  <h6
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#fff",
                      margin: "10px 0px",
                    }}
                  >
                    by <span>John Doe</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="home-blog-padding">
              <div class="block-blog">
                <div class="blog-img">
                  <img src={BlogImg} alt="" />
                  <div class="sec">
                    <h6>Life Style</h6>
                  </div>
                </div>
                <div class="blog-content">
                  <a href="blog.html" tabindex="0">
                    <h3 class="mb-20">New Webdesign Trends Of The Year</h3>
                  </a>
                  <p
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 16,
                    }}
                  >
                    Maecenas volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                </div>

                <div class="blog-footer">
                  <span
                    style={{
                      margin: "10px 5px",
                    }}
                  >
                    <Icon icon={clock} />
                  </span>
                  <h5
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#666",
                      margin: "10px 0px",
                    }}
                  >
                    January 16, 2017
                  </h5>
                  <h6
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#666",
                      margin: "10px 0px",
                    }}
                  >
                    by <span style={{ color: "#000" }}>John Doe</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="home-blog-padding">
              <div
                class="block-blog defr overlay"
                style={{ background: `url(${BlogImg})` }}
              >
                <div class="blog-img">
                  <img src={BlogImg} alt="" />
                  <div class="sec">
                    <h6>Tech</h6>
                  </div>
                </div>
                <div class="blog-content">
                  <a href="blog.html" tabindex="0">
                    <h3 class="mb-20">New Webdesign Trends Of The Year</h3>
                  </a>
                  <p
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 16,
                    }}
                  >
                    Maecenas volutpat, diam enim sagittis quam, id porta quam.
                    Sed id dolor consectetur fermentum nibh volutpat, accumsan
                    purus.
                  </p>
                </div>

                <div class="blog-footer">
                  <span
                    style={{
                      margin: "10px 5px",
                    }}
                  >
                    <Icon icon={clock} />
                  </span>
                  <h5
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#fff",
                      margin: "10px 0px",
                    }}
                  >
                    January 16, 2017
                  </h5>
                  <h6
                    style={{
                      fontFamily: `'Didact Gothic', sans-serif`,
                      fontSize: 14,
                      color: "#fff",
                      margin: "10px 0px",
                    }}
                  >
                    by <span>John Doe</span>
                  </h6>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Blog;
