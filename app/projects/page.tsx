"use client";
import Back from "@/components/Back";
import React, { useState, useEffect } from "react";
import { images } from "@/utils/pngList";
import Card from "@/components/Card";
import Image from "next/image";
import { PiRocketLaunchThin } from "react-icons/pi";

export default function Page() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const parallaxSpeed = 1.2;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative bg-[url('../public/universe-plain.avif')] bg-no-repeat bg-center  overflow-hidden  bg-fill">
      <div
        className="absolute bottom-0 right-1/2 z-30"
        style={{
          transform: `translateY(-${scrollPosition * parallaxSpeed}px)`,
        }}
      >
        <Image
          className="w-full "
          src="/astro.avif"
          alt="astronaut floating up"
          width={55}
          height={55}
          priority
        />
      </div>
      <Back />
      <h1 className="text-3xl md:text4xl lg:text-6xl p-6 pt-20 pb-12 md:p-20">
        My Work...
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-items-center">
        {images.map(({ src, alt, id, category, uri }) => (
          <Card
            key={id}
            src={src}
            alt={alt}
            id={id}
            uri={uri || "#"}
            category={category}
          />
        ))}
      </div>
      <h1 className="text-center p-12 text-3xl md:text4xl lg:text-6xl flex justify-center">
        ...and more to come
        <PiRocketLaunchThin />
      </h1>
    </div>
  );
}
