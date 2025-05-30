import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoDark from "../assets/images/logo-dark.png";
import logoLight from "../assets/images/logo-light.png";
import { Link as Link1 } from "react-scroll";

export default function NavLight() {
  let [scroll, setScroll] = useState(false);
  let [manu, setManu] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY > 50);
      });
    };
  }, []);

  return (
    <nav className={`navbar ${scroll ? "is-sticky" : ""}`} id="navbar">
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8" to="/">
          <span className="inline-block dark:hidden">
            <img src={logoDark} className="h-20  l-dark" alt="" />
            <img src={logoLight} className="h-20 l-light" alt="" />
          </span>
          <img
            src={logoLight}
            className="h-24 w-40 hidden dark:inline-block"
            alt=""
          />
        </Link>

        <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
          <ul className="list-none menu-social mb-0">
            <li className="inline">
              <Link1
                to="contact"
                className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white uppercase"
              >
                contact us
              </Link1>
            </li>
          </ul>
          <button
            data-collapse="menu-collapse"
            type="button"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            onClick={() => setManu(!manu)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div
          className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${
            manu ? "" : "hidden"
          }`}
          id="menu-collapse"
        >
          <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  location.pathname === "/3arfaMarkting" ? "active" : ""
                }`}
                to="/3arfaMarkting"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  location.pathname === "/3arfaMarkting/about" ? "active" : ""
                }`}
                to="/3arfaMarkting/about"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  location.hash === "#about" ? "active" : ""
                }`}
                // to="about"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                more
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  location.hash === "#about" ? "active" : ""
                }`}
                to="about"
                // smooth={true}
                // duration={1000}
                // activeClass="active"
                // spy={true}
              >
                Campaiyns
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
