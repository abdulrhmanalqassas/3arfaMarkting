import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import bg1 from "../assets/images/bg/bg1.jpg"; // First background image
import bg2 from "../assets/images/bg/bg2.jpg"; // Second background image
import bg3 from "../assets/images/bg/bg3.jpg"; // Third background image
// Third background image

import NavLight from "../components/navLight";
import About from "../components/about";
import Services from "../components/services";

import Footer from "../components/footer";
import Switcher from "../components/switcher";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";
import GetInTouch from "../components/getInTuoch";
import Partnners from "../components/Partners.scene";

import target from "../assets/icons/target.svg";
import Cta from "../components/cta";
import Blogs from "../components/blog";
import AgencyTab from "../components/agencyTab";
import Pricing from "../components/pricing";

export default function IndexTwo() {
  const [bg, setBg] = useState(bg1);
  let [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const images = [bg1, bg2, bg3];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      setBg(images[currentIndex]);
    }, 5000); // Change the background every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <>
      <NavLight />
      <section
        className="relative table w-full py-36 lg:py-64 overflow-hidden"
        id="home"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute image-wrap -top-[350px] -bottom-[350px] -start-[100px] -end-[100px] min-w-full w-auto min-h-full h-auto overflow-hidden m-auto bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        </div>
        <div className="absolute inset-0 "></div>

        <div className="container relative">
          <div className="grid grid-cols-1 text-center">
            <div className="text-center">
              <Link
                to="#!"
                onClick={() => setOpen(true)}
                className="lightbox size-20 rounded-full shadow-lg dark:shadow-gray-700 inline-flex items-center justify-center bg-white dark:bg-slate-900 text-teal-500 dark:text-white"
              >
                <i className="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
              </Link>
            </div>
            <ModalVideo
              channel="youtube"
              autoplay
              youtube={{ mute: 0, autoplay: 1 }}
              isOpen={isOpen}
              videoId="mVSU0pJAYUI"
              onClose={() => setOpen(false)}
            />

            <h4 className="text-teal-500 font-semibold lg:leading-normal leading-normal tracking-wide text-4xl lg:text-5xl my-5">
              <img
                src={target}
                alt=""
                className="me-2 inline-block size-12 text-teal-500"
              />{" "}
              arafa Your destination to the top
            </h4>

            <p className="text-white/70 text-lg max-w-xl mx-auto">
              Arafa Agency is an organization seeks to create, lead and manage
              brands around Egypt.
            </p>

            <div className="relative mt-8"></div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="absolute block w-full h-auto bottom-[25px] z-1 start-0">
          <Link to="">
            <i className="mdi mdi-arrow-down absolute top-0 start-0 end-0 text-center inline-flex items-center justify-center rounded-full bg-white dark:bg-slate-900 h-20 w-12 mx-auto shadow-md dark:shadow-gray-800"></i>
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
      <About />
      <Services />
      <Partnners />
      {/* <Switcher />
      <Cta />
      <AgencyTab />
      <Pricing />
      <Blogs /> */}
      <GetInTouch />
      <Footer />
    </>
  );
}
