import React from "react";
// import aboutus from "../../../assets/images/blog=-detail.jpg";
import aboutus from "../../../assets/images/blog-detail.jpg";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/fa/heart";
import { comment } from "react-icons-kit/fa/comment";
import { share } from "react-icons-kit/fa/share";

const BlogsDetail = () => {
  return (
    <section className="blog blog-section bg-white list-side">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 blog-pots">
            <div className="row">
              <div className="col-md-12 col-xs-12">
                <div className="news-item details no-mb2">
                  <a className="news-img-link">
                    <div className="news-item-img">
                      <img
                        className="img-responsive"
                        src={aboutus}
                        alt="blog image"
                      />
                    </div>
                  </a>
                  <div className="news-item-text details pb-0">
                    <a>
                      <h3>Interior Design News</h3>
                    </a>
                    <div className="dates">
                      <span className="date">April 11, 2020 &nbsp;</span>
                      {/* <ul className="action-list pl-0">
                          <li className="action-item pl-2">
                            <Icon icon={heart} style={{}} /> <span>306</span>
                          </li>
                          <li className="action-item">
                            <Icon icon={comment} /> <span>34</span>
                          </li>
                          <li className="action-item">
                            <Icon icon={share} /> <span>122</span>
                          </li>
                        </ul> */}
                    </div>
                    <div className=" big-news details visib mb-0">
                      <p className="mb-3">
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
            <section className="comments" style={{ paddingTop: 20 }}>
              <h3 className="mb-5">5 Comments</h3>
              <div
                className="row mb-4"
                style={{ borderBottom: " 1px solid #ececec" }}
              >
                <ul className="col-12 commented">
                  <li className="comm-inf">
                    <div className="col-md-2">
                      <img
                        src="images/testimonials/ts-4.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-md-10 comments-info">
                      <h5 className="mb-1">Mario Smith</h5>
                      <p className="mb-4">Jun 23, 2020</p>
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
              <div className="row mb-5" style={{ borderBottom: " 1px solid #ececec" }}>
                <ul className="col-12 commented">
                  <li className="comm-inf">
                    <div className="col-md-2">
                      <img
                        src="images/testimonials/ts-5.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-md-10 comments-info">
                      <h5 className="mb-1">Mary Tyron</h5>
                      <p className="mb-4">Jun 23, 2020</p>
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
              <div className="row my-4" style={{ borderBottom: " 1px solid #ececec" }}>
                <ul className="col-12 commented">
                  <li className="comm-inf">
                    <div className="col-md-2">
                      <img
                        src="images/testimonials/ts-6.jpg"
                        className="img-fluid"
                        alt=""
                      />
                    </div>
                    <div className="col-md-10 comments-info no-mb">
                      <h5 className="mb-1">Leo Williams</h5>
                      <p className="mb-4">Jun 23, 2020</p>
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
            {/* <section className="leve-comments wpb">
              <h3 className="mb-5">Leave a Comment</h3>
              <div className="row">
                <div className="col-md-12 data">
                  <form action="#">
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Last Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea
                        className="form-control"
                        id="exampleTextarea"
                        rows="8"
                        placeholder="Message"
                        required
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg mt-2">
                      Submit Comment
                    </button>
                  </form>
                </div>
              </div>
            </section> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsDetail;
