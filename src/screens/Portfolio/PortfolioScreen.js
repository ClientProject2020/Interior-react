import React, { useState, useEffect } from "react";
import Image from "../../assets/images/portfolio.jpg";
import { Animated } from "react-animated-css";
import PortfolioDtlScreen from "./Component/PortfolioDtlScreen";
const PortfolioScreen = () => {
  const [visible, setVisible] = useState(true);
  const [selectedProject, setSelectedProject] = useState("all");
  const [selectedPortfolio, setSelectedPortfolio] = useState();
  const onFilter = (value) => {
    console.log(value);
    setSelectedProject(value);
    setVisible(!visible);
  };

  return (
    <>
      {!selectedPortfolio && (
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
                    Portfolio
                  </h1>
                </div>
                <div class="col-md-6">
                  <ul class="bread-crumb">
                    <li>
                      <a title="HOME" href="#">
                        Portfolio
                      </a>
                    </li>
                    <li class="separate">/</li>
                    <li>Lorem Ipsum </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <section className="container" style={{ paddingTop: "40px" }}>
            {/* <article
          class="gallerycontainer"
          style={{ backgroundColor: "#f5f1f0" }}
        >
          <div
            class="col-md-6 galleryimage projectimage"
            style={{
              position: "absolute",
              zIndex: 0,
              background: "none",
            }}
          >
            <a href="#"></a>
            <div
              class="backstretch"
              style={{
                left: 0,
                top: 0,
                overflow: "hidden",
                margin: 0,
                padding: 0,
                height: "100%",
                width: "100%",
                zIndex: -999998,
                position: "absolute",
                background: `url(${Image})`,
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </div>
          <div class="col-md-6 gallerycontent">
            <h4>
              <a
                href="single-project.html"
                style={{ color: "#e6c663", fontSize: 24 }}
              >
                De eram exercitat
              </a>
            </h4>
            <p style={{}}>
              Id nisi aliquip praetermissum. Cupidatat est esse, noster an
              quamquam non nulla. Cupidatat ea nostrud, irure nostrud pariatur,
              fugiat doctrina.
            </p>
            <a style={{}} href="single-project.html" class="readmore-button">
              View Project
            </a>
          </div>
        </article> */}
            <div class="portfolio-filter filter-2">
              <ul class="nav m-auto d-block text-center">
                <li class={`${selectedProject === "all" ? "active" : ""}`}>
                  <a
                    onClick={() => {
                      onFilter("all");
                    }}
                    class="portfolio-filter-item"
                  >
                    All
                  </a>
                </li>
                <li class={`${selectedProject === "test" ? "active" : ""}`}>
                  <a
                    onClick={() => onFilter("test")}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-21"
                  >
                    Architecture
                  </a>
                </li>
                <li class={`${selectedProject === "test1" ? "active" : ""}`}>
                  <a
                    onClick={() => onFilter("test1")}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-23"
                  >
                    Commercial
                  </a>
                </li>
                <li class={`${selectedProject === "chart" ? "active" : ""}`}>
                  <a
                    onClick={() => onFilter("chart")}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-24"
                  >
                    Corporate
                  </a>
                </li>
                <li class={`${selectedProject === "tile" ? "active" : ""}`}>
                  <a
                    onClick={() => onFilter("tile")}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-25"
                  >
                    Interior
                  </a>
                </li>
                <li class={`${selectedProject === "tile1" ? "active" : ""}`}>
                  <a
                    onClick={() => onFilter("tile1")}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-27"
                  >
                    Residential
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={visible}
                className="col-md-4"
                animationOutDuration="100"
                style={{ cursor: "pointer" }}
              >
                <article
                  key="c"
                  id="c"
                  class="vc-portfolio portfolio-creative portfolio-filter-21 grid-visible chart"
                  onClick={() => setSelectedPortfolio(true)}
                >
                  <div class=" portfolio-wrap" data-css='""'>
                    <div class="portfolio-img portfolio-overlay-wrap">
                      <div class="portfolio-overlay text-right overlay-top-right">
                        <div class="portfolio-title">
                          <h6>
                            <a href="http://demo.zozothemes.com/gintol/portfolio/corporate-office/">
                              Corporate Office
                            </a>
                          </h6>
                        </div>
                        <div class="portfolio-categories">
                          <span>Architecture</span>
                        </div>
                      </div>
                      <a class="image-gallery-link">
                        <img
                          //   height="600"
                          //   width="600"
                          class="img-fluid cpt-img"
                          alt="Corporate Office"
                          src="http://demo.zozothemes.com/gintol/wp-content/uploads/sites/32/2019/01/corp2-600x600.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={visible}
                className="col-md-4"
                animationOutDuration="100"
                style={{ cursor: "pointer" }}
              >
                <article
                  key="c"
                  id="c"
                  class=" vc-portfolio portfolio-creative portfolio-filter-21 grid-visible chart"
                  style={{}}
                >
                  <div class=" portfolio-wrap" data-css='""'>
                    <div class="portfolio-img portfolio-overlay-wrap">
                      <div class="portfolio-overlay text-right overlay-top-right">
                        <div class="portfolio-title">
                          <h6>
                            <a>Industry Layout</a>
                          </h6>
                        </div>
                        <div class="portfolio-categories">
                          <span>Commercial Coperate</span>
                        </div>
                      </div>
                      <a class="image-gallery-link">
                        <img
                          //   height="600"
                          //   width="600"
                          class="img-fluid cpt-img"
                          alt="Corporate Office"
                          src="http://demo.zozothemes.com/gintol/wp-content/uploads/sites/32/2019/01/int4-600x600.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </Animated>
              <Animated
                animationIn="fadeIn"
                animationOut="fadeOut"
                isVisible={visible}
                className="col-md-4"
                animationOutDuration="100"
                style={{ cursor: "pointer" }}
              >
                <article
                  key="c"
                  id="c"
                  class="vc-portfolio portfolio-creative portfolio-filter-21 grid-visible chart"
                  style={{ cursor: "pointer" }}
                >
                  <div class=" portfolio-wrap" data-css='""'>
                    <div class="portfolio-img portfolio-overlay-wrap">
                      <div class="portfolio-overlay text-right overlay-top-right">
                        <div class="portfolio-title">
                          <h6>
                            <a>Forest Side Villa</a>
                          </h6>
                        </div>
                        <div class="portfolio-categories">
                          <span>Residential</span>
                        </div>
                      </div>
                      <a class="image-gallery-link">
                        <img
                          //   height="600"
                          //   width="600"
                          class="img-fluid cpt-img"
                          alt="Corporate Office"
                          src="http://demo.zozothemes.com/gintol/wp-content/uploads/sites/32/2019/01/rrr-600x600.jpg"
                        />
                      </a>
                    </div>
                  </div>
                </article>
              </Animated>
            </div>
          </section>
        </>
      )}
      {selectedPortfolio && <PortfolioDtlScreen />}
    </>
  );
};

export default PortfolioScreen;
