import React, { useState, useContext } from "react";
import { Animated } from "react-animated-css";
// import {
//   Accordion,
//   Card,
//   useAccordionToggle,
//   AccordionContext,
// } from "react-bootstrap";
// import { Icon } from "react-icons-kit";
// import { ic_keyboard_arrow_right } from "react-icons-kit/md/ic_keyboard_arrow_right";
// import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";
// import { filePdfO } from "react-icons-kit/fa/filePdfO";
const Service_Dtl = (props) => {
  return (
    <div class="services-wrapp">
      <Animated animationIn="slideInLeft" isVisible={true}>
        <div class="row">
          {props.data.imageChildren.map((item) => {
            return (
              <div class="col-md-6" key={item.key}>
                <div class="services-post">
                  <img src={item.image} alt="img" style={{ height: 260 }} />
                </div>
              </div>
            );
          })}

          {/* <div class="col-md-6">
          <div class="services-post">
            <img
              src="http://shtheme.net/demosd/buildplus/wp-content/themes/buildplus/images/services/single12.jpg"
              alt="img"
            />
          </div>
        </div> */}
        </div>
      </Animated>
      <div class="services-post">
        <Animated animationIn="slideInRight" isVisible={true}>
          <h4>{props.data.Title}</h4>
        </Animated>
        <Animated animationIn="slideInRight" isVisible={true}>
          {props.data.content}
        </Animated>
      </div>
      {/* <div class="row">
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
                <ContextAwareToggle type="accordion-question" eventKey="0">
                  01 Planning
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="0">
                  <div
                    className="accordion-content"
                    style={{ background: "transparent" }}
                  >
                    Nullam quis risus eget urna mollis ornare vel eu leo.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Nullam id dolor id nibh ultricies vehicula.
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="bootstrap-accordian-style">
                <ContextAwareToggle type="accordion-question" eventKey="1">
                  02 Design
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="1">
                  <div
                    className="accordion-content"
                    style={{ background: "transparent" }}
                  >
                    Nullam quis risus eget urna mollis ornare vel eu leo.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Nullam id dolor id nibh ultricies vehicula.
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="bootstrap-accordian-style">
                <ContextAwareToggle type="accordion-question" eventKey="2">
                  03 Building
                </ContextAwareToggle>
                <Accordion.Collapse type="accordion-question" eventKey="2">
                  <div
                    className="accordion-content"
                    style={{ background: "transparent" }}
                  >
                    Nullam quis risus eget urna mollis ornare vel eu leo.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Nullam id dolor id nibh ultricies vehicula.
                  </div>
                </Accordion.Collapse>
              </div>
              <div className="bootstrap-accordian-style">
                <ContextAwareToggle type="accordion-question" eventKey="3">
                  04 Building
                </ContextAwareToggle>
                <Accordion.Collapse eventKey="3">
                  <div
                    className="accordion-content"
                    style={{ background: "transparent" }}
                  >
                    Nullam quis risus eget urna mollis ornare vel eu leo.
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Nullam id dolor id nibh ultricies vehicula.
                  </div>
                </Accordion.Collapse>
              </div>
            </Accordion>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Service_Dtl;
