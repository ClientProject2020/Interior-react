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
import Service_Dtl from "./Component/Service_Dtl";
import aboutus2 from "../../assets/images/aboutus2.jpg";
import aboutus3 from "../../assets/images/aboutus3.jpg";
import aboutus4 from "../../assets/images/aboutus4.jpg";

const ServiceScreen = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(
    "STRUCTURAL REPAIR"
  );

  const serviceDtl = [
    {
      key: 1,
      Service: "STRUCTURAL REPAIR",
      Title: "STRUCTURAL REPAIR",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </>
      ),
      imageChildren: [
        {
          key: "i1",
          image: aboutus2,
        },
        {
          key: "i2",
          image: aboutus3,
        },
      ],
    },
    {
      key: 2,
      Service: "INTERIOR DESIGN",
      Title: "Interior Design",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </>
      ),
      imageChildren: [],
    },
    {
      key: 3,
      Service: "GENERAL",
      Title: "Plumbing",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </>
      ),
      imageChildren: [],
    },
    {
      key: 4,
      Service: "GENERAL",
      Title: "Tiling",
      content: (
        <>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </>
      ),
      imageChildren: [],
    },
  ];

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
                Services
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
                <li>Services </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class="single-service">
        <div class="service container">
          <div class="row">
            <div class="col-md-3">
              <div class="sidebar" style={{ padding: 0 }}>
                <div id="text-3" class="widget widget_text">
                  <div class="textwidget">
                    <div class="widget vertical-menu">
                      <Accordion defaultActiveKey="">
                        {/* <div className="accordian-sidebar">
                          <ContextAwareToggle
                            type="accordian-sidebar"
                            eventKey="0"
                          >
                            Structural Repairs
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
                        </div> */}
                        <div
                          className="accordian-sidebar"
                          onClick={() => {
                            setSelectedAccordion("STRUCTURAL REPAIR");
                          }}
                        >
                          <ContextAwareToggle
                            type="accordian-sidebar"
                            eventKey="2"
                          >
                            Structural Repairs
                          </ContextAwareToggle>
                        </div>
                        <div
                          className="accordian-sidebar"
                          onClick={() => {
                            setSelectedAccordion("INTERIOR DESIGN");
                          }}
                        >
                          <ContextAwareToggle
                            type="accordian-sidebar"
                            eventKey="1"
                          >
                            Interior Design
                          </ContextAwareToggle>
                        </div>

                        <div
                          className="accordian-sidebar"
                          onClick={() => {
                            setSelectedAccordion("GENERAL");
                          }}
                        >
                          <ContextAwareToggle
                            type="accordian-sidebar"
                            eventKey="3"
                          >
                            General
                          </ContextAwareToggle>
                        </div>
                        {/* <div className="accordian-sidebar">
                          <ContextAwareToggle
                            type="accordian-sidebar"
                            eventKey="4"
                          >
                            Paver Walkways
                          </ContextAwareToggle>
                        </div>
                        <div className="accordian-sidebar">
                          <ContextAwareToggle
                            type="accordian-sidebar"
                            eventKey="5"
                          >
                            Household Repair
                          </ContextAwareToggle>
                        </div> */}
                      </Accordion>
                      {/* <ul>
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
                      </ul> */}
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
              {serviceDtl
                .filter((ii) => ii.Service === selectedAccordion)
                .map((item) => {
                  return (
                    <Service_Dtl
                      selectedAccordion={selectedAccordion}
                      data={item}
                    />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceScreen;
