"use client";

import CountUp from "react-countup";

export default function ExperienceCounter() {
  return <CountUp className="counter-value text-6xl font-semibold" start={0} end={20} />;
}
