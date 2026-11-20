import Link from "next/link";
import { aboutPath } from "@/shared/navigation/site-routes";
import { FiTarget } from "react-icons/fi";
import ExperienceCounter from "./ExperienceCounter";

const aboutImage = "/assets/images/bg/1.png";

export default function Introduction() {
  return (
    <section className="relative md:py-24 py-16" id="about" tabIndex={-1}>
      <div className="container relative">
        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="md:col-span-6">
            <div className="lg:me-8">
              <div className="relative">
                <img
                  src={aboutImage}
                  className="rounded-full shadow dark:shadow-gray-700"
                  alt=""
                />

                <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                  <div className="text-center">
                    <span className="text-teal-500 text-2xl font-semibold mb-0 block">
                      <ExperienceCounter />
                      +
                    </span>
                    <span className="font-semibold block mt-2">
                      Years <br /> Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <div className="lg:ms-8">
              <p className="text-teal-500 text-sm font-semibold uppercase mb-2">
                <FiTarget className="size-12 inline-block mr-1" /> who we are ?
              </p>
              <h2 className=" text-4xl font-semibold text-2xl leading-normal mb-4">
                seeks to create, <br />
                lead and manage brands <br /> around Egypt .
              </h2>

              <p className="text-slate-400 max-w-xl mb-6">
                Arafa Agency is an organization seeks to create, lead and manage
                brands around Egypt. As per our point view “Branding” not only
                means to create visual identity for business, but also to
                identify, create and manage the cumulative assets and actions
                that shape the perception of a brand.
              </p>

              <Link
                href={aboutPath}
                prefetch={false}
                className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-amber-400 text-slate-950"
              >
                Read More{" "}
                <i aria-hidden="true" className="mdi mdi-chevron-right align-middle ms-0.5"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
