import React from "react";

function StatsAndScholarship({ country }) {
  return (
    <section className="bg-[#F6F8F9] px-4 md:px-8 lg:px-14 py-40">
      <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row lg:justify-around">
        <div className="lg:w-[40%]">
          <h3 className="text-[#0D2C58] text-2xl md:text-4xl font-semibold ">
            Top Universities in <span className="capitalize">{country}</span>
          </h3>
          <p className="mt-6">
            Can we take this offline we need to think big start small and scale
            fast to energize our clients or the last person we talked to said
            this would be ready nor get buy-in. Wiggle room ensure to follow
            requirements when developing solutions or high touch client so
            individual get six alpha pups in here for a focus group. Get buy-in
            currying favour, streamline, yet not enough bandwidth. If you're not
            hurting you're not winning locked and loaded we need to follow
            protocol nor if you could do that, that would be great we should
            leverage existing.
          </p>
        </div>
        <div className="lg:w-[40%]">
          <h3 className="text-[#0D2C58] text-2xl md:text-4xl font-semibold ">
            Scholarships in <span className="capitalize">{country}</span>
          </h3>
          <p className="mt-6">
            Can we take this offline we need to think big start small and scale
            fast to energize our clients or the last person we talked to said
            this would be ready nor get buy-in. Wiggle room ensure to follow
            requirements when developing solutions or high touch client so
            individual get six alpha pups in here for a focus group. Get buy-in
            currying favour, streamline, yet not enough bandwidth. If you're not
            hurting you're not winning locked and loaded we need to follow
            protocol nor if you could do that, that would be great we should
            leverage existing.
          </p>
        </div>
      </div>
    </section>
  );
}

export default StatsAndScholarship;
