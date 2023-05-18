import { useEffect, useState } from "react";
import Nav from "../components/pages/Nav";
import Button from "@mui/material/Button";
import { Inter } from "next/font/google";
import Inputs from "@/components/uiElements/Inputs";
import Delivercard from "@/components/pages/Delivercard";
import Accordion from "@/components/uiElements/Accordion";
import Product from "@/components/pages/Products";
import { useSelector } from "react-redux";
import Image from "next/image";
import { bgImg } from "@/data/Navdata";
import Modal from "@/components/uiElements/Modal";
import Drawer from "@/components/uiElements/Drawer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [getData, setGetData] = useState({ img: "/images/bg/grocery.png" });

  const { products, maintype } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);

  // console.log(maintype, "maintype");
  // console.log(getData, "getdata");

  useEffect(() => {
    setGetData(bgImg.filter((elm) => elm.type === maintype));
  }, [maintype]);

  // console.log(getdata.img, "getdata");

  // const items = products
  //   ?.map((value) => ({ value, sort: Math.random() }))
  //   ?.sort((a, b) => a.sort - b.sort)
  //   ?.map((value) => value);

  // console.log(items, "items");

  return (
    <>
      <Drawer />
      {/* <Nav /> */}
      <div className="min-h-[calc(100vh-80px)] w-full relative ">
        <div className="absolute top-40 z-50 w-full flex flex-col items-center">
          <p className="font-bold text-4xl text-[#1F2937] ">
            Groceries Delivered in 90 Minute
          </p>
          <p className="mt-[40px]">
            Easiest and cheapest way to get your branded & imported makeups
          </p>
          <div className="mt-5">
            <Inputs />
          </div>
        </div>
        <div>
          <Image
            src={maintype ? getData[0]?.img : getData?.img}
            alt="pics"
            fill
          />
        </div>
      </div>
      <div className="mt-[100px]">
        <Delivercard />
      </div>

      <div className="grid grid-cols-12 mt-[160px] mb-5 gap-8  bg-[#F3F4F6]">
        <div className="col-span-2 mt-5 ml-4">
          {category?.map((elm, ind) => (
            <Accordion elm={elm} key={ind} />
          ))}
        </div>
        <div className="col-span-10  shadow-xl">
          <div className="grid grid-cols-5 gap-8 p-4  ">
            {products
              // ?.map((value) => ({ value, sort: Math.random() }))
              // ?.sort((a, b) => a.sort - b.sort)
              ?.map((value, ind) => {
                return <Product elm={value} key={ind} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
}
