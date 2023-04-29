// import images
import university from "../../assets/images/university.png";
import computerRoom from "../../assets/images/computer-room.png";

const Facilities = () => {
  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10 gap-y-20 flex-col lg:flex-row lg:justify-around px-4 md:px-8 lg:px-16 pb-20">
      <div className="bg-[#0D2C58] rounded-[30px] text-white">
        <div>
          <img src={university} alt="" className="w-full rounded-[30px]" />
        </div>
        <div className="px-4 pb-12 flex flex-col gap-4 py-6">
          <h3 className="text-xl md:text-2xl font-bold">
            Study In top universities around the world
          </h3>
          <p className="text-base md:text-xl">
            We believe in your dreams and we strive hard to make your dreams
            come true.
          </p>
        </div>
      </div>
      <div className="bg-[#0D2C58] text-white rounded-[30px]">
        <div>
          <img src={computerRoom} alt="" className="w-full rounded-[30px]" />
        </div>
        <div className="px-4 pb-12 flex flex-col gap-4 py-6">
          <h3 className="text-xl md:text-2xl font-bold">
            Meet Expert around the world
          </h3>
          <p className="text-base md:text-xl">
            great webinar with top expert to set and guide you on your career
            path.
            <span className="block mt-4">JOIN US NOW</span>
          </p>
        </div>
      </div>
      <div className="bg-[#0D2C58] text-white rounded-[30px]">
        <div>
          <img src={university} alt="" className="w-full rounded-[30px]" />
        </div>
        <div className="px-4 pb-12 flex flex-col gap-4 py-6">
          <h3 className="text-xl md:text-2xl font-bold">
            Study In top universities around the world
          </h3>
          <p className="text-base md:text-xl">
            We believe in your dreams and we strive hard to make your dreams
            come true.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
