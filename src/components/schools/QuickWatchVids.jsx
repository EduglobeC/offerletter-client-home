import React from "react";

function QuickWatchVids({ img }) {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-between">
      <div className="lg:w-[55%]">
        <img src={img} alt="" />
      </div>
      <div className="lg:w-[40%] flex flex-col gap-6">
        <h3 className="text-3xl font-medium">Work and study in Australia</h3>
        <p className="text-base md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl faucibus
          neque, eu pulvinar amet enim sit ut. Risus gravida integer viverra in.
          Arcu odio auctor id proin nunc amet. Massa aenean tortor turpis ec.
        </p>
      </div>
    </div>
  );
}

export default QuickWatchVids;
