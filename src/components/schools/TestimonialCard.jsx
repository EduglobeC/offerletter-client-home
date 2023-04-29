import React from "react";
import avatar from "../../assets/images/blue-cardImage3.png";
import QuotesOpenIcon from "./QuotesOpenIcon";
import QuotesCloseIcon from "./QuotesCloseIcon";
function TestimonialCard() {
  return (
    <div className="bg-[#D5EBFF] px-20 py-24 rounded-3xl shadow-[inset_0_0_8px_rgba(0,0,0,0.25)] relative">
      <div className="flex flex-col items-center justify-center gap-16">
        <div>
          <div className="avatar w-[150px] h-[150px]">
            <img src={avatar} alt="" className="w-full h-full rounded-full" />
          </div>
          <p className="text-2xl">Adams John</p>
        </div>
        <div>
          <p>
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
      <span className=" absolute top-0 left-0 lg:top-[-60px] lg:left-[-40px]">
        <QuotesOpenIcon />
      </span>
      <span className=" absolute bottom-0 right-0 lg:bottom-[-60px] lg:right-[-40px]">
        <QuotesCloseIcon />
      </span>
    </div>
  );
}

export default TestimonialCard;
