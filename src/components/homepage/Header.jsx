import { Link } from "react-router-dom";

const Header = () => {
  const domain = import.meta.env.VITE_HOME_DOMAIN;
  return (
    <div className="flex flex-col justify-center text-white h-[500px] md:h-[600px] bg-[url(/src/assets/images/home-background.png)]">
      <div className="lg:w-[54%] ml-4 md:ml-16">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          We create a brighter future to educate by bring great scholars
        </h1>
        <Link
          to={`http://student${domain}/universities`}
          className="inline-block px-8 py-4 mt-6 text-xl font-semibold rounded-lg button bg__gradient md:text-2xl"
        >
          Profile Evaluation
        </Link>
      </div>
    </div>
  );
};

export default Header;
