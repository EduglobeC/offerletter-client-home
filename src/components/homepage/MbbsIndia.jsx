import image5 from '../../assets/images/image5.png';
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
          Did you know that India is home to some of the most prestigious
          medical colleges in the world? By studying MBBS in India, you can gain
          a competitive edge in your career while experiencing a rich and
          diverse culture. With a vast range of specializations to choose from
          and endless opportunities for hands-on experience, the sky's the limit
          for your future in medicine. With hard work and dedication, you can
          make your dreams of studying MBBS in India a reality and make a
          difference in the world of medicine. Get ready for an unforgettable
          adventure of learning and growth!.
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
