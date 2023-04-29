import React from "react";
import hrLine from "../../assets/images/hr-line.png";

function OrLine() {
  return (
    <div className="flex items-center justify-center gap-4 my-6">
      <div className="h-line">
        <img src={hrLine} alt="hr-line" />
      </div>
      <span>Or</span>
      <div className="h-line">
        <img src={hrLine} alt="hr-line" />
      </div>
    </div>
  );
}

export default OrLine;
