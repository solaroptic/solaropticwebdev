import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ImageData {
  src: string;
  alt: string;
  id: string;
  category?: string;
  uri?: string;
}

const Card: React.FC<ImageData> = ({
  src,
  alt,
  id,
  category,
  uri,
}: ImageData) => {
  return (
    <div className="card  w-[9.5rem] md:w-80 lg:w-96 shadow-[20px_20px_50px_-10px] shadow-neutral-50/20 border-2 border-neutral-800 hover:shadow-[#00e5ff]/40  transition duration-500 hover:scale-105 hover:border-purple-800/50 hover:border-2  ">
      <h2 className="text-base sm:text-lg md:text-2xl pb-2 text-center">
        {category}
      </h2>
      <figure className="cursor-pointer">
        <a href={uri || "#"} target="_blank" rel="noopener noreferrer">
          <Image
            src={src}
            alt={alt}
            width={350}
            height={190}
            id={id}
            // layout="fill"
          />
        </a>
      </figure>
      <div className="text-sm md:text-lg lg:text-xl card-body pt-2 pb-2 text-center font-mono">
        <p>{alt}</p>
      </div>
    </div>
  );
};

export default Card;
