import SiteNavigation from "@/shared/navigation/SiteNavigation";
import Testimonials from "./Testimonials";
import ClientReviews from "./ClientReviews";
import Gallery from "./Gallery";
import Team from "./Team";

const introductionImage = "/assets/images/about/1717741205.png";

export default function AboutPage() {
  return (
    <>
      <SiteNavigation />
      <main className="marketing-content">
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full flex flex-col lg:flex-row justify-start items-center gap-12">
              <div className="w-full lg:w-1/2 flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-center items-start gap-8 flex">
                  <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                    <h1 className="text-yellow-900 dark:text-yellow-300 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                      Empowering Each Other to Succeed
                    </h1>
                    <p className="text-yellow-800 dark:text-yellow-200 text-base font-normal leading-relaxed lg:text-start text-center">
                      Every project we&apos;ve undertaken has been a collaborative
                      effort, where every person involved has left their mark.
                      Together, we&apos;ve not only constructed buildings but also
                      built enduring connections that define our success story.
                    </p>
                  </div>
                  <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                    <div className="flex-col justify-start items-start inline-flex">
                      <p className="text-yellow-900 dark:text-yellow-300 text-4xl font-bold font-manrope leading-normal">
                        33+
                      </p>
                      <p className="text-yellow-800 dark:text-yellow-200 text-base font-normal leading-relaxed">
                        Years of Experience
                      </p>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <p className="text-yellow-900 dark:text-yellow-300 text-4xl font-bold font-manrope leading-normal">
                        125+
                      </p>
                      <p className="text-yellow-800 dark:text-yellow-200 text-base font-normal leading-relaxed">
                        Successful Projects
                      </p>
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <p className="text-yellow-900 dark:text-yellow-300 text-4xl font-bold font-manrope leading-normal">
                        52+
                      </p>
                      <p className="text-yellow-800 dark:text-yellow-200 text-base font-normal leading-relaxed">
                        Happy Clients
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1">
                <div className="sm:pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
                  <img
                    className="rounded-xl object-cover"
                    src={introductionImage}
                    alt=""
                    width={280}
                    height={340}
                  />
                </div>
                <img
                  className="sm:ml-0 ml-auto rounded-xl object-cover"
                  src={introductionImage}
                  alt=""
                  width={280}
                  height={340}
                />
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <ClientReviews />
        <Gallery />
        <Team />
      </main>
    </>
  );
}
