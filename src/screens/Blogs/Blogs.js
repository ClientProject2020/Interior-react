import React, { useState } from "react";
import aboutus from "../../assets/images/blog-detail.jpg";
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
        // <section class="blog-section">
        //   <div class="container">
        //     <div class="news-wrap">
        //       <div class="row">
        //         <div
        //           class="col-lg-4 col-md-12 col-xs-12"
        //           style={{ cursor: "pointer" }}
        //           onClick={() => {
        //             setOnDetailSelect("true");
        //           }}
        //         >
        //           <div class="news-item">
        //             <a
        //             // class="news-img-link"
        //             >
        //               <div class="news-item-img">
        //                 <img
        //                   style={{
        //                     display: "inline-block",
        //                     maxWidth: "100%",
        //                     height: "auto",
        //                   }}
        //                   class="img-responsive"
        //                   src={aboutus}
        //                   alt="blog image"
        //                 />
        //               </div>
        //             </a>
        //             <div class="news-item-text">
        //               <a>
        //                 <h3>Interior Design News</h3>
        //               </a>
        //               <div class="dates">
        //                 <span class="date">April 11, 2020 &nbsp;</span>
        //                 {/* <ul class="action-list pl-0">
        //                   <li class="action-item pl-2">
        //                     <Icon icon={heart} style={{}} /> <span>306</span>
        //                   </li>
        //                   <li class="action-item">
        //                     <Icon icon={comment} /> <span>34</span>
        //                   </li>
        //                   <li class="action-item">
        //                     <Icon icon={share} /> <span>122</span>
        //                   </li>
        //                 </ul> */}
        //               </div>
        //               <div class="news-item-descr big-news">
        //                 <p>
        //                   Lorem ipsum dolor sit amet, consectetur adipisicing
        //                   elit, sed do eiusmod tempor incididunt ut labore et
        //                   dolore magna aliqua ipsum dolor sit amet, consectetur.
        //                 </p>
        //                 <p class="hidden-lg-up hidden-sm-down">
        //                   Lorem ipsum dolor sit amet, consectetur adipisicing
        //                   elit, sed do eiusmod tempor incididunt ut labore et
        //                   dolore magna aliqua ipsum dolor sit amet, consectetur
        //                   ipsum dolor sit amet, consectetur adipisicing elit,
        //                   sed do eiusmod tempor incididunt ut.
        //                 </p>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     </div>
        //   </div>
        // </section>
        <div className="container">
          <article
            class="gallerycontainer"
            style={{ backgroundColor: "#f5f1f0", cursor: "pointer" }}
            onClick={() => {
              setOnDetailSelect("true");
            }}
          >
            <div
              class="col-md-6 galleryimage projectimage"
              style={{
                position: "absolute",
                zIndex: 0,
                background: "none",
              }}
            >
              <a href="#"></a>
              <div
                class="backstretch"
                style={{
                  left: 0,
                  top: 0,
                  overflow: "hidden",
                  margin: 0,
                  padding: 0,
                  height: "100%",
                  width: "100%",
                  zIndex: -999998,
                  position: "absolute",
                  background: `url(${aboutus})`,
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div class="col-md-6 gallerycontent">
              <h4>
                <a
                  href="single-project.html"
                  style={{ color: "#e6c663", fontSize: 24 }}
                >
                  De eram exercitat
                </a>
              </h4>
              <p style={{}}>
                Id nisi aliquip praetermissum. Cupidatat est esse, noster an
                quamquam non nulla. Cupidatat ea nostrud, irure nostrud
                pariatur, fugiat doctrina.
              </p>
              <a style={{}} class="readmore-button">
                View Project
              </a>
            </div>
          </article>
        </div>
      )}
      {onDetailSelect && <BlogsDetail />}
    </>
  );
};

export default Blogs;
