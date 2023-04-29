import React from "react";

function WorkAndStudy({ country, img, workText }) {
  return (
    <section className="px-4 md:px-8 lg:px-14">
      <h3 className="text-4xl md:text-6xl font-medium text-center">
        Work and study in <span className="capitalize">{country}</span>
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-between mt-10">
        <div className="lg:w-[48%]">
          <img src={img} alt="" />
        </div>
        <div className="lg:w-[45%] flex flex-col gap-4">
          {workText.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkAndStudy;
