// images and icons
import image1 from '../../assets/images/blue-cardImage1.png';
import image2 from '../../assets/images/blue-cardImage2.png';
import image3 from '../../assets/images/blue-cardImage3.png';
import image4 from '../../assets/images/circle-image.png';
import dashedLine from '../../assets/images/dashed-line.png';
import TextCard from './TextCard';

const StudyIndia = () => {
  return (
    <article className="min-h-[1200px] md:min-h-[1000px] lg:min-h-[700px] flex flex-col gap-y-10 lg:flex-row lg:justify-between text-white bg__gradient py-48 md:py-40 px-4 md:px-8 lg:px-16">
      <div className="lg:w-[45%] flex flex-col items-center lg:items-start">
        <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
          Study in India
        </h2>
        <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
          Studying in India is an incredible opportunity to experience a diverse
          and fascinating culture, gain valuable skills, and pursue your
          academic goals.With over 35 million students enrolled in higher
          education institutions, India is home to one of the largest education
          systems in the world. Did you know that India is also the birthplace
          of the number system and the decimal point? India offers students the
          chance to study with outstanding academics, explore stunning
          landscapes, and experience a unique way of life. With hard work and
          determination, you can make your dreams of studying in India a reality
          and unlock a world of possibilities!
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
          className="absolute right-[10%] md:right-[27%]"
        />
        <img src={image3} alt="" className="absolute top-[70%] left-[5%]" />
        <div className="absolute bottom-[-20%] right-[10%]  z-50">
          <TextCard />
        </div>
      </div>
    </article>
  );
};

export default StudyIndia;
