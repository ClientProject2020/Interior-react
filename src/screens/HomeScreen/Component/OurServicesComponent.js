import React from "react";

const OurServicesComponent = () => {
  return (
    <>
      {/* <!-- ==================== Start Services ==================== --> */}
      <section className="services section-padding bg-gray">
        <div className="container">
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  Best Features
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Services
                </h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay=".3s"
                // data-background="img/01.jpg"
              >
                <span className="icon flaticon-houses"></span>
                <h6 style={{ fontSize: 18 }} className="mb-20">
                  Architecture
                </h6>
                <p style={{ fontSize: 15 }}>
                  Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
                  consequat.
                </p>
                <a href="#0" className="active more custom-font mt-30">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay=".5s"
                // data-background="img/02.jpg"
              >
                <span className="icon flaticon-living-room"></span>
                <h6 style={{ fontSize: 18 }} className="mb-20">
                  Interior Design
                </h6>
                <p style={{ fontSize: 15 }}>
                  Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
                  consequat.
                </p>
                <a href="#0" className="active more custom-font mt-30">
                  Read More
                </a>
              </div>
            </div>

            <div className="col-lg-4">
              <div
                className="item-bx bg-img wow fadeInUp"
                data-wow-delay=".7s"
                // data-background="img/03.jpg"
              >
                <span className="icon flaticon-interior-design"></span>
                <h6 style={{ fontSize: 18 }} className="mb-20">
                  3D Modeling
                </h6>
                <p style={{ fontSize: 15 }}>
                  Cras mollis turpis a ipsum ultes, nec cond imentum ipsum
                  consequat.
                </p>
                <a href="#0" className="active more custom-font mt-30">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* / <!-- ==================== End Services ==================== --> */}
    </>
  );
};

export default OurServicesComponent;
