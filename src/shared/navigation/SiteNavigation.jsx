"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { getEntryNavigation, historyHashChange } from "./history-hash";
import { useSitePathname } from "./use-site-pathname";
import { aboutPath, campaignsPath, homePath } from "./site-routes";

const logoDark = "/assets/images/logo-dark.png";
const logoLight = "/assets/images/logo-light.png";

function subscribeToHash(callback) {
  const navigation = getEntryNavigation();
  const historyEvents = navigation ?? window;
  const historyEvent = navigation ? "currententrychange" : historyHashChange;
  // Notify React after the router finishes committing the history update.
  const notifyAfterCommit = () => queueMicrotask(callback);

  historyEvents.addEventListener(historyEvent, notifyAfterCommit);
  window.addEventListener("hashchange", callback);
  window.addEventListener("popstate", callback);
  return () => {
    historyEvents.removeEventListener(historyEvent, notifyAfterCommit);
    window.removeEventListener("hashchange", callback);
    window.removeEventListener("popstate", callback);
  };
}

const readHash = () => window.location.hash;
const serverHash = () => "";

export default function SiteNavigation() {
  const pathname = useSitePathname().replace(/\/$/, "");
  const hash = useSyncExternalStore(subscribeToHash, readHash, serverHash);
  const isPartnersActive =
    pathname === homePath && (hash === "#partners" || hash === "#campaigns");
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function updateStickyState() {
      setScroll(window.scrollY > 50);
    }
    updateStickyState();
    window.addEventListener("scroll", updateStickyState, { passive: true });
    return () => window.removeEventListener("scroll", updateStickyState);
  }, []);

  return (
    <nav className={`navbar ${scroll ? "is-sticky" : ""}`} id="navbar">
      <div className="container relative flex flex-wrap items-center justify-between">
        <Link className="navbar-brand md:me-8" href={homePath} aria-label="Arafa Agency home" onNavigate={() => setMenuOpen(false)}>
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
              <Link
                href={homePath + "#contact"}
                onNavigate={() => setMenuOpen(false)}
                className="h-8 px-4 text-[12px] tracking-wider inline-flex items-center justify-center font-medium rounded-md bg-amber-400 text-slate-950 uppercase"
              >
                contact us
              </Link>
            </li>
          </ul>
          <button
            data-collapse="menu-collapse"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="menu-collapse"
            className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="sr-only">Navigation Menu</span>
            <i aria-hidden="true" className="mdi mdi-menu text-[24px]"></i>
          </button>
        </div>

        <div
          className={`navigation lg_992:order-1 lg_992:flex  ms-auto ${
            menuOpen ? "" : "hidden"
          }`}
          id="menu-collapse"
        >
          <ul className="navbar-nav nav-light sidebar-nav" id="navbar-navlist">
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  pathname === homePath ? "active" : ""
                }`}
                href={homePath}
                aria-current={pathname === homePath ? "page" : undefined}
                onNavigate={() => setMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  pathname === aboutPath ? "active" : ""
                }`}
                href={aboutPath}
                aria-current={pathname === aboutPath ? "page" : undefined}
                onNavigate={() => setMenuOpen(false)}
                prefetch={false}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  hash === "#about" ? "active" : ""
                }`}
                href={homePath + "#about"}
                onNavigate={() => setMenuOpen(false)}
              >
                More
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  isPartnersActive ? "active" : ""
                }`}
                href={homePath + "#partners"}
                aria-current={isPartnersActive ? "location" : undefined}
                onNavigate={() => setMenuOpen(false)}
              >
                Our Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ms-0 ${
                  pathname === campaignsPath ? "active" : ""
                }`}
                href={campaignsPath}
                aria-current={pathname === campaignsPath ? "page" : undefined}
                onNavigate={() => setMenuOpen(false)}
              >
                Campaigns
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
