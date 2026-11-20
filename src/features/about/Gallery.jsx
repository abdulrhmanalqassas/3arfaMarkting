"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import Modal from "@/shared/Modal";

const galleryImages = [
  "/assets/images/about/1713943683.png",
  "/assets/images/about/1713943709.png",
  "/assets/images/about/1713943720.png",
  "/assets/images/about/1713943731.png",
];

export default function Gallery() {
  const mainSwiper = useRef(null);
  const [activeImage, setActiveImage] = useState(0);
  const [enlargedImage, setEnlargedImage] = useState(null);

  return (
    <section className="py-24 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-1">
        <div className="mb-16">
          <h2 className="w-full text-center text-gray-900 dark:text-slate-100 text-4xl font-bold font-manrope leading-normal pb-2.5">
            Our Gallery
          </h2>
          <p className="w-full text-center text-gray-600 dark:text-slate-300 text-lg font-normal leading-8">
            Explore the essence of beauty in our gallery&apos;s intimate space.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row gap-4">
          <Swiper
            onSwiper={(instance) => { mainSwiper.current = instance; }}
            onSlideChange={({ activeIndex }) => setActiveImage(activeIndex)}
            slidesPerView={1}
            effect="fade"
            modules={[EffectFade]}
            className="main-slide-carousel w-full min-w-0"
          >
            {galleryImages.map((image, index) => (
              <SwiperSlide key={image}>
                <button
                  type="button"
                  aria-label={"Enlarge gallery image " + (index + 1)}
                  tabIndex={activeImage === index ? 0 : -1}
                  aria-hidden={activeImage !== index}
                  className="block w-3/4 mx-auto rounded-3xl"
                  onClick={() => setEnlargedImage(index)}
                >
                  <img
                    src={image}
                    alt=""
                    loading="lazy"
                    className="w-full rounded-3xl object-cover"
                    style={{ height: "min(500px, 85vw)" }}
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="grid grid-cols-4 max-w-xs w-full mx-auto gap-3 shrink-0 xl:grid-cols-1 xl:w-[75px] xl:mx-0 content-start">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                key={image}
                aria-label={"Show gallery image " + (index + 1)}
                aria-pressed={activeImage === index}
                className="w-full aspect-square rounded-2xl"
                onClick={() => mainSwiper.current?.slideTo(index)}
              >
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  className={"w-full h-full rounded-2xl border-2 object-cover hover:border-indigo-500 " + (
                    activeImage === index ? "border-indigo-500" : "border-gray-200"
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
      {enlargedImage !== null && (
        <Modal
          className="gallery-lightbox"
          label={"Gallery image " + (enlargedImage + 1)}
          onClose={() => setEnlargedImage(null)}
        >
          <form method="dialog" className="absolute top-3 right-4">
            <button type="submit" className="size-12 text-white text-4xl leading-none" aria-label="Close gallery image">
              &times;
            </button>
          </form>
          <img
            src={galleryImages[enlargedImage]}
            alt={"Gallery image " + (enlargedImage + 1)}
            className="max-w-full"
          />
        </Modal>
      )}
    </section>
  );
}
