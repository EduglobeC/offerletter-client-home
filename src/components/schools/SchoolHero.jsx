import React from "react";
import heroImg from "../../assets/images/school-hero.png";

function SchoolHero({ country }) {
  return (
    <section>
      <h3 className="text-4xl md:text-5xl font-medium text-center">
        Study in <span className="capitalize"></span>
        {country}
      </h3>
      <div className="w-full h-[700px] bg-[url(/src/assets/images/school-hero.png)] mt-12 " />
    </section>
  );
}

export default SchoolHero;
