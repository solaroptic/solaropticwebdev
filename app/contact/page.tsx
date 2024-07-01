import Back from "@/components/Back";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { PiRocketLaunchThin } from "react-icons/pi";

export default function Page() {
  return (
    <div className="flex flex-col h-screen p-8 pb-12 items-center w-screen justify-center bg-[url('../public/universe-plain.avif')] bg-no-repeat bg-center  bg-fill overflow-hidden">
      <Back />
      <h1 className="py-2 text-3xl md:text-4xl lg:text-6xl pb-8">Contact Me</h1>
      <p className="py-2 text-lg md:text-2xl flex gap-2">
        What can we make happen? <PiRocketLaunchThin className="self-center" />
      </p>
      <p className="py-2 text-sm md:text-lg">kumolanding@gmail.com</p>
      <p className="py-2 text-sm md:text-lg flex items-center gap-2">
        <a
          className="flex items-center gap-2"
          href="https://www.linkedin.com/in/john-fabiszewski-00b8322a9"
        >
          LinkedIn
          <FaLinkedin />
        </a>

        <a
          className="flex items-center gap-2"
          href="https://github.com/solaropticWeb "
        >
          GitHub
          <FaGithub />
        </a>
      </p>
    </div>
  );
}
