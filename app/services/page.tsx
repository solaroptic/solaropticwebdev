import Back from "@/components/Back";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { PiRocketLaunchThin } from "react-icons/pi";

export default function Page() {
  return (
    <div className="pb-10 flex flex-col md:flex-row flex-1 items-center h-auto lg:h-screen pt-24 p-4 md:p-8 gap-12 bg-[url('../public/universe-plain.avif')] bg-no-repeat bg-center  bg-fill overflow-hidden">
      <Back />
      <div className="w-11/12 md:w-3/4 lg:w-1/2 p-4 rounded-2xl h-auto lg:h-3/4 border border-gray-50 backdrop-blur card-blur-purple relative">
        <h1 className="text-2xl md:text-4xl lg:text-6xl flex py-2">
          Services offered...
          <PiRocketLaunchThin />
        </h1>
        <section className="py-2  font-mono">
          <h2 className=" py-2 underline"> Advertising/Informative</h2>
          <p className="py-2">
            Simple one page custom static site: <strong>$90</strong>
          </p>
          <p className="py-2">
            Multi-page (5-7) custom static site: <strong>$190</strong>
          </p>
          <aside className="py-2 text-xs">add $25 per additional page</aside>
        </section>
        <section className="py-2 font-mono">
          <h2 className=" py-2 underline">Info saving and retrieving</h2>
          <p className="py-2">
            Multi-page site with database storage <strong>$250</strong>
          </p>
          <aside className="py-2 text-xs">add $40 per additional page</aside>
        </section>
        <section className="py-2 font-mono">
          <h2 className=" py-2 underline">Large Projects</h2>
          <p className="py-2">
            (5-page) E-Commerce/Messaging/Special <strong>$500</strong> and up
          </p>
          <aside className="py-2 text-xs">add $50 per additional page</aside>
        </section>
        <section className="py-2 font-mono text-xs">
          <p className="py-1">Payment plans available</p>
          <p className="py-1">Add $30 for logo design</p>
          <p className="py-1">Extra artwork $25-$75 per design</p>
        </section>
      </div>
      {/* bg-[#00e5ff]/40 */}
      <div className="flex flex-col items-center w-11/12 md:w-3/4 lg:w-1/2 p-4 rounded-2xl h-auto border border-gray-50 backdrop-blur card-blur-cyan relative">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl flex py-2">Why..?</h1>
        <section className="py-2 font-mono">
          <p className="py-2 font-mono md:pt-12">
            Don't pay{" "}
            <em>
              <strong>$360-$600</strong>
            </em>{" "}
            a year, EVERY year ($30-$50/mo)
          </p>
          <p className="py-2 font-mono">
            That's{" "}
            <em>
              <strong>$1,800-$3,000</strong>
            </em>{" "}
            every 5 years under their control
          </p>

          <p className="text-base py-2 font-mono">Buy a site from me...</p>
          <p className="py-2 font-mono">
            I'll show you how to host your own website, free.
          </p>
          <p className="py-2">Then, how to get your own domain name, free.</p>
        </section>
        <h2 className="py-2 text-2xl md:text-3xl mt-6">Get in Touch</h2>
        <p className="py-2">kumolanding@gmail.com</p>
        <p className="py-2">
          <a
            href="https://www.linkedin.com/in/john-fabiszewski-00b8322a9"
            className="flex items-center gap-2"
          >
            LinkedIn
            <FaLinkedin />
          </a>
        </p>
      </div>
    </div>
  );
}
