// import images
import boy from "../../assets/images/boy.png";
import plane from "../../assets/images/plane.png";
import sphere from "../../assets/images/sphere.png";

const Stats = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-20 lg:gap-0  items-center lg:justify-evenly px-4 md:px-8 lg:px-16 pb-20 lg:pb-40 text-[#0D2C58] font-bold">
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={boy} alt="" />
        <div>
          <h3 className="text-3xl  text-center">7000+</h3>
          <p className="text-2xl  text-center ">Students Trained</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={plane} alt="" />
        <div>
          <h3 className="text-3xl  text-center">1000+</h3>
          <p className="text-2xl  text-center "> Students Sent Abroad</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-6">
        <img src={sphere} alt="" style={{ transform: "translateY(20px)" }} />
        <div>
          <h3 className="text-3xl  text-center">12</h3>
          <p className="text-2xl  text-center">
            Countries Around the <br /> world
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
