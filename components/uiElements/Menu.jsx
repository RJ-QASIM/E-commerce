import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import { category } from "@/data/Navdata";
import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useDispatch, useSelector } from "react-redux";
import { GET_CATOGERY } from "@/redux/reducer/catogry";
export default function FadeMenu() {
  const dispatch = useDispatch();

  const { getcategory } = useSelector((state) => state.category);
  // console.log(getcategory, "getcategory");

  const [anchorEl, setAnchorEl] = useState(null);

  const [getword, setgetWord] = useState({
    cate: "Grocery",
    icon: "/images/navimages/g.png",
  });

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (data) => {
    const category = data.cate;
    dispatch(GET_CATOGERY(category));

    setgetWord(
      data
        ? data
        : {
            cate: "Grocery",
            icon: "/images/navimages/g.png",
          }
    );
    setAnchorEl(null);
  };
  return (
    <div>
      <Button
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="outlined"
        onClick={handleClick}
      >
        <Image
          src={getword?.icon}
          alt="Picture"
          width={20}
          height={20}
          className="mr-2"
        />
        <p>{getword?.cate}</p>
        {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
      </Button>

      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {category.map((elm, index) => {
          return (
            <MenuItem onClick={() => handleClose(elm)} key={index}>
              <Image
                //   loader={myLoader}
                src={elm?.icon}
                alt="Picture "
                width={20}
                height={20}
                className="mr-2"
              />
              {elm.cate}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
}
