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
          I'm a web developer, with 2.5 years experience in Javascript and
          React. I'm comfortable with networking (CCNA 2020-23) and web security
          (CompTIA Security+ 2021-2024) going back almost 4 years, and now
          making headwinds into EVM-based blockchains with Solidity.
        </p>
        <p className="py-2">
          Focusing on apps for locals that improve our community, I'm working on
          projects that advance my NEXT.js in Typescript skills. Parallel to
          that, I continue to develop my MERN experience and backend development
          with Node, MongoDb, MySQL, and GraphQL. My styling is often done in
          CSS modules, but I'm working with more Tailwind lately. Java, Solidity
          and Angular work coming soon...
        </p>
        <p className="py-2">
          My clients are real people who truly deserve a sincere effort for
          hard-earned money. I will make it right. In teamwork, I look to find
          my place with a sharp team in an environment that builds mutual
          purpose from the inside-out.
        </p>

        <p className="py-2 self-center ">Skills & Technology:</p>
        <p className="py-2">
          NEXT | React | Typescript | Solidity | Javascript | Node | Redux/RTK |
          Git | MERN | SQL | Tailwind | Networking | Security
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
