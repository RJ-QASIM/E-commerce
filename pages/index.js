import Nav from "../components/pages/Nav";
import Button from "@mui/material/Button";
import { Inter } from "next/font/google";
import Inputs from "@/components/uiElements/Inputs";
import Delivercard from "@/components/pages/Delivercard";
import Accordion from "@/components/uiElements/Accordion";
import Products from "@/components/pages/Products";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { products } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.category);

  return (
    <>
      <div>
        <Nav />

        <div className="flex justify-center flex-col items-center h-[890px]">
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
      </div>
      <Delivercard />

      <div className="grid grid-cols-12 mt-[160px] mb-5 gap-8  bg-[#F3F4F6]">
        <div className="col-span-2 mt-5 ml-4">
          {category?.map((elm, ind) => (
            <Accordion elm={elm} key={ind} />
          ))}
        </div>

        <div className="col-span-10  shadow-xl">
          <div className="grid grid-cols-5 gap-8 p-4  ">
            {products?.map((elm, ind) => (
              <div className=" bg-[#FFFFFF] rounded-3xl">
                <Products elm={elm} key={ind} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
