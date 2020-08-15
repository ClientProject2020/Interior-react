import React, { useState,useContext } from "react";
import { Icon } from "react-icons-kit";
import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
import { filePdfO } from "react-icons-kit/fa/filePdfO";
import { Accordion, Card, useAccordionToggle,AccordionContext } from "react-bootstrap";

const ServiceScreen = () => {
  const [selectedAccordion, setSelectedAccordion] = useState(1);

  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = useContext(AccordionContext);

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
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
                      <dl class="accordion">
                        <dt>
                          <a
                            onClick={() => setSelectedAccordion(1)}
                            class={`${
                              selectedAccordion === 1 ? "active" : ""
                            } `}
                          >
                            01 Planning
                          </a>
                        </dt>
                        <dd
                          style={{
                            display: selectedAccordion === 1 ? "block" : "none",
                          }}
                        >
                          Nullam quis risus eget urna mollis ornare vel eu leo.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Nullam id dolor id nibh
                          ultricies vehicula.
                        </dd>
                        <dt>
                          <a
                            onClick={() => setSelectedAccordion(2)}
                            class={`${selectedAccordion === 2 ? "active" : ""}`}
                          >
                            02 Design
                          </a>
                        </dt>
                        <dd
                          style={{
                            display: selectedAccordion === 2 ? "block" : "none",
                          }}
                        >
                          Nullam quis risus eget urna mollis ornare vel eu leo.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Nullam id dolor id nibh
                          ultricies vehicula.
                        </dd>
                        <dt>
                          <a
                            onClick={() => setSelectedAccordion(3)}
                            class={`${
                              selectedAccordion === 3 ? "active" : ""
                            } `}
                          >
                            03 Building
                          </a>
                        </dt>
                        <dd
                          style={{
                            display: selectedAccordion === 3 ? "block" : "none",
                          }}
                        >
                          Nullam quis risus eget urna mollis ornare vel eu leo.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Nullam id dolor id nibh
                          ultricies vehicula.
                        </dd>
                        <dt>
                          <a
                            onClick={() => setSelectedAccordion(4)}
                            class={`${
                              selectedAccordion === 4 ? "active" : ""
                            } `}
                          >
                            04 Testing
                          </a>
                        </dt>
                        <dd
                          style={{
                            display: selectedAccordion === 4 ? "block" : "none",
                          }}
                        >
                          Nullam quis risus eget urna mollis ornare vel eu leo.
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor. Nullam id dolor id nibh
                          ultricies vehicula.
                        </dd>
                      </dl>

                      <Accordion defaultActiveKey="0">
                        <Card>
                          <Card.Header>
                            <ContextAwareToggle eventKey="0">
                              Click me!
                            </ContextAwareToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                        <Card>
                          <Card.Header>
                            <ContextAwareToggle eventKey="1">
                              Click me!
                            </ContextAwareToggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
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
