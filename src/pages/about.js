import { Parallax } from "react-scroll-parallax";

import mission from "../assets/images/bg/bg1.jpg"; // First background image
import vision from "../assets/images/bg/bg2.jpg"; // Second background image
import safety from "../assets/images/bg/bg3.jpg"; // Third background image
import { UAParser } from "ua-parser-js";
import NavLight from "../components/navLight";
import TestimonialsSlider from "../components/TestimonialsSlider";
import TeamSection from "../components/team";
import Client from "../components/client";
export function isMobileDevice() {
  const parser = new UAParser();
  const deviceType = parser.getDevice().type;

  const isMobile = deviceType === "mobile" || deviceType === "tablet";

  return isMobile;
}
const ImgParallax = ({ speed, imgSrc }) => {
  return (
    <Parallax speed={speed}>
      <div className=" sm:p-16 md:p-4 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
        <img
          alt=""
          src={imgSrc}
          className="w-full max-w-none md:w-[48rem] rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
        />
      </div>
    </Parallax>
  );
};
export const AboutPage = () => {
  const t = (key) => key;

  return (
    <>
      <NavLight />
      {/* <div className="relative isolate mt-24">
        <div className="absolute inset-0 -z-10 h-full">
          <svg
            aria-hidden="true"
            className="absolute left-[max(50%,25rem)] top-0 h-full w-[100%] -translate-x-1/2 stroke-yellow-300 [mask-image:radial-gradient(150rem_150rem_at_top,white,transparent)]"
          >
            <defs>
              <pattern
                x={isMobileDevice ? 22 : "00%"}
                y={-1}
                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg
              x={isMobileDevice ? 22 : "0%"}
              y={-1}
              className="overflow-visible fill-yellow-500"
            >
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>
        </div>

        <div className="mt-22 sm:h-72 pt-10 sm:pt-7 text-4xl text-white font-outline-1 text-center ">
          <h1 className="text-3xl font-bold tracking-tight mt-12 text-white">
            who we are{" "}
          </h1>
        </div>

        <div className="relative">
          <div className="relative isolate gap-9 overflow-hidden bg-gradient-inverse px-6 py-24 sm:py-24 lg:overflow-visible lg:px-0 h-auto flex flex-col md:flex-row items-center justify-center">
            <ImgParallax speed={-10} imgSrc={vision} />
            <Parallax speed={10}>
              <div className="lg:pr-4 mt-4 lg:mt-0">
                <div className="max-w-xl text-base/7 text-white text-2xl lg:max-w-lg">
                  <h2 className="mt-4 lg:mt-16 text-3xl font-bold tracking-tight text-white">
                    {t("who.our_vision")}
                  </h2>
                  lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Doloremque, voluptatibus mkok lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Doloremque, lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Doloremque,
                  voluptatibus mkok lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Doloremque, voluptatibus. voluptatibus.
                </div>
              </div>
            </Parallax>
          </div>

          <div className="relative isolate gap-9 overflow-hidden bg-gradient-inverse px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 h-auto flex flex-col md:flex-row items-center justify-center">
            {isMobileDevice() ? (
              <ImgParallax className="h-max" speed={-10} imgSrc={mission} />
            ) : null}
            <Parallax speed={10}>
              <div className="lg:pr-4">
                <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
                  <h2 className="mt-4 lg:mt-16 text-3xl font-bold tracking-tight text-white">
                    Lorem ipsum dolor xl
                  </h2>
                  <p className="mt-6 text-">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, voluptatibus. lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque, voluptatibus.
                  </p>
                </div>
              </div>
            </Parallax>

            {isMobileDevice() ? null : (
              <ImgParallax speed={-10} imgSrc={mission} />
            )}
          </div>

          <div className="relative isolate gap-9 overflow-hidden bg-gradient-inverse px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 h-auto flex flex-col md:flex-row items-center justify-center">
            <ImgParallax speed={-10} imgSrc={safety} />
            <Parallax speed={10}>
              <div className="lg:pr-4 mt-4 lg:mt-0">
                <div className="max-w-xl text-base/7 text-white lg:max-w-lg">
                  <h2 className="mt-4 lg:mt-16 text-3xl font-bold tracking-tight text-white">
                    {t("who.quality_safety")}
                  </h2>
                  <p>
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, voluptatibus. lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Doloremque, voluptatibus.
                    <br />
                    lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloremque, voluptatibus.
                  </p>
                </div>
              </div>
            </Parallax>
          </div>
        </div>
      </div> */}

      <section className="py-24 relative">
        <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
          <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-12">
            <div className="w-full lg:w-1/2 flex-col justify-center lg:items-start items-center gap-10 inline-flex">
              <div className="w-full flex-col justify-center items-start gap-8 flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-yellow-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                    Empowering Each Other to Succeed
                  </h2>
                  <p className="text-yellow-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    Every project we've undertaken has been a collaborative
                    effort, where every person involved has left their mark.
                    Together, we've not only constructed buildings but also
                    built enduring connections that define our success story.
                  </p>
                </div>
                <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                  <div className="flex-col justify-start items-start inline-flex">
                    <h3 className="text-yellow-900 text-4xl font-bold font-manrope leading-normal">
                      33+
                    </h3>
                    <h6 className="text-yellow-500 text-base font-normal leading-relaxed">
                      Years of Experience
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-yellow-900 text-4xl font-bold font-manrope leading-normal">
                      125+
                    </h4>
                    <h6 className="text-yellow-500 text-base font-normal leading-relaxed">
                      Successful Projects
                    </h6>
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <h4 className="text-yellow-900 text-4xl font-bold font-manrope leading-normal">
                      52+
                    </h4>
                    <h6 className="text-yellow-500 text-base font-normal leading-relaxed">
                      Happy Clients
                    </h6>
                  </div>
                </div>
              </div>
                {/* <button className="sm:w-fit w-full px-3.5 py-2 bg-indigo-600 hover:bg-indigo-800 transition-all duration-700 ease-in-out rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                  <span className="px-1.5 text-white text-sm font-medium leading-6">
                    Read More
                  </span>
                </button> */}
            </div>
            <div className="w-full lg:w-1/2 justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1">
              <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                <img
                  className="rounded-xl object-cover"
                  src="https://pagedone.io/asset/uploads/1717741205.png"
                  alt="about Us image"
                />
              </div>
              <img
                className="sm:ml-0 ml-auto rounded-xl object-cover"
                src="https://pagedone.io/asset/uploads/1717741205.png"
                alt="about Us image"
              />
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSlider />
      <Client />
      <TeamSection />
    </>
  );
};

export default AboutPage;
