import Letter from "@/components/Letter";
import LetterDisplay from "@/components/LetterDisplay";
import Image from "next/image";
import Link from "next/link";
import { PiRocketLaunchThin } from "react-icons/pi";
import Uranus from "@/components/canvas/Uranus";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start gap-36 p-12 lg:p-24 pb-4 w-full bg-[url('../public/universe-mobile.webp')] md:bg-[url('../public/universe.webp')] bg-no-repeat bg-center  overflow-hidden">
      <div className="z-10 w-full flex flex-col md:flex-row md:justify-between items-center">
        <Link href="/services">
          <h1 className="flex w-full justify-center border border-b border-neutral-800  pb-6 pt-8 relative px-12  md:w-auto rounded-2xl  md:p-6 lg:font-mono text-2xl digits backdrop-blur ">
            <LetterDisplay />
          </h1>
        </Link>
        <a
          className="pointer-events-none flex place-items-center gap-2 p-4 md:p-6 lg:pointer-events-auto lg:p-0 font-mono"
          href="https://www.linkedin.com/in/john-fabiszewski-00b8322a9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="flex w-full justify-center md:border-b md:border-neutral-800  md:pb-6 md:pt-8 relative  md:w-auto rounded-2xl md:border md:p-4 font-mono sm:text-lg md:text-2xl md:backdrop-blur">
            By John Fabiszewski
          </h1>
        </a>
      </div>

      <div className="relative flex flex-col place-items-center pb-12">
        <Image
          className="w-full "
          src="/solar-optic-logo.avif"
          alt="Solar-Optic Logo"
          width={500}
          height={177}
          priority
        />
        <p className="text-base small:text-xl md:text-2xl tracking-widest">
          Web Development
        </p>
      </div>
      <Uranus />
      <div className="absolute bottom-4 lg:bottom-10 w-[96%] lg:w-4/5 mb-16 lg:mb-8  flex justify-around  text-center  bg-gray-50 text-gray-800 text-xs sm:text-base md:text-lg lg:text-3xl rounded-2xl ">
        <Link href="/services" className="flex p-1">
          <PiRocketLaunchThin /> Services
        </Link>
        <Link href="/projects" className="flex p-1">
          <PiRocketLaunchThin />
          Projects
        </Link>
        <Link href="/about" className="flex p-1">
          <PiRocketLaunchThin /> About
        </Link>
        <Link href="/contact" className="flex p-1">
          <PiRocketLaunchThin /> Contact
        </Link>
      </div>
    </main>
  );
}
