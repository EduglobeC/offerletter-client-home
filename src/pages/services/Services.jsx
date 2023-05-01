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
      <section className="flex flex-col gap-40 px-4 py-40 md:px-8 lg:px-14">
        <ServicesSection
          title="Study Abroad"
          img={servicesAbroad}
          desc={
            "Are you ready for an incredible adventure? Imagine studying in a different country, making new friends, and experiencing new cultures firsthand! Studying abroad is an amazing opportunity to learn about new cultures, meet new friends, and improve your language skills.            Canada, Australia, USA, and UK are all excellent destinations for students looking to excel in their studies and embark on an adventure of a lifetime. With Offer Letter by your side, you'll have access to a wide range of educational opportunities and resources to help you achieve your goals. Get ready to discover new passions, make lifelong connections, and take your first step towards a bright future!"
          }
          btnText={"Learn More"}
        />
        <ServicesSection
          title="Study MMBS Abroad"
          img={servicesMbbs}
          desc={
            "Looking for a thrilling and rewarding career in the field of medicine? Studying MBBS abroad in countries like Russia, Kyrgyzstan, Kazakhstan, Philippines, or Bangladesh is a great opportunity to gain a            world-class education in medicine and surgery. In Russia, you'll get to study in state-of-the-art facilities while immersing you self in the country's rich culture. Kyrgyzstan, Kazakhstan, and Philippines offer affordable tuition fees and a chance to experience diverse and friendly communities. Bangladesh has top-ranked medical universities and a strong emphasis on research and innovation. With Offer Letter's guidance and support, you can make your dream of becoming a doctor a reality and make a significant impact on people's lives."
          }
          btnText={"Learn More"}
        />
        <ServicesSection
          title="Study in India"
          img={servicesIndia}
          desc={
            "Studying in India is an incredible opportunity to experience a diverse and fascinating culture, gain valuable skills, and pursue your academic goals.With over 35 million students enrolled in higher education institutions, India is home to one of the largest education systems in the world. Did you know that India is also the birthplace of the number system and the decimal point? India offers students the chance to study with outstanding academics, explore stunning landscapes, and experience a unique way of life. With hard work and determination, you can make your dreams of studying in India a reality and unlock a world of possibilities!"
          }
          btnText={"Learn More"}
        />
        <ServicesSection
          title="Study MBBS in India"
          img={servicesMbbsIndia}
          desc={
            "Did you know that India is home to some of the most prestigious medical colleges in the world? By studying MBBS in India, you can gain a competitive edge in your career while experiencing a rich and diverse culture. With a vast range of specializations to choose from and endless opportunities for hands-on experience, the sky's the limit for your future in medicine. With hard work and dedication, you can make your dreams of studying MBBS in India a reality and make a difference in the world of medicine. Get ready for an unforgettable adventure of learning and growth!."
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
