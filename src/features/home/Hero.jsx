"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import VideoModal from "./VideoModal";

const backgrounds = ["/assets/images/bg/bg1.jpg", "/assets/images/bg/bg2.jpg", "/assets/images/bg/bg3.jpg"];

export default function Hero() {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer;

    function updateRotation() {
      clearInterval(timer);
      if (preference.matches) return;
      timer = setInterval(() => {
        setBackgroundIndex((current) => (current + 1) % backgrounds.length);
      }, 5000);
    }

    updateRotation();
    preference.addEventListener("change", updateRotation);
    return () => {
      clearInterval(timer);
      preference.removeEventListener("change", updateRotation);
    };
  }, []);

  return (
    <>
      <section
        className="relative table w-full py-36 lg:py-64 overflow-hidden"
        id="home"
        tabIndex={-1}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${backgrounds[backgroundIndex]})` }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black/45"></div>

        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <div className="text-center">
              <button
                type="button"
                aria-label="Play agency video"
                onClick={() => setOpen(true)}
                className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white"
              >
                <i aria-hidden="true" className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
              </button>
            </div>
            {isOpen && <VideoModal onClose={() => setOpen(false)} />}

            <h1 className="text-amber-300 font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5">
              <img
                src="/assets/icons/target.svg"
                alt=""
                className="me-2 inline-block size-12 text-teal-500"
              />{" "}
              arafa Your destination to the top
            </h1>

            <p className="text-white text-lg max-w-xl mx-auto">
              Arafa Agency is an organization seeks to create, lead and manage
              brands around Egypt.
            </p>

            <div className="relative mt-8"></div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
          <Link
            href="#about"
            aria-label="Scroll to Who we are"
            className="absolute top-0 start-0 end-0 inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-20 w-12 mx-auto shadow-md dark:shadow-gray-800"
          >
            <i aria-hidden="true" className="mdi mdi-arrow-down"></i>
          </Link>
        </div>

        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}
