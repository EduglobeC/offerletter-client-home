// import styles

// icons and images
import testimonialPic1 from "../../assets/images/testimonial-pic1.png";
import testimonialPic2 from "../../assets/images/testimonial-pic2.png";
import testimonialPic3 from "../../assets/images/testimonial-pic3.png";
import arrow1 from "../../assets/images/arrow1.svg";
import arrow2 from "../../assets/images/arrow2.svg";
import { useRef } from "react";

const Testimonial = () => {
  const testimonialPics = [testimonialPic1, testimonialPic2, testimonialPic3];

  // create dummy testimonies
  const testimonyData = [
    {
      name: "Jerome Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
    {
      name: "Jerome Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
    {
      name: "Jerome Bell",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nisl, vitae mattis turpis justo velit tempor. Id interdum ipsum, vel mi neque, dolor, sed mi morbi. Netus est dolor scelerisque gravida congue pulvinar. Fermentum, nisi neque, at natoque nulla semper massa vestibulum ullamcorper. Aliquam quis sed nulla donec pretium eget ultricies lacus. A mi neque elit maecenas lorem in risus ac commodo. Dui et commodo, egestas consectetur sollicitudin et justo semper.",
    },
  ];

  // get elements
  const dotsEl = useRef(null);
  const testimoniesEl = useRef(null);

  // add bg to dot
  function setDot(index) {
    const dotEls = dotsEl.current.childNodes;
    dotEls.forEach((child) => {
      child.classList.remove("bg-[#0D2C58]");
      child.classList.add("bg-[#C4C4C4]");
    });
    dotEls[index].classList.add("bg-[#0D2C58]");
    dotEls[index].classList.remove("bg-[#C4C4C4]");
  }

  // translate element
  function translateX(index) {
    const testimonyEls = testimoniesEl.current.childNodes;
    testimonyEls.forEach((el) => {
      el.style.transform = `translateX(-${+index * 100}%)`;
    });
  }

  // handleDot when selected
  function handleDot(e) {
    const index = e.currentTarget.dataset.index;
    position = +index;
    setDot(position);
    translateX(position);
  }

  // handleSlide when clicked
  let position = 0;
  function handleSlide(e) {
    const direction = e.currentTarget.dataset.slide;
    const testimonyEls = testimoniesEl.current.childNodes;
    const max = testimonyEls.length - 1;

    if (direction === "right") {
      if (position >= max) return;
      position++;
      setDot(position);
      translateX(position);
    } else if (direction === "left") {
      if (position < 1) return;
      position--;
      setDot(position);
      translateX(position);
    }
  }

  // map through testimony data
  const testimony = testimonyData.map((testimony, i) => {
    const prev = i - 1 < 0 ? testimonyData.length - 1 : i - 1;
    const next = i + 1 > testimonyData.length - 1 ? 0 : i + 1;

    return (
      <div key={i} className="flex min-w-full justify-between">
        <button
          className="control prev w-[178px] relative hidden lg:block"
          onClick={handleSlide}
          data-slide="left"
        >
          <img
            className="h-full"
            src={testimonialPics[prev]}
            alt={`testimony 0${prev}`}
          />
          <div className="overlay flex flex-col items-center justify-center absolute top-0 bottom-0 right-0 left-0 bg-[#00749169]">
            <img src={arrow2} alt="" />
          </div>
        </button>
        <div className="current flex items-center lg:w-[65%] shadow-[0_0_0_rgba(0,0,0,0.25)] border border-gray-100">
          <div className="image ">
            <img
              className="h-full"
              src={testimonialPics[i]}
              alt={`testimony 0${i}`}
            />
          </div>
          <div className="text-name w-3/4 p-8">
            <p className="text-base md:text-xl">{testimony.text}</p>
            <div className="user-name mt-4">
              <p className="text-[#0D2C58] font-semibold text-lg md:text-2xl">
                {testimony.name}
              </p>
            </div>
          </div>
        </div>
        <button
          className="control next w-[178px] relative hidden lg:block"
          onClick={handleSlide}
          data-slide="right"
        >
          <img
            className="h-full"
            src={testimonialPics[next]}
            alt={`testimony 0${next}`}
          />
          <div className="overlay flex flex-col items-center justify-center absolute top-0 bottom-0 right-0 left-0 bg-[#00749169]">
            <img src={arrow1} alt="" />
          </div>
        </button>
      </div>
    );
  });

  const dots = testimonyData.map((dot, i) => (
    <button
      key={i}
      className={`dot w-[20px] h-[20px] rounded-full ${
        i === 0 ? "bg-[#0D2C58]" : "bg-[#C4C4C4]"
      } `}
      onClick={handleDot}
      data-index={i}
    />
  ));

  return (
    <div className="flex flex-col gap-4 py-20 md:py-40 px-4 md:px-8 lg:px-16">
      <h1 className="text-4xl md:text-5xl text-center font-semibold">
        OUR TESTIMONY
      </h1>
      <div className="flex overflow-hidden" ref={testimoniesEl}>
        {testimony}
      </div>
      <div className="flex items-center justify-center gap-4" ref={dotsEl}>
        {dots}
      </div>
    </div>
  );
};

export default Testimonial;
