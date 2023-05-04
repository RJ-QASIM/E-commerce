import Image from "next/image";
import React from "react";

export default function Products({ elm }) {
  return (
    <div className="  ">
      <div
        className={`h-8 w-12  rounded-lg cursor-pointer bg-[${
          elm.off ? "#019376" : "white"
        }] text-white flex justify-center items-center m-5`}
      >
        {elm.off}
      </div>

      <div className="  flex justify-center h-48 items-center  m-5 cursor-pointer ">
        <Image
          src={elm.img}
          height={200}
          width={200}
          className="object-contain"
        />
      </div>
      <div className=" p-4 ">
        <p className="font-semibold text-black">
          {elm.price} <del className="text-gray-500 ml-3 ">150%</del>
        </p>
        <p className="text-gray-700 text-xs   ">{elm.type}</p>
      </div>
      <h1 className="bg-[#019376] text-center rounded-b-3xl text-white">
        Add to cart
      </h1>
    </div>
  );
}
