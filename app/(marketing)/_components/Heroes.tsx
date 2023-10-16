import React from "react";
import Image from "next/image";

export default function Heroes() {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <figure
          className="relative w-[300px] h-[300px] sm:w-[350px]
    sm:h-[350px] md:w-[400px] md:h-[400px]"
        >
          <Image
            src={"/documents.png"}
            fill
            className="object-contain dark:hidden"
            alt="documents"
          />
          <Image
            src={"/documents-dark.png"}
            fill
            className="object-contain hidden dark:block"
            alt="documents"
          />
        </figure>
        <figure className="relative hidden w-[400px] h-[400px] md:block">
          <Image
            src={"/reading.png"}
            fill
            className="object-contain"
            alt="reading"
          />
          <Image
            src={"/reading-dark.png"}
            fill
            className="object-contain hidden dark:block"
            alt="reading"
          />
        </figure>
      </div>
    </div>
  );
}
