"use client";

import dynamic from "next/dynamic";
import { Component, useEffect, useRef, useState } from "react";
import { campaignImages } from "@/shared/campaign-images";

const PartnerScene = dynamic(() => import("./PartnerScene"), { ssr: false });

function CampaignImages() {
  return (
    <ul aria-label="Campaign photos" className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {campaignImages.map(({ src, alt }) => (
        <li key={src}>
          <img src={src} alt={alt} className="w-full rounded-md object-cover aspect-[4/3]" />
        </li>
      ))}
    </ul>
  );
}

class PartnerSceneBoundary extends Component {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  render() {
    return this.state.failed ? <CampaignImages /> : this.props.children;
  }
}

export default function PartnerCanvas() {
  const preview = useRef(null);
  const [canAnimate, setCanAnimate] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();

      const context = document.createElement("canvas").getContext("webgl2");
      setCanAnimate(Boolean(context));
      context?.getExtension("WEBGL_lose_context")?.loseContext();
    }, { rootMargin: "300px" });

    observer.observe(preview.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="partner-preview" ref={preview}>
      {canAnimate === false && <CampaignImages />}
      {canAnimate === true && (
        <PartnerSceneBoundary>
          <PartnerScene />
        </PartnerSceneBoundary>
      )}
    </div>
  );
}
