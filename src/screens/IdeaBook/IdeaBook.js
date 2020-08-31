import React, { useState, useCallback } from "react";
import Image from "../../assets/images/ideaBook.jpg";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
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
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
      width: 1,
      height: 1
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
      width: 3,
      height: 4
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
      width: 4,
      height: 3
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
      width: 4,
      height: 3
    }
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
                <li>Lorem Ipsum </li>
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
