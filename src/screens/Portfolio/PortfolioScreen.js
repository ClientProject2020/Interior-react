import React, { useState, useEffect } from "react";
import Image from "../../assets/images/portfolio.jpg";
import { Animated } from "react-animated-css";
import PortfolioDtlScreen from "./Component/PortfolioDtlScreen";
import aboutus4 from "../../assets/images/aboutus2.jpg";
import aboutus5 from "../../assets/images/aboutus3.jpg";

import architechture from "../../assets/images/architechture.jpg";
import architechture1 from "../../assets/images/architechture1.jpg";

import office from "../../assets/images/office.jpg";
import office1 from "../../assets/images/office1.jpg";
const PortfolioScreen = () => {
  const [visible, setVisible] = useState(true);
  const [selectedProject, setSelectedProject] = useState("all");
  const [selectedPortfolio, setSelectedPortfolio] = useState();
  const onFilter = (value) => {
    console.log(value);
    setVisible(false);
    setSelectedProject(value);
    setVisible(true);
  };

  const portfolio = [
    {
      image:
        "http://demo.zozothemes.com/gintol/wp-content/uploads/sites/32/2019/01/corp2-600x600.jpg",
      title: "Corporate Office",
      type: "Architecture",
      slideImage: [
        {
          key: 1,
          imageSrc: architechture,
        },
        {
          key: 2,
          imageSrc: architechture1,
        },
      ],
      contentHead:
        "A multitask profession which creates any land in beautiful creation",
      content: (
        <p>
          Designers think everything done by someone else is awful, and that
          they could do it better themselves, which explains why I designed my
          own living room carpet, I suppose. the architect represents neither a
          Dionysian nor an Apollinian condition: here it is the mighty act of
          will, the will which moves mountains, the intoxication of the strong
          will, which demands artistic expression. The most powerful men have
          always inspired the architects; the architect has always been
          influenced by power.
        </p>
      ),
    },
    {
      image:
        "http://demo.zozothemes.com/gintol/wp-content/uploads/sites/32/2019/01/int4-600x600.jpg",
      title: "Corporate Office",
      type: "Corporate",
      slideImage: [
        {
          key: 1,
          imageSrc: office,
        },
        {
          key: 2,
          imageSrc: office1,
        },
      ],
      contentHead:
        "A multitask profession which creates any land in beautiful creation",
      content: (
        <p>
          Designers think everything done by someone else is awful, and that
          they could do it better themselves, which explains why I designed my
          own living room carpet, I suppose. the architect represents neither a
          Dionysian nor an Apollinian condition: here it is the mighty act of
          will, the will which moves mountains, the intoxication of the strong
          will, which demands artistic expression. The most powerful men have
          always inspired the architects; the architect has always been
          influenced by power.
        </p>
      ),
    },
    {
      image:
        "http://demo.zozothemes.com/gintol/wp-content/uploads/sites/32/2019/01/rrr-600x600.jpg",
      title: "Corporate Office",
      type: "Interior",
      slideImage: [
        {
          key: 1,
          imageSrc: aboutus4,
        },
        {
          key: 2,
          imageSrc: aboutus5,
        },
      ],
      contentHead:
        "A multitask profession which creates any land in beautiful creation",
      content: (
        <p>
          Designers think everything done by someone else is awful, and that
          they could do it better themselves, which explains why I designed my
          own living room carpet, I suppose. the architect represents neither a
          Dionysian nor an Apollinian condition: here it is the mighty act of
          will, the will which moves mountains, the intoxication of the strong
          will, which demands artistic expression. The most powerful men have
          always inspired the architects; the architect has always been
          influenced by power.
        </p>
      ),
    },
  ];
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
                      {
                        onFilter("all");
                      }
                    }}
                    class="portfolio-filter-item"
                  >
                    All
                  </a>
                </li>
                <li
                  class={`${
                    selectedProject === "Architecture" ? "active" : ""
                  }`}
                >
                  <a
                    onClick={() => {
                      onFilter("Architecture");
                    }}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-21"
                  >
                    Architecture
                  </a>
                </li>
                <li
                  class={`${selectedProject === "Commercial" ? "active" : ""}`}
                >
                  <a
                    onClick={() => {
                      onFilter("Commercial");
                    }}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-23"
                  >
                    Commercial
                  </a>
                </li>
                <li
                  class={`${selectedProject === "Corporate" ? "active" : ""}`}
                >
                  <a
                    onClick={() => {
                      onFilter("Corporate");
                    }}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-24"
                  >
                    Corporate
                  </a>
                </li>
                <li class={`${selectedProject === "Interior" ? "active" : ""}`}>
                  <a
                    onClick={() => {
                      onFilter("Interior");
                    }}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-25"
                  >
                    Interior
                  </a>
                </li>
                <li
                  class={`${selectedProject === "Residential" ? "active" : ""}`}
                >
                  <a
                    onClick={() => {
                      onFilter("Residential");
                    }}
                    class="portfolio-filter-item"
                    data-filter=".portfolio-filter-27"
                  >
                    Residential
                  </a>
                </li>
              </ul>
            </div>
            <div className="row">
              {portfolio
                .filter(
                  (ii) =>
                    selectedProject === "all" || ii.type === selectedProject
                )
                .map((item) => {
                  return (
                    <Animated
                      key={item.key}
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
                        onClick={() => {
                          setSelectedProject(item.type);
                          setSelectedPortfolio(item);
                        }}
                      >
                        <div class=" portfolio-wrap" data-css='""'>
                          <div class="portfolio-img portfolio-overlay-wrap">
                            <div class="portfolio-overlay text-right overlay-top-right">
                              <div class="portfolio-title">
                                <h6>
                                  <a href="#">{item.title}</a>
                                </h6>
                              </div>
                              <div class="portfolio-categories">
                                <span>{item.type}</span>
                              </div>
                            </div>
                            <a class="image-gallery-link">
                              <img
                                //   height="600"
                                //   width="600"
                                class="img-fluid cpt-img"
                                alt={item.title}
                                src={item.image}
                              />
                            </a>
                          </div>
                        </div>
                      </article>
                    </Animated>
                  );
                })}
            </div>
          </section>
        </>
      )}
      {selectedPortfolio && (
        <>
          <PortfolioDtlScreen portfolio={selectedPortfolio} />
          <div className="container" style={{ textAlign: "end" }}>
            <button
              type="button"
              class="btn"
              onClick={() => setSelectedPortfolio()}
            >
              Back
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default PortfolioScreen;
