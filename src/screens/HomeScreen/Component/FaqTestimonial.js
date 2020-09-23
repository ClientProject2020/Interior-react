import React from "react";

const FaqTestimonial = () => {
  return (
    <section id="section5" class="background-light text-dark">
      <div class="container">
        <div class="row">
          <div class="col-lg-7">
            <div class="text-medium">LOW PRICES &amp; 24/7</div>
            <p class="lead">
              Beautiful websites are now easy to made! Ready to Purchase POLO
              Template?
            </p>
            <div class="accordion toggle fancy clean accordion-transparent">
              <div class="ac-item">
                <h5 class="ac-title">AIRPORT PICKUP</h5>
                <div class="ac-content" style={{display: 'none'}}>
                  <h4>Pellentesque ipsum erat</h4> Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci
                  velit, sed quia non numquam eius modi tempora incidunt ut
                  labore et dolore magnam aliquam quaerat voluptatem.
                </div>
              </div>
              <div class="ac-item ac-active">
                <h5 class="ac-title">PERSONAL TAXI</h5>
                <div class="ac-content">
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </div>
              </div>
              <div class="ac-item">
                <h5 class="ac-title">FAMILY TAXI</h5>
                <div class="ac-content" style={{display: 'none'}}>
                  <h4>Pellentesque ipsum erat</h4>
                  <p>
                    Facilisis ut venenatis eu, sodales vel dolor. The most
                    happiest time of the day!. Morbi sagittis, sem quis lacinia
                    faucibus, orci ipsum gravida tortor, vel interdum mi sapien
                    ut justo. Neque porro quisquam est.
                    <br />
                    Adipisci velit. Neque porro quisquam est, qui dolorem ipsum
                    quia dolor sit amet, consectetur, adipisci velit, sed quia
                    non numquam eius modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt.
                  </p>
                </div>
              </div>
              <div class="ac-item">
                <h5 class="ac-title">CITY TRANSPORT</h5>
                <div class="ac-content" style={{display: 'none'}}>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quia non numquam eius
                  modi tempora incidunt ut labore et dolore magnam aliquam
                  quaerat voluptatem.
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-5">
            <div class="text-medium">TESTIMONIALS</div>
            <p class="lead">
              Beautiful websites are now easy to made! Ready to Purchase POLO
              Template?
            </p>

            <div
              class="carousel arrows-visibile testimonial testimonial-single flickity-enabled is-draggable carousel-loaded"
              data-items="1"
              data-loop="true"
              data-autoplay="true"
              data-arrows="false"
            >
              <div
                class="flickity-viewport"
                style={{height: 230, touchAction: 'pan-y'}}
              >
                <div
                  class="flickity-slider"
                  style={{left: 0, transform:' translateX(-200%)'}}
                >
                  <div
                    class="polo-carousel-item"
                    style={{width: '100%', position: 'absolute', left: '300%'}}
                    aria-hidden="true"
                  >
                    <div class="testimonial-item">
                      <img src="images/team/6.jpg" alt="" />
                      <p>
                        Polo is by far the most amazing template out there! I
                        literally could not be happier that I chose to buy this
                        template!
                      </p>
                      <span>Alan Monre</span>
                      <span>CEO, Square Software</span>
                    </div>
                  </div>
                  <div
                    class="polo-carousel-item"
                    style={{width: '100%', position: 'absolute', left: '100%'}}
                    aria-hidden="true"
                  >
                    <div class="testimonial-item">
                      <img src="images/team/7.jpg" alt="" />
                      <p>
                        Polo is by far the most amazing template out there! I
                        literally could not be happier that I chose to buy this
                        template!
                      </p>
                      <span>Alan Monre</span>
                      <span>CEO, Square Software</span>
                    </div>
                  </div>
                  <div
                    class="polo-carousel-item is-selected"
                    style={{width: '100%', position: 'absolute', left: '200%'}}
                  >
                    <div class="testimonial-item">
                      <img src="images/team/8.jpg" alt="" />
                      <p>
                        The world is a dangerous place to live; not because of
                        the people who are evil, but because of the people who
                        don't do anything about it.
                      </p>
                      <span>Alan Monre</span>
                      <span>CEO, Square Software</span>
                    </div>
                  </div>
                </div>
              </div>
              <ol class="flickity-page-dots">
                <li class="dot" aria-label="Page dot 1"></li>
                <li class="dot" aria-label="Page dot 2"></li>
                <li
                  class="dot is-selected"
                  aria-label="Page dot 3"
                  aria-current="step"
                ></li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqTestimonial;
