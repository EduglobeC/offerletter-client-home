const Header = () => {
  return (
    <div className="flex flex-col justify-center text-white h-[500px] md:h-[600px] bg-[url(/src/assets/images/home-background.png)]">
      <div className="lg:w-[54%] ml-4 md:ml-16">
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          We create a brighter future to educate by bring great scholars
        </h1>
        <button className="button mt-6 bg__gradient px-8 py-4 text-xl md:text-2xl rounded-lg font-semibold">
          Profile Evaluation
        </button>
      </div>
    </div>
  );
};

export default Header;
