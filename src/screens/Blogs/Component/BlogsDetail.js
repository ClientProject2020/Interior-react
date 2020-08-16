import React from "react";
// import aboutus from "../../../assets/images/blog=-detail.jpg";
import aboutus from "../../../assets/images/blog-detail.jpg";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/fa/heart";
import { comment } from "react-icons-kit/fa/comment";
import { share } from "react-icons-kit/fa/share";

const BlogsDetail = () => {
  return (
    <section class="blog blog-section bg-white list-side">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 blog-pots">
            <div class="row">
              <div class="col-md-12 col-xs-12">
                <div class="news-item details no-mb2">
                  <a href="blog-details.html" class="news-img-link">
                    <div class="news-item-img">
                      <img
                        class="img-responsive"
                        src={aboutus}
                        alt="blog image"
                      />
                    </div>
                  </a>
                  <div class="news-item-text details pb-0">
                    <a href="blog-details.html">
                      <h3>Interior Design News</h3>
                    </a>
                    <div class="dates">
                      <span class="date">April 11, 2020 &nbsp;</span>
                      {/* <ul class="action-list pl-0">
                          <li class="action-item pl-2">
                            <Icon icon={heart} style={{}} /> <span>306</span>
                          </li>
                          <li class="action-item">
                            <Icon icon={comment} /> <span>34</span>
                          </li>
                          <li class="action-item">
                            <Icon icon={share} /> <span>122</span>
                          </li>
                        </ul> */}
                    </div>
                    <div class="news-item-descr big-news details visib mb-0">
                      <p class="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem, ea? Vitae pariatur ab amet iusto tempore
                        neque a, deserunt eaque recusandae obcaecati eos atque
                        delectus. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eligendi labore vel enim repellendus
                        excepturi autem. Eligendi cum laboriosam exercitationem
                        illum repudiandae quasi sint dicta consectetur porro
                        fuga ea, perspiciatis aut!
                      </p>

                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Autem, ea? Vitae pariatur ab amet iusto tempore
                        neque a, deserunt eaque recusandae obcaecati eos atque
                        delectus. Lorem ipsum dolor sit amet, consectetur
                        adipisicing elit. Eligendi labore vel enim repellendus
                        excepturi autem. Eligendi cum laboriosam exercitationem
                        illum repudiandae quasi sint dicta consectetur porro
                        fuga ea, perspiciatis aut!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section class="comments">
              <h3 class="mb-5">5 Comments</h3>
              <div class="row mb-4">
                <ul class="col-12 commented">
                  <li class="comm-inf">
                    <div class="col-md-2">
                      <img
                        src="images/testimonials/ts-4.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-md-10 comments-info">
                      <h5 class="mb-1">Mario Smith</h5>
                      <p class="mb-4">Jun 23, 2020</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="row ml-5">
                <ul class="col-12 commented">
                  <li class="comm-inf">
                    <div class="col-md-2">
                      <img
                        src="images/testimonials/ts-5.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-md-10 comments-info">
                      <h5 class="mb-1">Mary Tyron</h5>
                      <p class="mb-4">Jun 23, 2020</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="row my-4">
                <ul class="col-12 commented">
                  <li class="comm-inf">
                    <div class="col-md-2">
                      <img
                        src="images/testimonials/ts-6.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </div>
                    <div class="col-md-10 comments-info no-mb">
                      <h5 class="mb-1">Leo Williams</h5>
                      <p class="mb-4">Jun 23, 2020</p>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras aliquam, quam congue dictum luctus, lacus magna
                        congue ante, in finibus dui sapien eu dolor. Integer
                        tincidunt suscipit erat, nec laoreet ipsum vestibulum
                        sed.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            <section class="leve-comments wpb">
              <h3 class="mb-5">Leave a Comment</h3>
              <div class="row">
                <div class="col-md-12 data">
                  <form action="#">
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="text"
                          name="name"
                          class="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="email"
                          name="email"
                          class="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div class="col-md-12 form-group">
                      <textarea
                        class="form-control"
                        id="exampleTextarea"
                        rows="8"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary btn-lg mt-2">
                      Submit Comment
                    </button>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetail;
