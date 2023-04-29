import image5 from "../../assets/images/image5.png";
const MbbsIndia = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-20 lg:justify-between px-4 md:px-8 lg:px-16 py-20 md:py-40">
      <div className="lg:w-[50%]">
        <div className="imageFive">
          <img src={image5} alt="" />
        </div>
      </div>
      <div className="lg:w-[46%] flex flex-col items-center lg:items-start">
        <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
          Study MBBS in India
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
          className="bg__gradient text-white text-lg md:text-2xl block px-16 py-4 rounded-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default MbbsIndia;
