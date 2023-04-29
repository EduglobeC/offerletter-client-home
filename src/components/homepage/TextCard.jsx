import React from "react";
import image4 from "../../assets/images/circle-image.png";

function TextCard() {
  return (
    <div className="bg-white text-black flex items-center round__bl__tr">
      <div>
        <img src={image4} alt="" />
      </div>
      <div style={{ margin: "10px 10px 20px 10px" }}>
        <h4 className="text-sm font-semibold">James Sam</h4>
        <p className="text-xs">studying at the university of London</p>
      </div>
    </div>
  );
}

export default TextCard;
