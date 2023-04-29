// images and icons
import image1 from "../../assets/images/blue-cardImage1.png";
import image2 from "../../assets/images/blue-cardImage2.png";
import image3 from "../../assets/images/blue-cardImage3.png";
import dashedLine from "../../assets/images/dashed-line.png";
import TextCard from "./TextCard";

const StudyAbroad = () => {
  return (
    <article className="min-h-[1300px] md:min-h-[1100px] lg:min-h-[700px] flex flex-col gap-y-10 lg:flex-row lg:justify-between text-white bg-[url(/src/assets/images/blue-card.png)] bg-cover bg-no-repeat relative top-[-8rem] lg:top-[-4.5rem] py-48 md:py-40 px-4 md:px-8 lg:px-16">
      <div className="lg:w-[45%] flex flex-col items-center lg:items-start">
        <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
          Study Abroad
        </h2>
        <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
          Can we take this offline we need to think big start small and scale
          fast to energize our clients or the last person we talked to said this
          would be ready nor get buy-in. Wiggle room ensure to follow
          requirements when developing solutions or high touch client so
          individual get six alpha pups in here for a focus group.
        </p>
        <a
          href="#learn-more"
          className="bg-white text-black text-lg md:text-2xl block px-16 py-4 rounded-lg"
        >
          Learn More
        </a>
      </div>
      <div className="lg:w-[50%] h-[300px] relative">
        <div className="absolute top-0 left-[10%] z-50">
          <img src={dashedLine} alt="" />
        </div>
        <div className="absolute top-[10%] left-[5%]  z-50">
          <TextCard />
        </div>
        <img
          src={image2}
          alt=""
          className="absolute right-0 md:right-[10%] bottom-[10%] z-50"
        />
        <img
          src={image1}
          alt=""
          className="w-full md:w-auto absolute right-[0%] md:right-[27%]"
        />
        <img
          src={image3}
          alt=""
          className="absolute top-[70%] left-0 md:left-[5%]"
        />
        <div className="absolute bottom-[-20%] right-[10%]  z-50">
          <TextCard />
        </div>
      </div>
    </article>
  );
};

export default StudyAbroad;
