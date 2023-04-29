import React from "react";
import TestimonialCard from "./TestimonialCard";

function SchoolTestimonials() {
  return (
    <section className="px-4 md:px-8 lg:px-14  flex flex-col items-center justify-center">
      <h3 className="text-4xl md:text-6xl font-medium text-center">
        Testimonials
      </h3>
      <div className="max-w-7xl grid-cols-1 grid lg:grid-cols-2 gap-20 gap-y-40 mt-12 lg:mt-40 mb-40">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}

export default SchoolTestimonials;
