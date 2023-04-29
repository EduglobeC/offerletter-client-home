import React from "react";

import googleIcon from "../../assets/icons/google-icon.svg";
import facebookIcon from "../../assets/icons/facebook-icon.svg";
import appleIcon from "../../assets/icons/apple-icon.svg";

function SocialSignup() {
  return (
    <div className="flex flex-col gap-6">
      <button className="flex items-center justify-between bg-[#8696AC] rounded-lg text-base font-semibold text-white md:text-xl py-1 pl-8 pr-1">
        <span>Sign up with Google</span>
        <span className="bg-[#fff] w-[65px] h-[60px] rounded-lg flex flex-col items-center justify-center">
          <img src={googleIcon} alt="google-icon" />
        </span>
      </button>

      <button className="flex items-center justify-between bg-[#8696AC] rounded-lg text-base font-semibold text-white md:text-xl py-1 pl-8 pr-1">
        <span>Sign up with Facebook</span>
        <span className="bg-[#fff] w-[65px] h-[60px] rounded-lg flex flex-col items-center justify-center">
          <img src={facebookIcon} alt="facebook-icon" />
        </span>
      </button>

      <button className="flex items-center justify-between bg-[#8696AC] rounded-lg text-base font-semibold text-white md:text-xl py-1 pl-8 pr-1">
        <span>Sign up with Apple</span>
        <span className="bg-[#fff] w-[65px] h-[60px] rounded-lg flex flex-col items-center justify-center">
          <img src={appleIcon} alt="apple-icon" />
        </span>
      </button>
    </div>
  );
}

export default SocialSignup;
