import React from "react";
import Image from "next/image";

export default function Banner({ image }) {
  return (
    <div className="py-2">
      <Image
        sizes="100vw"
        src={image}
        alt="Image"
        width={1500}
        height={250}
        className="w-full"
      ></Image>
    </div>
  );
}
