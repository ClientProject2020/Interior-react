import React, { useState } from "react";
import aboutus from "../../assets/images/aboutus.jpg";
import BlogsDetail from "./Component/BlogsDetail";
import { Icon } from "react-icons-kit";
import { heart } from "react-icons-kit/fa/heart";
import { comment } from "react-icons-kit/fa/comment";
import { share } from "react-icons-kit/fa/share";

const Blogs = () => {
  const [onDetailSelect, setOnDetailSelect] = useState();
  console.log(onDetailSelect, "heyy");
  return (
    <>
      {!onDetailSelect && (
        <section class="blog-section">
          <div class="container">
            <div class="news-wrap">
              <div class="row">
                <div
                  class="col-lg-4 col-md-12 col-xs-12"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setOnDetailSelect("true");
                  }}
                >
                  <div class="news-item">
                    <a
                    // class="news-img-link"
                    >
                      <div class="news-item-img">
                        <img
                          style={{
                            display: "inline-block",
                            maxWidth: "100%",
                            height: "auto",
                          }}
                          class="img-responsive"
                          src={aboutus}
                          alt="blog image"
                        />
                      </div>
                    </a>
                    <div class="news-item-text">
                      <a>
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
                      <div class="news-item-descr big-news">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua ipsum dolor sit amet, consectetur.
                        </p>
                        <p class="hidden-lg-up hidden-sm-down">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua ipsum dolor sit amet, consectetur
                          ipsum dolor sit amet, consectetur adipisicing elit,
                          sed do eiusmod tempor incididunt ut.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      {onDetailSelect && <BlogsDetail />}
    </>
  );
};

export default Blogs;
