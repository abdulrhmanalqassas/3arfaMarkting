import { TbTarget } from "react-icons/tb";
import ContactMessageForm from "./ContactMessageForm";
import { contactEmail } from "./contact-details";

const contact = "/assets/images/contact.svg";

export default function ContactForm() {
  return (
    <section
      className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800"
      id="contact"
      tabIndex={-1}
    >
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h2 className="text-teal-500 font-semibold text-4xl  leading-normal mb-4  ">
            {" "}
            <TbTarget className="size-12 inline-block mr-1 " /> Get in touch{" "}
          </h2>

          <p className="text-slate-400 max-w-xl mx-auto">
            Use the form to open a draft in your email app, or email{" "}
            <a className="underline" href={"mailto:" + contactEmail}>{contactEmail}</a>.
          </p>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
          <div className="lg:col-span-7 md:col-span-6">
            <img src={contact} alt="" />
          </div>

          <div className="lg:col-span-5 md:col-span-6">
            <div className="lg:ms-5">
              <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-700 p-6">
                <ContactMessageForm>
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                    <div className="lg:col-span-6">
                      <label htmlFor="name" className="font-semibold">
                        Your Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        autoComplete="name"
                        required
                        className="contact-field mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Name :"
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="email" className="font-semibold">
                        Your Email:
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="contact-field mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Email :"
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="subject" className="font-semibold">
                        Your Question:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        className="contact-field mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Subject :"
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="comments" className="font-semibold">
                        Your Comment:
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        required
                        className="contact-field mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Message :"
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-amber-400 text-slate-950 mt-2"
                  >
                    Open Email Draft
                  </button>
                </ContactMessageForm>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
