import Back from "@/components/Back";
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Page() {
  return (
    <div className="flex flex-col h-auto lg:h-screen p-4 lg:p-8 items-center w-screen justify-center pb-12 bg-[url('../public/universe-plain.avif')] bg-no-repeat bg-center overflow-hidden bg-fill">
      <Back />
      {/* <div className="border rounded-2xl border-gray-50 flex flex-col  p-4 items-center w-[80%] justify-center"> */}
      <h1 className="py-2 text-3xl md:text-4xl lg:text-6xl pt-14 pb-4 md:pb-8">
        About
      </h1>
      <div className="flex flex-col w-11/12 md:w-2/4 text-base md:text-lg font-mono  ">
        <p className="py-2">
          I'm a web developer and proud Wacoan with almost 3 years experience
          building websites in Javascript and React. I've been certified (CCNA)
          in networking and (CompTIA Sec+) web security. I'm available for
          Full-Stack jobs as I've built servers and databases for dozens of
          projects.
        </p>
        <p className="py-2">
          Outside of freelance work, I've been focusing on apps for locals that
          involve our community.{" "}
          <a className="text-cyan-300" href="https://growwaco.org/">
            Grow Waco
          </a>{" "}
          is one such project that allows regular people to make and vote on
          proposals for Waco. Have any ideas you'd like to see come to life? Let
          me know! Fellow devs welcome for collaboration.
        </p>
        <p className="py-2">
          My clients are real people who truly deserve a sincere effort for
          their hard-earned money. I will make it right. I'm a listener and I
          can help you make your project a reality.
        </p>

        <p className="py-2 self-center ">Skills & Technology:</p>
        <p className="py-2">
          NEXT | React | Typescript | Solidity | Javascript | Node | Redux/RTK |
          Git | MERN | SQL | Tailwind | Networking | Security | Design |
          Graphics | GIMP
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-1 md:gap-4 mt-4 items-center">
        <p className="py-2">
          <a
            className="flex items-center gap-2"
            href="https://github.com/solaropticWeb "
          >
            GitHub
            <FaGithub />
          </a>
        </p>
        <p className="py-2">kumolanding@gmail.com</p>
        <p className="py-2">
          <a
            className="flex items-center gap-2"
            href="https://www.linkedin.com/in/john-fabiszewski-00b8322a9"
          >
            LinkedIn
            <FaLinkedin />
          </a>
        </p>
      </div>
    </div>
  );
}
