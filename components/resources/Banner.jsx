import React from "react";
import Image from "next/image";

export default function Banner({image}) {
  return (
    <div>
      <Image
        src={image}
        className="w-full"
        width={100}
        height={100}
      >
      </Image>
    </div>
  )
}