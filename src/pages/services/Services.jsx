import React from "react";
import Navbar from "../../components/homepage/Navbar";
import Footer from "../../components/homepage/Footer";
import ServicesSection from "../../components/services/ServicesSection";

// import static assets
import servicesAbroad from "../../assets/images/services-abroad.png";
import servicesMbbs from "../../assets/images/services-mbbs.png";
import servicesIndia from "../../assets/images/services-india.png";
import servicesMbbsIndia from "../../assets/images/services-mbbs-india.png";

function Services() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section className="px-4 md:px-8 lg:px-14 py-40 flex flex-col gap-40">
        <ServicesSection
          title="Study Abroad"
          img={servicesAbroad}
          desc={
            "Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing."
          }
          btnText={"Learn More"}
        />
        <ServicesSection
          title="Study MMBS Abroad"
          img={servicesMbbs}
          desc={
            "Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing."
          }
          btnText={"Learn More"}
        />
        <ServicesSection
          title="Study in India"
          img={servicesIndia}
          desc={
            "Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing."
          }
          btnText={"Learn More"}
        />
        <ServicesSection
          title="Study MBBS in India"
          img={servicesMbbsIndia}
          desc={
            "Can we take this offline we need to think big start small and scale fast to energize our clients or the last person we talked to said this would be ready nor get buy-in. Wiggle room ensure to follow requirements when developing solutions or high touch client so individual get six alpha pups in here for a focus group. \n Get buy-in currying favour, streamline, yet not enough bandwidth. If you're not hurting you're not winning locked and loaded we need to follow protocol nor if you could do that, that would be great we should leverage existing."
          }
          btnText={"Learn More"}
        />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

export default Services;
