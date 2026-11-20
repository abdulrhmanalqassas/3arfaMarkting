"use client";

import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";

function subscribe(callback) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

const readPathname = () => window.location.pathname;

export function useSitePathname() {
  const route = usePathname();
  // The same prerendered route is reused for requests with a trailing slash.
  const prerenderedPath = route === "/" ? route : route.replace(/\/$/, "");
  return useSyncExternalStore(subscribe, readPathname, () => prerenderedPath);
}
