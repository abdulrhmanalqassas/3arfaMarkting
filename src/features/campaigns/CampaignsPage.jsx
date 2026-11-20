import { campaignImages } from "@/shared/campaign-images";
import SiteNavigation from "@/shared/navigation/SiteNavigation";

export default function CampaignsPage() {
  return (
    <>
      <SiteNavigation />
      <main className="marketing-content mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <header className="mb-8 text-center sm:mb-12">
          <h1 className="text-4xl font-bold text-yellow-900 dark:text-yellow-300 sm:text-5xl">
            Campaigns
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            Outdoor advertising by Arafa Agency.
          </p>
        </header>
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {campaignImages.map(({ src, alt }) => (
            <li key={src} className="overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
              <img
                src={src}
                alt={alt}
                loading="lazy"
                className="aspect-[4/3] w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}
