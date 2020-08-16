import React, { useState, useContext } from "react";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
import { filePdfO } from "react-icons-kit/fa/filePdfO";
import {
  Accordion,
  Card,
  useAccordionToggle,
  AccordionContext,
} from "react-bootstrap";

const ServiceScreen = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(1);

  const ContextAwareToggle = ({ children, eventKey, callback, type }) => {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <>
        {type === "accordion-question" ? (
          <div
            style={{
              display: "flex",
              cursor: "pointer",
            }}
            className={`accordian-header ${isCurrentEventKey ? "active" : ""}`}
            onClick={decoratedOnClick}
          >
            <div
              className="accordian-header-title"
              style={{ flex: 1, color: isCurrentEventKey ? "#e6c663" : "#777" }}
            >
              {children}
            </div>
            <div className="accordian-arrow">
              <Icon icon={ic_keyboard_arrow_right} />
            </div>
          </div>
        ) : (
          <div
            className="accordian-header"
            style={{
              display: "flex",
              cursor: "pointer",
            }}
            onClick={decoratedOnClick}
          >
            <div
              className="accordian-header-title"
              style={{
                flex: 1,
                color: isCurrentEventKey ? "#e6c663" : "#727272",
                fontSize: 13,
                fontFamily: `'Montserrat',sans-serif`,
                textTransform: "uppercase",
              }}
            >
              {children}
            </div>
            <div className="accordian-arrow" style={{ color: "#aaa" }}>
              <Icon icon={ic_keyboard_arrow_right} />
            </div>
          </div>
        )}
      </>
    );
  };

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
                Solar Systems
              </h1>
            </div>
            <div class="col-md-6">
              <ul class="bread-crumb">
                <li>
                  <a title="HOME" href="#">
                    Service
                  </a>
                </li>
                <li class="separate">/</li>
                <li>Lorem Ipsum </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class="single-service">
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <div class="sidebar" style={{ padding: 0 }}>
                <div id="text-3" class="widget widget_text">
                  <div class="textwidget">
                    <div class="widget vertical-menu">
                      <Accordion defaultActiveKey="">
                        <div className="accordian-sidebar">
                          <ContextAwareToggle
                            type="accordian-sidebar"
                            eventKey="0"
                          >
                            Residential
                          </ContextAwareToggle>
                          <Accordion.Collapse eventKey="0">
                            <div
                              className="accordion-content"
                              style={{
                                background: "transparent",
                                padding: "2px 15px",
                              }}
                            >
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "#aaa",
                                    padding: " 15px 20px 15px 0",
                                  }}
                                >
                                  <Icon icon={ic_keyboard_arrow_right} />
                                </div>
                                <div
                                  className="accordian-header"
                                  style={{
                                    display: "flex",
                                    cursor: "pointer",
                                  }}
                                >
                                  <div
                                    className="accordian-header-title"
                                    style={{
                                      flex: 1,
                                      color: "#777",
                                    }}
                                  >
                                    Mumbai
                                  </div>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "#aaa",
                                    padding: " 15px 20px 15px 0",
                                  }}
                                >
                                  <Icon icon={ic_keyboard_arrow_right} />
                                </div>
                                <div
                                  className="accordian-header"
                                  style={{
                                    display: "flex",
                                    cursor: "pointer",
                                  }}
                                >
                                  <div
                                    className="accordian-header-title"
                                    style={{
                                      flex: 1,
                                      color: "#777",
                                    }}
                                  >
                                    Thane
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                      <ul>
                        <li>
                          <a
                            href="service_interior_renovation.html"
                            title="Interior Renovation"
                          >
                            Interior Renovation
                            <Icon icon={ic_keyboard_arrow_right} />
                          </a>
                        </li>
                        <li class="selected">
                          <a
                            href="service_design_build.html"
                            title="Design and Build"
                          >
                            Design and Build
                            <Icon icon={ic_keyboard_arrow_right} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_tiling_painting.html"
                            title="Tiling and Painting"
                          >
                            Tiling and Painting
                            <Icon icon={ic_keyboard_arrow_right} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_paver_walkways.html"
                            title="Paver Walkways"
                          >
                            Paver Walkways
                            <Icon icon={ic_keyboard_arrow_right} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_household_repairs.html"
                            title="Household Repair"
                          >
                            Household Repair
                            <Icon icon={ic_keyboard_arrow_right} />
                          </a>
                        </li>
                        <li>
                          <a
                            href="service_solar_systems.html"
                            title="Solar Systems"
                          >
                            Solar Systems
                            <Icon icon={ic_keyboard_arrow_right} />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div id="text-4" class="widget widget_text">
                  <div class="widget-title">
                    <h4>Brochures</h4>
                  </div>
                  <div class="textwidget">
                    <ul>
                      <li>
                        <a href="#" class="button-brochures">
                          <Icon icon={filePdfO} />
                          Download.pdf
                        </a>
                      </li>
                      <li>
                        <a href="#" class="button-brochures">
                          <Icon icon={filePdfO} />
                          Download.doc
                        </a>
                      </li>
                      <li>
                        <a href="#" class="button-brochures">
                          <Icon icon={filePdfO} />
                          Download.ppt
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div class="services-wrapp">
                <div class="row">
                  <div class="col-md-6">
                    <div class="services-post">
                      <img
                        src="http://shtheme.net/demosd/buildplus/wp-content/themes/buildplus/images/services/single11.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="services-post">
                      <img
                        src="http://shtheme.net/demosd/buildplus/wp-content/themes/buildplus/images/services/single12.jpg"
                        alt="img"
                      />
                    </div>
                  </div>
                </div>
                <div class="services-post">
                  <h4>Service Overview</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p></p>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p></p>
                </div>
                <div class="row">
                  <div class="col-md-6">
                    <div class="services-post">
                      <h4>Brochures</h4>
                      <p>
                        <img
                          src="http://shtheme.net/demosd/buildplus/wp-content/themes/buildplus/images/services/single3.jpg"
                          alt="img"
                        />
                      </p>
                      <ul>
                        <li>
                          <a href="#" class="button-brochures">
                            <Icon icon={filePdfO} />
                            Download.pdf
                          </a>
                        </li>
                        <li>
                          <a href="#" class="button-brochures">
                            <Icon icon={filePdfO} />
                            Download.doc
                          </a>
                        </li>
                        <li>
                          <a href="#" class="button-brochures">
                            <Icon icon={filePdfO} />
                            Download.ppt
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="services-post">
                      <h4>Our Process</h4>
                      <Accordion defaultActiveKey="0">
                        <div className="bootstrap-accordian-style">
                          <ContextAwareToggle
                            type="accordion-question"
                            eventKey="0"
                          >
                            01 Planning
                          </ContextAwareToggle>
                          <Accordion.Collapse eventKey="0">
                            <div
                              className="accordion-content"
                              style={{ background: "transparent" }}
                            >
                              Nullam quis risus eget urna mollis ornare vel eu
                              leo. Vivamus sagittis lacus vel augue laoreet
                              rutrum faucibus dolor auctor. Nullam id dolor id
                              nibh ultricies vehicula.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="bootstrap-accordian-style">
                          <ContextAwareToggle
                            type="accordion-question"
                            eventKey="1"
                          >
                            02 Design
                          </ContextAwareToggle>
                          <Accordion.Collapse eventKey="1">
                            <div
                              className="accordion-content"
                              style={{ background: "transparent" }}
                            >
                              Nullam quis risus eget urna mollis ornare vel eu
                              leo. Vivamus sagittis lacus vel augue laoreet
                              rutrum faucibus dolor auctor. Nullam id dolor id
                              nibh ultricies vehicula.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="bootstrap-accordian-style">
                          <ContextAwareToggle
                            type="accordion-question"
                            eventKey="2"
                          >
                            03 Building
                          </ContextAwareToggle>
                          <Accordion.Collapse
                            type="accordion-question"
                            eventKey="2"
                          >
                            <div
                              className="accordion-content"
                              style={{ background: "transparent" }}
                            >
                              Nullam quis risus eget urna mollis ornare vel eu
                              leo. Vivamus sagittis lacus vel augue laoreet
                              rutrum faucibus dolor auctor. Nullam id dolor id
                              nibh ultricies vehicula.
                            </div>
                          </Accordion.Collapse>
                        </div>
                        <div className="bootstrap-accordian-style">
                          <ContextAwareToggle
                            type="accordion-question"
                            eventKey="3"
                          >
                            04 Building
                          </ContextAwareToggle>
                          <Accordion.Collapse eventKey="3">
                            <div
                              className="accordion-content"
                              style={{ background: "transparent" }}
                            >
                              Nullam quis risus eget urna mollis ornare vel eu
                              leo. Vivamus sagittis lacus vel augue laoreet
                              rutrum faucibus dolor auctor. Nullam id dolor id
                              nibh ultricies vehicula.
                            </div>
                          </Accordion.Collapse>
                        </div>
                      </Accordion>
                    </div>
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

export default ServiceScreen;
