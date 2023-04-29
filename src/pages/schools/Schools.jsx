import React from "react";
import Footer from "../../components/homepage/Footer";
import Navbar from "../../components/homepage/Navbar";
import SchoolHero from "../../components/schools/SchoolHero";
import WorkAndStudy from "../../components/schools/WorkAndStudy";

//
import servicesAbroad from "../../assets/images/services-abroad.png";
import QuickWatch from "../../components/schools/QuickWatch";
import WhyStudy from "../../components/schools/WhyStudy";
import StatsAndScholarship from "../../components/schools/StatsAndScholarship";
import SchoolTestimonials from "../../components/schools/SchoolTestimonials";

function Schools({ country }) {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="py-20 flex flex-col gap-40">
        <SchoolHero country={country} />
        <WorkAndStudy
          country={country}
          img={servicesAbroad}
          workText={
            "Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing."
          }
        />
        <QuickWatch />
        <WhyStudy
          country={country}
          reason={
            "Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing. \n Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing. \n Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing.Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing.Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing.Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing.Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing.Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing."
          }
        />
        <StatsAndScholarship country={country} />
        <SchoolTestimonials />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Schools;
