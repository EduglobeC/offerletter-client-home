import React from "react";

function WhyStudy({ country, reason }) {
  return (
    <section className="px-4 md:px-8 lg:px-14">
      <h3 className="text-4xl md:text-6xl font-medium text-center">
        Why study in <span className="capitalize">{country}</span>
      </h3>
      <div className="flex flex-col gap-4 mt-10 justify-center items-center ">
        {reason.split("\n").map((line, i) => (
          <p key={i} className="lg:max-w-[80%]">
            {line}
          </p>
        ))}
      </div>
    </section>
  );
}

export default WhyStudy;
