import React, { useState } from "react";
import Slider from "react-slick";
import Portfolio from "../../../assets/images/portfolio.jpg";
import Contact from "../../../assets/images/contact-us.jpg";
import { Modal, Button } from "react-bootstrap";

const settings = {
  // dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  arrows: false,
};

const Modalsettings = {
  dots: true,
  dotsClass: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  dots: true,
};
const PortfolioDtlScreen = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  {
    console.log(props.portfolio, "portfolio");
  }
  return (
    <div>
      <Slider {...settings}>
        {props.portfolio.slideImage.map((ii) => {
          return (
            <>
              <div
                key={ii.imageSrc}
                onClick={() => setShow(true)}
                style={{
                  height: "60vh",
                  background: `url(${ii.imageSrc})`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              ></div>
            </>
          );
        })}
      </Slider>
      <section>
        <div
          class="container sticky_column"
          style={{ position: "relative", overflow: "visible", minHeight: 1 }}
        >
          <div
            class="theiaStickySidebar"
            style={{
              paddingTop: 0,
              paddingBottom: 1,
              position: "static",
              transform: "none",
            }}
          >
            <div class="project-detail-containt">
              <div class="row bg-white text-black">
                <div className="col-sm-12">
                  <h3>{props.portfolio.contentHead}</h3>
                  {props.portfolio.content}
                </div>
                {/* <div className="col-sm-5">
                  <div class="product-block">
                    <ul>
                      <li>
                        <h4 class="m-b10">Date</h4>
                        <p>October 10, 2019</p>
                      </li>
                      <li>
                        <h4 class="m-b10">Client</h4>
                        <p>Studio Massimo, Italy</p>
                      </li>
                      <li>
                        <h4 class="m-b10">Project type</h4>
                        <p>Contruction, Brading</p>
                      </li>
                      <li>
                        <h4 class="m-b10">Location</h4>
                        <p>Mountain View CA 94043</p>
                      </li>
                      <li>
                        <h4 class="m-b10">Year</h4>
                        <p>2019</p>
                      </li>
                    </ul>
                  </div>

                  <div class="m-b0">
                    <div class="sx-divider divider-1px  bg-black">
                      <i class="icon-dot c-square"></i>
                    </div>
                  </div>
                  <ul class="social-icons social-square social-darkest m-b0">
                    <li>
                      <a href="javascript:void(0);" class="fa fa-facebook"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="fa fa-twitter"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="fa fa-linkedin"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="fa fa-rss"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="fa fa-youtube"></a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" class="fa fa-instagram"></a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <Modal
          aria-labelledby="contained-modal-title-vcenter"
          dialogClassName="modal-90vw"
          show={show}
          onHide={handleClose}
          centered
        >
          <Modal.Body style={{ height: "100%" }}>
            <Slider {...Modalsettings}>
              {props.portfolio.slideImage.map((ii) => {
                return (
                  <>
                    <div
                      key={ii.key}
                      onClick={() => setShow(true)}
                      style={{
                        height: "60vh",
                        background: `url(${ii.imageSrc})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                      }}
                    ></div>
                  </>
                );
              })}
            </Slider>
          </Modal.Body>
          <Modal.Footer style={{ border: 0 }}>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </div>
  );
};

export default PortfolioDtlScreen;
