import React, { useRef, useEffect } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import required modules
import { Navigation } from 'swiper/modules';

const TestimonialsSlider = () => {
  const testimonials = [
    {
      id: 1,
      quote: "Pagedone is simply the best tool of investment in the market right now.",
      name: "Jane D",
      role: "CEO",
      image: "https://pagedone.io/asset/uploads/1696229969.png",
      stars: 5
    },
    {
      id: 2,
      quote: "I was hesitant to try pagedone at first, but I'm so glad I did - it's exceeded all of my expectations.",
      name: "Harsh P.",
      role: "Product Designer",
      image: "https://pagedone.io/asset/uploads/1696229994.png",
      stars: 5
    },
    {
      id: 3,
      quote: "Pagedone stands out as the most user-friendly and effective solution I've ever used.",
      name: "Alex K.",
      role: "Design Lead",
      image: "https://pagedone.io/asset/uploads/1696230027.png",
      stars: 5
    },
    {
      id: 4,
      quote: "The customer support is exceptional. They helped me solve my problem within minutes.",
      name: "Sarah M.",
      role: "Marketing Director",
      image: "https://pagedone.io/asset/uploads/1696229969.png",
      stars: 5
    },
    {
      id: 5,
      quote: "Our productivity has increased by 40% since we started using Pagedone.",
      name: "Michael T.",
      role: "CTO",
      image: "https://pagedone.io/asset/uploads/1696229994.png",
      stars: 5
    }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-8">
            <button className="swiper-button-prev group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600">
              <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.9999 12L4.99992 12M9.99992 6L4.70703 11.2929C4.3737 11.6262 4.20703 11.7929 4.20703 12C4.20703 12.2071 4.3737 12.3738 4.70703 12.7071L9.99992 18"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper-button-next group flex justify-center items-center border border-solid border-indigo-600 w-12 h-12 transition-all duration-500 rounded-full hover:bg-indigo-600">
              <svg className="h-6 w-6 text-indigo-600 group-hover:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 12L19 12M14 18L19.2929 12.7071C19.6262 12.3738 19.7929 12.2071 19.7929 12C19.7929 11.7929 19.6262 11.6262 19.2929 11.2929L14 6"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        <div className="mb-14 flex flex-col justify-center items-center sm:flex-row sm:items-center sm:justify-between max-sm:gap-8">
          
          <h2 className="text-4xl text-center font-bold text-yellow-900 lg:text-left">Testimonials</h2>
          
          {/* Navigation buttons */}
       
        </div>

        {/* Swiper container */}
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          spaceBetween={28}
          slidesPerView={1}
          centeredSlides={false}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 28,
              centeredSlides: true,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
          }}
          className="mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="group bg-white border border-solid border-gray-300 rounded-2xl p-6 transition-all duration-500 w-full hover:border-indigo-600">
                <div className="flex items-center mb-9 gap-2 text-amber-500 transition-all duration-500 group-hover:text-indigo-600">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                        fill="currentColor"
                      />
                    </svg>
                  ))}
                </div>
                <p className="text-lg text-yellow-500 leading-8 h-24 transition-all duration-500 mb-9 group-hover:text-yellow-800">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-5">
                  <img className="rounded-full w-12 h-12 object-cover" src={testimonial.image} alt={testimonial.name} />
                  <div className="grid gap-1">
                    <h5 className="text-yellow-900 font-medium transition-all duration-500 group-hover:text-indigo-600">
                      {testimonial.name}
                    </h5>
                    <span className="text-sm leading-6 text-yellow-500">{testimonial.role}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Custom styles */}
      <style jsx global>{`
        .swiper-button-prev:after,
        .swiper-rtl .swiper-button-next:after,
        .swiper-button-next:after,
        .swiper-rtl .swiper-button-prev:after {
          content: '' !important;
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
          width: 24px !important;
          height: 24px !important;
        }

        .swiper-button-next,
        .swiper-button-prev {
          position: relative !important;
          top: auto !important;
          margin-top: 0 !important;
          width: auto !important;
          height: auto !important;
        }

        .swiper-slide {
          height: auto !important;
        }

        .swiper-slide.swiper-slide-active .group {
          --tw-border-opacity: 1 !important;
          border-color: rgb(79 70 229 / var(--tw-border-opacity)) !important;
        }

        .swiper-slide.swiper-slide-active .group-hover\\:text-indigo-600 {
          --tw-text-opacity: 1 !important;
          color: rgb(79 70 229 / var(--tw-text-opacity)) !important;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSlider;