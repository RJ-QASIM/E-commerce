import React from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { ADDTOCART } from "@/redux/reducer/addtocart";
import { useRouter } from "next/router";
export default function FilterData() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { filterProduct } = useSelector((state) => state.products);
  console.log(filterProduct, "filterProduct");
  return (
    <div>
      {filterProduct.map((elm) => {
        return (
          <>
            <div className="grid grid-cols-2">
              <div>
                <div className="flex justify-center items-center">
                  <Image
                    src={elm?.img}
                    height={600}
                    width={600}
                    className="object-contain"
                    alt="pics"
                  />
                </div>
              </div>
              <div className="flex justify-center items-start flex-col gap-4">
                <div className="font-bold text-2xl text-black">{elm?.type}</div>
                <div className="font-bold text-lg text-gray-600">
                  ${elm?.price}
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                  doloremque iusto ad consequatur cumque mollitia quasi non
                  labore et quis facilis nemo incidunt vero placeat accusantium,
                  ipsa numquam tempore quia.
                </p>
                <div
                  className="font-bold text-lg cursor-pointer border p-4 bg-slate-200 rounded-lg"
                  onClick={() => {
                    dispatch(ADDTOCART(elm));
                    router.push(`/`);
                  }}
                >
                  Add To Cart
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
