// import css
import React, { useState } from "react";

// impport images
import ofLogo from "../../assets/icons/offerl-logo.svg";

import { Link } from "react-router-dom";

import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import OrLine from "./OrLine";
import SocialSignup from "./SocialSignup";

const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [errors, setErrors] = useState(null);

  const handleIsLogin = () => {
    setIsLogin(!isLogin);
    setErrors(null);
  };

  return (
    <section className="flex">
      <div className="lg:w-[50%] xl:w-[60%] hidden lg:block bg-[url(/src/assets/images/side-img.png)] bg-no-repeat bg-cover" />

      {/*  Content form */}
      <div className="w-full lg:w-[50%] xl:w-[40%] px-4 md:px-12 py-20 bg-[#0D2C58] text-white">
        <div className="">
          <Link className="logo flex items-center gap-4" to="/">
            <div className="w-[32px] h-[32px] md:w-[70px] md:h-[70px] ">
              <img src={ofLogo} alt="logo" />
            </div>
            <span className="text-4xl font-bold">OFFER LETTER</span>
          </Link>

          <div className="flex items-center gap-4 my-8">
            <button
              onClick={handleIsLogin}
              className={`${
                isLogin ? "text-white" : "text-[#8696AC]"
              } font-bold`}
            >
              Log In
            </button>
            <button
              onClick={handleIsLogin}
              className={`${
                !isLogin ? "text-white" : "text-[#8696AC]"
              } font-bold`}
            >
              Signup
            </button>
          </div>

          <div className="px-4 py-8 md:px-10 md:py-10 bg-white rounded-[30px] relative text-black">
            <div
              className={`angle__pointer w-0 h-0 absolute -top-[15px] ${
                isLogin ? "left-2" : "left-14"
              }`}
            />
            <div className="errors">
              {errors && <p className="text-red-500">{errors}</p>}
            </div>

            {isLogin && <LoginForm setErrors={setErrors} />}
            {!isLogin && <SignupForm setErrors={setErrors} />}
            {/* Horizontal line for Or */}
            <OrLine />

            {/* Sign In with */}
            <SocialSignup />

            {isLogin ? (
              <div className="flex items-center gap-2 justify-center mt-6">
                <p>Don't have an account? </p>
                <button
                  onClick={() => handleIsLogin()}
                  type="button"
                  className="text-base font-bold text-[#0D2C58]"
                >
                  Signup
                </button>
              </div>
            ) : (
              <div className="flex gap-2 items-center justify-center mt-6">
                <p>Already have an account? </p>
                <button
                  onClick={() => handleIsLogin()}
                  type="button"
                  className="text-base font-bold text-[#0D2C58]"
                >
                  Login
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
