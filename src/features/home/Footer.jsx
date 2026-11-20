import Link from "next/link";
import { FiFacebook, FiMail } from "react-icons/fi";
import { contactEmail } from "./contact-details";
import CopyrightYear from "./CopyrightYear";

const logoLight = "/assets/images/logo-light.png";

export default function Footer() {
  return (
    <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
      <div className="py-[30px] px-0 border-t border-slate-800">
        <div className="container relative text-center">
          <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center gap-2">
            <div className="lg:col-span-3 md:text-start text-center">
              <Link href="#home" className="text-[22px]" aria-label="Back to top">
                <img
                  src={logoLight}
                  className="mx-auto md:me-auto md:ms-0"
                  alt=""
                />
              </Link>
            </div>

            <div className="lg:col-span-5 text-start mt-6 md:mt-0">
              <p className="mb-0">
                © <CopyrightYear year={new Date().getFullYear()} /> Developed with{" "}
                <i aria-hidden="true" className="mdi mdi-heart text-red-600"></i> by Qassas.
              </p>

              <p>☎ call: 047-310-711</p>
              <p>📞01099909578</p>
            </div>

            <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
              <li className="inline">
                <a
                  href="https://www.facebook.com/Arafa.Agency/"
                  target="_blank"
                  aria-label="Arafa Agency on Facebook"
                  className="size-8 inline-flex justify-center items-center border  border-x-orange-500 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"
                >
                  <FiFacebook aria-hidden="true" className="size-4 align-middle" />
                </a>
              </li>
              <li className="inline">
                <a
                  href={"mailto:" + contactEmail}
                  aria-label="Email Arafa Agency"
                  className="size-8 inline-flex justify-center items-center border  border-x-orange-500 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"
                >
                  <FiMail aria-hidden="true" className="size-4 align-middle" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
