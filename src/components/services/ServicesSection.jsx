/**
 * Render a section for displaying services.
 * @param {Object} {title, img, des, btnText}
 * @returns {JSX.Element} The rendered section.
 */
function ServicesSection({ title, img, desc, btnText }) {
  return (
    <section className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0 justify-between lg:even:flex-row-reverse">
      <div className="lg:w-[45%]">
        <h3 className="text-2xl font-medium text-center">{title}</h3>
        <div className="mt-5">
          <img src={img} alt="side-desc" className="" />
        </div>
      </div>
      <div className="lg:w-[45%] ">
        <div className="flex flex-col gap-4">
          {desc.split("\n").map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
        <button className="bg-[#0D2C58] text-white text-lg font-medium py-2 px-6 mt-5">
          {btnText}
        </button>
      </div>
    </section>
  );
}

export default ServicesSection;
