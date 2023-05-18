import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import CancelIcon from "@mui/icons-material/Cancel";
import AddToCart from "./AddToCArt";
import Image from "next/image";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { ADDTOCART, COUNTER, DELETE } from "@/redux/reducer/addtocart";
import { useDispatch, useSelector } from "react-redux";

export default function Drawers() {
  const dispatch = useDispatch();

  const { cartItem, counter } = useSelector((state) => state.cartitems);
  console.log(counter, "counter");

  const [state, setState] = React.useState({
    right: false,
  });

  const [value, setValue] = useState(1);
  console.log(value, " value ");
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 350 }}
      role="presentation"
      //   onClick={toggleDrawer(anchor, false)}
      //   onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className="text-[#019376] p-4 flex justify-between">
        <p>{cartItem?.length} Items</p>
        <CancelIcon onClick={toggleDrawer(anchor, false)} />
      </List>
      <Divider />
      {cartItem?.map((items, ind) => {
        return (
          <>
            <List className="flex justify-between mt-10">
              <div className="flex flex-col  justify-center ml-2  items-center px-2 border rounded-xl">
                <p className="text-xs  text-[#019376]">
                  <AddIcon
                    onClick={() =>
                      dispatch(
                        COUNTER({ inc: "increment", incData: items?.type })
                      )
                    }
                  />
                </p>
                <div className="flex justify-center">
                  <input
                    type="text"
                    value={items?.qty}
                    name=""
                    id=""
                    // onClick={(e) => setValue(e.target.value)}
                    className="w-4"
                  />
                </div>
                <p className="text-xs text-[#019376]">
                  <RemoveIcon
                    onClick={() =>
                      dispatch(
                        COUNTER({ inc: "decrement", incData: items?.type })
                      )
                    }
                  />
                </p>
              </div>
              <div className="flex justify-center items-center px-4">
                <Image
                  src={items?.img}
                  height={100}
                  width={100}
                  className="object-contain "
                  alt="pics"
                />
              </div>
              <div className="flex flex-col justify-center  items-center px-4 ">
                <p className="text-sm font-bold">{items?.type}</p>
                <p className="text-xs mt-2 text-[#019376]">${items.price} </p>
                <p className="text-xs mt-2 text-[#019376]">
                  ${items.price}*{items?.qty}
                </p>
              </div>
              <div className="flex justify-start font-bold items-center px-4 text-[#019376]">
                ${items?.totalprice}
              </div>
              <div className="flex justify-center items-center p-2">
                <CancelIcon onClick={() => dispatch(DELETE(items?.type))} />
              </div>
            </List>
          </>
        );
      })}
      {/* {cartItem.map((items) => (
        <AddToCart items={items} />
      ))} */}
      <div className="fixed bottom-0 bg-green-400 right-0 w-[367px] text-center p-4">
        Total Amount: $1000
      </div>
    </Box>
  );

  return (
    <div className="fixed  right-0 top-[50%] bg-[#019376] rounded-xl  p-4 z-10">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} className="text-white">
            {cartItem?.length} Cart
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
