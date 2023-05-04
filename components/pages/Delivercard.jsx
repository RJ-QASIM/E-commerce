import React from "react";
import Images from "../uiElements/Images";
export default function Delivercard() {
  return (
    <div>
      <div className="grid grid-cols-3 mb-5">
        <div className="flex justify-center items-center">
          <Images src="/images/card/d2.webp" width="500" height="500" />
        </div>
        <div className="flex justify-center items-center">
          <Images src="/images/card/d3.webp" width="500" height="500" />
        </div>
        <div className="flex justify-center items-center">
          <Images src="/images/card/d4.webp" width="500" height="500" />
        </div>
      </div>
    </div>
  );
}
