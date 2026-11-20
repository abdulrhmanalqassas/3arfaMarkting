import { TbTarget } from "react-icons/tb";
import PartnerCanvas from "./PartnerCanvas";

export default function Partners() {
  return (
    <section
      id="partners"
      tabIndex={-1}
      aria-labelledby="partners-heading"
      className="relative flex w-full flex-col items-center justify-center"
    >
      <span id="campaigns" className="absolute top-0" aria-hidden="true" />
      <h2 id="partners-heading" className="my-6 text-4xl font-semibold leading-normal text-teal-500">
        <TbTarget aria-hidden="true" className="mr-1 inline-block size-12" /> Our Partners
      </h2>
      <PartnerCanvas />
    </section>
  );
}
