import SiteNavigation from "@/shared/navigation/SiteNavigation";
import Hero from "./Hero";
import Introduction from "./Introduction";
import Services from "./Services";
import Partners from "./Partners";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function HomePage() {
  return (
    <>
      <SiteNavigation />
      <main className="marketing-content">
        <Hero />
        <Introduction />
        <Services />
        <Partners />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
