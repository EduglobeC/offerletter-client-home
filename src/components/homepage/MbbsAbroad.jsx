//images and icon
import slider1 from '../../assets/images/slider-image1.png';
import slider2 from '../../assets/images/slider-image2.png';
import slider3 from '../../assets/images/slider-image3.png';

// from react
import { useEffect, useState } from 'react';

const MbbsAbroad = () => {
  const [images, setImages] = useState([slider1, slider2, slider3]);
  const [slideImage, setSlideImage] = useState(1);

  function handleSwap(d) {
    if (d === 1) {
      const newImages = [...images];
      [newImages[0], newImages[1]] = [newImages[1], newImages[0]];
      setImages(newImages);
    } else {
      const newImages = [...images];
      [newImages[1], newImages[2]] = [newImages[2], newImages[1]];
      setImages(newImages);
    }
  }

  return (
    <section className="flex flex-col gap-20 lg:flex-row items-center lg:justify-between px-4 md:px-8 lg:px-16 pb-20">
      <div className="w-[95%] md:w-[80%] lg:w-[50%] bg__gradient shadow-[0_0_5px_rgba(0,0,0,0.36)] rounded-[32px] pt-16 pb-8 md:pt-24 lg:pt-20">
        <div className="flex items-center justify-center">
          <div className="w-[120px] h-[130px] md:w-[165px] md:h-[175px]">
            <img
              src={images[0]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[120px] h-[130px] md:w-[165px] md:h-[175px] scale-125">
            <img
              src={images[1]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-[120px] h-[130px] md:w-[165px] md:h-[175px]">
            <img
              src={images[2]}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="dots flex items-center justify-center pt-10">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSwap(1)}
              className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full bg-[#858484]"
            />
            <button
              type="button"
              className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full bg-[#fff]"
            />
            <button
              onClick={() => handleSwap(-1)}
              type="button"
              className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full bg-[#858484]"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-[45%] flex flex-col items-center lg:items-start">
        <h2 className="mb-4 text-center lg:text-left font-semibold text-4xl lg:text-5xl">
          Study MBBS Abroad
        </h2>
        <p className="my-8 leading-7 text-center lg:text-left lg:text-xl">
          Looking for a thrilling and rewarding career in the field of medicine?
          Studying MBBS abroad in countries like Russia, Kyrgyzstan, Kazakhstan,
          Philippines, or Bangladesh is a great opportunity to gain a
          world-class education in medicine and surgery. In Russia, you'll get
          to study in state-of-the-art facilities while immersing yourself in
          the country's rich culture. Kyrgyzstan, Kazakhstan, and Philippines
          offer affordable tuition fees and a chance to experience diverse and
          friendly communities. Bangladesh has top-ranked medical universities
          and a strong emphasis on research and innovation. With Offer Letter's
          guidance and support, you can make your dream of becoming a doctor a
          reality and make a significant impact on people's lives.
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

export default MbbsAbroad;
