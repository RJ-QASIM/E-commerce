import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Inputs() {
  return (
    <>
      <div className=" mt-[30px] w-[600px]  flex">
        <input
          type="text"
          placeholder="Search your products from here"
          className="p-3 w-full rounded-l-lg  border focus:outline-none focus:border-[#019376] "
        />
        <button
          className="border bg-[#019376] text-white p-4 px-8 rounded-r-lg
        "
        >
          Search
        </button>
      </div>
    </>
  );
}
