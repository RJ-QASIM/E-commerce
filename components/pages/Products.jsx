import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { GET_DETAIL_ITEM } from "@/redux/reducer/products";
import { useDispatch } from "react-redux";
export default function Products({ elm }) {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <>
      <div className=" bg-[#FFFFFF] rounded-3xl">
        <div
          className={`h-8 w-12  rounded-lg cursor-pointer bg-[${
            elm?.diccount ? "#019376" : "white"
          }] text-white flex justify-center items-center m-5`}
        >
          <h1>{elm?.diccount}%</h1>
        </div>

        <div className="  flex justify-center h-48 items-center  m-5 cursor-pointer ">
          <Image
            src={elm?.img}
            height={200}
            width={200}
            className="object-contain"
            alt="pics"
          />
        </div>
        <div className=" p-4 ">
          <div className="font-semibold text-black">
            {elm?.price}$<del className="text-gray-500 ml-3 ">150$</del>
          </div>
          <div className="text-gray-700 text-xs">{elm?.type}</div>
        </div>
        <h1
          className="bg-[#019376] text-center cursor-pointer rounded-b-3xl text-white"
          onClick={() => {
            dispatch(GET_DETAIL_ITEM(elm));
            router.push(`/products/${elm?.type}`);
          }}
        >
          Detail view
        </h1>
      </div>
    </>
  );
}
