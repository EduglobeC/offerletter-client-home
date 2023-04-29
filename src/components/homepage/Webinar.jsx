import { useState } from "react";
import webinarPic from "../../assets/images/webinar-pic.png";
import webinarPic2 from "../../assets/images/services-mbbs-india.png";
import webinarPic3 from "../../assets/images/services-mbbs.png";

const Webinar = () => {
  const webinarPics = [webinarPic, webinarPic2, webinarPic3];
  const [webinarSlider, setWebinarSlider] = useState(0);

  function handleSlide(n) {
    setWebinarSlider(n);
  }

  return (
    <div className="min-h-[900px] flex flex-col items-center gap-16 py-20 md:py-40 px-4 md:px-8 lg:px-16 bg-[url(/src/assets/images/webinar-card.png)]  bg-cover bg-no-repeat text-white">
      <h1 className="text-4xl md:text-5xl text-center font-semibold">
        Webinar Session
      </h1>
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[50%]">
          <img src={webinarPics[webinarSlider]} alt="" />
          <div className="flex items-center justify-center py-6">
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleSlide(0)}
                type="button"
                className={`w-[24px] h-[24px] rounded-full ${
                  webinarSlider === 0 ? "bg-white" : "bg-[#858484]"
                }`}
              />
              <button
                onClick={() => handleSlide(1)}
                type="button"
                className={`w-[24px] h-[24px] rounded-full ${
                  webinarSlider === 1 ? "bg-white" : "bg-[#858484]"
                }`}
              />
              <button
                onClick={() => handleSlide(2)}
                type="button"
                className={`w-[24px] h-[24px] rounded-full ${
                  webinarSlider === 2 ? "bg-white" : "bg-[#858484]"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="lg:w-[35%] flex flex-col items-center lg:items-start">
          <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
            How to submit a CV
          </h2>
          <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
            Having a good CV goes a long way in boosting your application, in
            this video you will learn certain criterias required to create and
            submit your the right way.
          </p>
          <a
            href="#"
            className="bg-white text-black text-lg md:text-2xl block px-16 py-4 rounded-lg"
          >
            Join Webinar
          </a>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
