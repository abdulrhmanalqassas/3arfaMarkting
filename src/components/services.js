import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/data";
import target from "../assets/icons/target.svg";
export default function Services() {
  return (
    <section
      className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
      id="services"
    >
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="text-teal-500 font-semibold text-4xl leading-normal mb-4">
            🎯 Our Services
          </h3>

          <p className="text-slate-400 text-xl max-w-xl mx-auto">
            This is just a simple text made for this unique and awesome
            template, you can replace it with any text.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row  justify-around items-stretch gap-6 mt-6">
  {servicesData.map((item, index) => {
    let Icon = item.icon;
    return (
      <div
        className="group flex flex-col items-center rounded-full shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden flex-grow"
        key={index}
      >
        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
          <Icon className="size-6 rotate-45"></Icon>
        </div>

        <div className="content mt-6 relative z-1 flex-grow flex flex-col justify-between">
          <Link
            to=""
            className="text-teal-500 title text-lg font-semibold"
          >
            <img
              src={target}
              alt=""
              className="me-2 inline-block size-12"
            />
            {item.title}
          </Link>
          <p className="text-slate-100 mt-3 p-5 md:p-0 text-xl text-justify">{item.desc}</p>

          <div className="mt-6 mx-auto">
            {/* <Link to="" className="text-teal-500">
              Read More{" "}
              <i className="mdi mdi-chevron-right align-middle"></i>
            </Link> */}
          </div>
        </div>

        <div className="absolute bottom-0 -end-16">
          <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500"></Icon>
        </div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  );
}
