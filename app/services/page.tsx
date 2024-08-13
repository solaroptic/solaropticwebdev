import Back from "@/components/Back";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { PiRocketLaunchThin } from "react-icons/pi";

export default function Page() {
  return (
    <div className="pb-10 flex flex-col md:flex-row flex-1 items-center h-auto lg:h-screen pt-24 p-4 md:p-8 gap-12 bg-[url('../public/universe-plain.avif')] bg-no-repeat bg-center  bg-fill overflow-hidden">
      <Back />
      <div className="w-11/12 md:w-3/4 lg:w-1/2 p-4 rounded-2xl h-auto lg:h-2/3 border border-gray-50 backdrop-blur card-blur-purple relative">
        <h1 className="text-2xl md:text-4xl lg:text-6xl flex py-2">
          Services offered...
          <PiRocketLaunchThin />
        </h1>
        <section className="py-2  font-mono">
          <h2 className=" py-2 underline">Basic Design Services </h2>
          <ul className="pl-4">
            <li className="py-1 list-disc">
              Basic one page static site: <strong>$59 </strong>
            </li>
            <li className="pt-1 list-disc">
              Basic 4 page static site: <strong>$89</strong>{" "}
              <aside className="py-1 text-xs">
                add $20 per additional page
              </aside>
            </li>
          </ul>
        </section>
        <section className="py-2 font-mono">
          <h2 className=" pb-2 underline">Custom Design Services</h2>
          <ul className="pl-4">
            <li className="py-1 list-disc">
              Custom one page static site: <strong>$79</strong>
            </li>
            <li className="py-1 list-disc">
              Custom Multi-page (4-7) static site: <strong>$149</strong>{" "}
              <aside className="py-1 text-xs">
                add $30 per additional page, db table, or payments setup
              </aside>
              <aside className="pt-1 text-xs">
                Add $30 for logo design/Extra artwork $25-$75 per design
              </aside>
            </li>
          </ul>
        </section>
        <section className="py-2 font-mono">
          <h2 className=" py-2 underline">Hosting Solutions</h2>
          <ul className="pl-4">
            <li className="py-1 list-disc">
              Basic <strong>$9.99/month</strong> or <strong>$99/year</strong>
            </li>
            <li className="py-1 list-disc">
              Hosting + database + monthly updates: <strong>$19/month</strong>{" "}
              or <strong>$199/year</strong>
              <aside className="pt-1 text-xs">
                $5-$30 per page for modifications depending on work required
              </aside>
            </li>
          </ul>
        </section>
      </div>
      {/* BREAK BREAK BREAK bg-[#00e5ff] */}
      <div className="flex flex-col items-center w-11/12 md:w-3/4 lg:w-1/2 p-4 rounded-2xl h-auto lg:h-2/3 border border-gray-50 backdrop-blur card-blur-cyan relative">
        <h1 className=" text-2xl md:text-4xl lg:text-6xl flex py-2">
          Let's Go!
        </h1>
        <section className="py-2 text-center">
          <p className="py-2 font-mono">
            Email before ordering at kumolanding@gmail.com
          </p>
          <h2 className=" py-4 underline">Design & Programming Services</h2>
          <a href={process.env.DESIGN_PAY_URL}>
            <button>Order Now</button>
          </a>
          <h2 className=" pb-4 pt-6 underline">Hosting Services</h2>
          <div className="flex flex-col gap-4 justify-center">
            <div className="flex justify-around gap-4">
              <span>
                Monthly $9.99{" "}
                <a href={process.env.HOST_MONTHLY_URL}>
                  <button>Order Now</button>
                </a>
              </span>
              <span>
                Yearly $99{" "}
                <a href={process.env.HOST_YEARLY_URL}>
                  <button>Order Now</button>
                </a>
              </span>
            </div>
            <h2 className="underline">Hosting +</h2>
            <div className="flex justify-around">
              <span>
                Monthly $19{" "}
                <a href={process.env.HOST_PLUS_MONTHLY_URL}>
                  <button>Order Now</button>
                </a>
              </span>
              <span>
                Yearly $199{" "}
                <a href={process.env.HOST_PLUS_YEARLY_URL}>
                  <button>Order Now</button>
                </a>
              </span>
            </div>
          </div>
        </section>

        <section className="py-2 pt-4 font-mono text-center">
          <p className=" ">Let me save you valuable time and money.</p>
          <a
            href="https://www.linkedin.com/in/john-fabiszewski-00b8322a9"
            className="flex justify-center items-center gap-2"
          >
            LinkedIn
            <FaLinkedin />
          </a>
        </section>
      </div>
    </div>
  );
}
