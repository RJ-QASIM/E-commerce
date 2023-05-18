import React from "react";
import Menu from "../uiElements/Menu";
import { GET_URL } from "@/redux/reducer/geturl";
import { useDispatch, useSelector } from "react-redux";
export default function Nav() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.geturl);

  React.useEffect(() => {
    var pagePath = window?.location?.href;
    dispatch(GET_URL(pagePath));
  }, []);

  return (
    <div className="border flex justify-between items-center h-20 px-12 ">
      <div className="flex justify-between  w-96   ">
        <div>
          <h1 className="text-[#171F6A]  text-3xl font-bold ">
            Pick <span className="text-[#00C58C]">Bazar</span>
          </h1>
        </div>
        <div>
          <Menu />
        </div>
      </div>
      <div className="flex  justify-around font-normal   w-96">
        <p>Shops</p>
        <p>Offers</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
    </div>
  );
}
