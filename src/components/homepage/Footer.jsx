import facebook from "../../assets/icons/facebook.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import behance from "../../assets/icons/behance.svg";
import vimeo from "../../assets/icons/vimeo.svg";

import message from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0D2C58] text-white flex flex-col gap-10 py-20 px-4 md:px-8 lg:px-16">
      <Link to="/" className="logo flex items-center gap-4">
        <div className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]">
          <img
            src={message}
            alt={message}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="font-bold">OFFER LETTER</span>
      </Link>

      <div className="flex flex-col xl:flex-row justify-between gap-10 xl:gap-0">
        <div className="flex flex-col gap-10 text-[#bdbdbd99] text-lg md:text-2xl">
          <div className="address">
            <p>
              Office no. G-02. <br />
              Building 1, Ground Floor. <br />
              Dubai Media City - Dubai
            </p>
          </div>

          <div className="time">
            <p>Available Everyday</p>
            <p className="gold text-[#FECF08]">From 9:00 AM to 6:00 PM</p>
          </div>

          <div className="copyright text-white">
            <p> Copyright © 2022 EduGlobe. All Rights Reserved</p>
          </div>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-6">
            <p className="about text-2xl md:text-4xl font-bold">About</p>
            <ul className="flex flex-col gap-6 text-lg md:text-2xl">
              <li>Our Story</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="about text-2xl md:text-4xl font-bold">About</p>
            <ul className="flex flex-col gap-6 text-lg md:text-2xl">
              <li>Our Story</li>
              <li>Our Services</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end">
          <div className="flex items-center gap-6">
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={linkedin} alt="" />
            <img src={youtube} alt="" />
            <img src={behance} alt="" />
            <img src={instagram} alt="" />
            <img src={vimeo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
