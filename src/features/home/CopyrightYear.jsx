"use client";

import { useSyncExternalStore } from "react";

const subscribe = () => () => {};
const getYear = () => new Date().getFullYear();

export default function CopyrightYear({ year }) {
  return useSyncExternalStore(subscribe, getYear, () => year);
}
