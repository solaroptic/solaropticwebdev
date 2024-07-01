import Link from "next/link";
import React from "react";
import { PiRocketLaunchThin } from "react-icons/pi";

export default function Back() {
  return (
    <>
      <Link
        href="/"
        className="fixed top-2.5 left-2.5 cursor-pointer hover:text-neutral-400 z-50 backdrop-blur rounded-2xl"
      >
        <PiRocketLaunchThin className="text-4xl m-auto " />
        <p className="">Home</p>
      </Link>
    </>
  );
}
