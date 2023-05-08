import { List } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
// import { useSelector } from "react-redux";
export default function AddToCart() {
  //   const { cartItem } = useSelector((state) => state.cartitems);
  //   console.log(cartItem, "cartItems");
  return (
    <div>
      <List className="flex justify-between mt-10">
        <div className="flex justify-center items-center px-4">
          <Image
            src="/images/bakery/cake.png"
            height={100}
            width={100}
            className="object-contain "
            alt="pics"
          />
        </div>
        <div className="flex flex-col justify-center  items-center px-4 ">
          <p className="text-sm font-bold">Cake</p>
          <p className="text-xs mt-2 text-[#019376]">$3.00 </p>
          <p className="text-xs mt-2 text-[#019376]">$3.00*3</p>
        </div>
        <div className="flex justify-start font-bold items-center px-4 text-[#019376]">
          $100
        </div>
        <div className="flex justify-center items-center p-2">
          <CancelIcon />
        </div>
      </List>
    </div>
  );
}
