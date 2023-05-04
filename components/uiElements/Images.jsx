import React from "react";
import Image from "next/image";
export default function Images({ src, width, height }) {
  return (
    <div>
      <Image
        //   loader={myLoader}
        src={src}
        alt="Picture of the author"
        width={width}
        height={height}
        className="mr-2 text-red-400 "
      />
    </div>
  );
}
