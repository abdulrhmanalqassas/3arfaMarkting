import { useState, useEffect, useRef } from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Thumbs } from "swiper/modules";

// Custom CSS styles as a styled component
const galleryStyles = `
.swiper-vertical {
    width: 75px !important;
  }
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }
  .gallery img {
    max-width: 100%;
    cursor: pointer;
  }
  .gallery img:hover {
    max-width: 100%;
    cursor: pointer;
  }
`;

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");

  const galleryImages = [
    "https://pagedone.io/asset/uploads/1713943683.png",
    "https://pagedone.io/asset/uploads/1713943709.png",
    "https://pagedone.io/asset/uploads/1713943720.png",
    "https://pagedone.io/asset/uploads/1713943731.png",
  ];

  const openLightbox = (imageSrc) => {
    setCurrentImage(imageSrc);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <>
      {/* Include custom styles */}
      <style dangerouslySetInnerHTML={{ __html: galleryStyles }} />

      <section className="py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-1">
          <div className="mb-16">
            <h2 className="w-full text-center text-gray-900 text-4xl font-bold font-manrope leading-normal pb-2.5">
              Our Gallery
            </h2>
            <p className="w-full text-center text-gray-600 text-lg font-normal leading-8">
              Explore the essence of beauty in our gallery's intimate space.
            </p>
          </div>
          <div className="flex flex-col-reverse mx-auto">
            <div className="slider-box flex flex-col xl:flex-row ">
              <div className="box xl:w-full w-full gallery mb-4">
                <Swiper
                  slidesPerView={1}
                  effect="fade"
                  modules={[EffectFade, Thumbs]}
                  thumbs={{ swiper: thumbsSwiper }}
                  className="main-slide-carousel"
                >
                  {galleryImages.map((image, index) => (
                    <SwiperSlide key={`main-${index}`}>
                      <div className="flex justify-center items-center w-full mx-auto rounded-3xl">
                        <img
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="gallery-image w-3/4 mx-auto rounded-3xl object-cover cursor-pointer"
                          onClick={() => openLightbox(image)}
                          style={{ height: "500px" }}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="xl:w-40 lg:w-32 md:w-full w-full">
                <Swiper
                  onSwiper={setThumbsSwiper}
                  spaceBetween={20}
                  slidesPerView={4}
                  direction="vertical"
                  className="nav-for-slider h-full"
                  breakpoints={{
                    0: {
                      direction: "horizontal",
                      slidesPerView: 4,
                    },
                    768: {
                      direction: "horizontal",
                      slidesPerView: 4,
                    },
                    1280: {
                      direction: "vertical",
                      slidesPerView: 4,
                    },
                  }}
                >
                  {galleryImages.map((image, index) => (
                    <SwiperSlide
                      key={`thumb-${index}`}
                      className="thumbs-slide"
                    >
                      <div className="aspect-square">
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="gallery-image w-full h-full rounded-2xl border-2 border-gray-200 transition-all duration-500 hover:border-indigo-600 object-cover cursor-pointer"
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <span
                className="absolute top-5 right-8 text-white text-6xl cursor-pointer"
                onClick={closeLightbox}
              >
                &times;
              </span>
              <img
                src={currentImage}
                alt="Enlarged view"
                className="max-w-full max-h-full"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}
