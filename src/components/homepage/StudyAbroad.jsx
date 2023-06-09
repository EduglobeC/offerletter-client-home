// images and icons
import image1 from "../../assets/images/blue-cardImage1.png";
import image2 from "../../assets/images/blue-cardImage2.png";
import image3 from "../../assets/images/blue-cardImage3.png";
import dashedLine from "../../assets/images/dashed-line.png";
import TextCard from "./TextCard";

const StudyAbroad = () => {
  return (
    <article className="min-h-[1300px] md:min-h-[1100px] lg:min-h-[700px] flex flex-col gap-y-10 lg:flex-row lg:justify-between text-white bg-[url(/src/assets/images/blue-card.png)] bg-cover bg-no-repeat relative top-[-8rem] lg:top-[-5rem] py-48 md:py-40 px-4 md:px-8 lg:px-16">
      <div className="lg:w-[45%] flex flex-col items-center lg:items-start">
        <h2 className="mb-4 text-4xl font-semibold text-center lg:text-left lg:text-5xl">
          Study Abroad
        </h2>
        <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
          Are you ready for an incredible adventure? Imagine studying in a
          different country, making new friends, and experiencing new cultures
          firsthand! Studying abroad is an amazing opportunity to learn about
          new cultures, meet new friends, and improve your language skills.
          Canada, Australia, USA, and UK are all excellent destinations for
          students looking to excel in their studies and embark on an adventure
          of a lifetime. With Offer Letter by your side, you'll have access to a
          wide range of educational opportunities and resources to help you
          achieve your goals. Get ready to discover new passions, make lifelong
          connections, and take your first step towards a bright future!
        </p>
        <a
          href="#learn-more"
          className="block px-16 py-4 text-lg text-black bg-white rounded-lg md:text-2xl"
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
