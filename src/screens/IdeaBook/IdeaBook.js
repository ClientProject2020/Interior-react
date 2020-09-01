import React, { useState, useCallback } from "react";
import Image from "../../assets/images/ideaBook.jpg";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import I1 from "../../assets/images/i-1.jpg";
import I2 from "../../assets/images/i-2.jpg";
import I3 from "../../assets/images/i-3.jpg";
import I4 from "../../assets/images/i-4.jpg";
import I5 from "../../assets/images/i-5.jpg";
import I6 from "../../assets/images/i-6.jpg";
import I7 from "../../assets/images/i-7.jpg";
import I8 from "../../assets/images/i-8.jpg";
import I9 from "../../assets/images/i-9.jpg";
import I10 from "../../assets/images/i-10.jpg";
import I11 from "../../assets/images/i-11.jpg";
import I12 from "../../assets/images/i-12.jpg";
import I13 from "../../assets/images/i-13.jpg";
import I14 from "../../assets/images/i-14.jpg";
import I15 from "../../assets/images/i-15.jpg";
import I16 from "../../assets/images/i-16.jpg";
import I17 from "../../assets/images/i-17.jpg";

const IdeaBook = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const photos = [
    {
      src: I1,
      width: 4,
      height: 3,
    },
    {
      src: I2,
      width: 1,
      height: 1,
    },
    {
      src: I3,
      width: 4,
      height: 3,
    },
    {
      src: I4,
      width: 3,
      height: 4,
    },
    {
      src: I5,
      width: 1,
      height: 1,
    },
    {
      src: I6,
      width: 4,
      height: 3,
    },
    {
      src: I7,
      width: 6,
      height: 4,
    },
    {
      src: I8,
      width: 4,
      height: 3,
    },
    {
      src: I9,
      width: 4,
      height: 3,
    },
    {
      src: I10,
      width: 4,
      height: 3,
    },
    {
      src: I11,
      width: 1,
      height:1,
    },
    {
      src: I12,
      width: 4,
      height: 3,
    },
    {
      src: I13,
      width: 4,
      height: 3,
    },
    {
      src: I14,
      width: 1,
      height: 1,
    },
    {
      src: I15,
      width: 1,
      height: 1,
    },
    {
      src: I16,
      width: 4,
      height: 3,
    },
    {
      src: I17,
      width: 1,
      height: 1,
    },
  ];

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
                Idea Book
              </h1>
            </div>
            <div class="col-md-6">
              <ul class="bread-crumb">
                <li>
                  <a title="HOME" href="#">
                    Idea Book
                  </a>
                </li>
                <li class="separate">/</li>
                <li>Idea Book</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
      {/* <section id="page-content">
        <div class="container">
          <div
            class="grid-layout grid-3-columns grid-loaded"
            data-margin="20"
            data-item="grid-item"
            data-lightbox="gallery"
            style="margin: 0px -20px -20px 0px; position: relative; height: 707.25px;"
          >
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 0px; top: 0px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/1.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/1.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 316.656px; top: 0px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/2.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/2.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 633.312px; top: 0px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/3.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/3.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 0px; top: 235.75px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/4.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/4.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 316.656px; top: 235.75px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/5.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/5.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 633.312px; top: 235.75px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/6.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/6.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 0px; top: 471.5px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/7.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/7.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 316.656px; top: 471.5px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/8.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/8.jpg" />
              </a>
            </div>
            <div
              class="grid-item"
              style="padding: 0px 20px 20px 0px; position: absolute; left: 633.312px; top: 471.5px;"
            >
              <a
                class="image-hover-zoom"
                href="images/gallery/9.jpg"
                data-lightbox="gallery-image"
              >
                <img src="images/gallery/9.jpg" />
              </a>
            </div>
            <div class="grid-loader"></div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default IdeaBook;
