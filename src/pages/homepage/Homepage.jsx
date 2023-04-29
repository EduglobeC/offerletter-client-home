// styles
// components
import Footer from "../../components/homepage/Footer";
import Navbar from "../../components/homepage/Navbar";
import Header from "../../components/homepage/Header";
import StudyAbroad from "../../components/homepage/StudyAbroad";
import MbbsAbroad from "../../components/homepage/MbbsAbroad";
import StudyIndia from "../../components/homepage/StudyIndia";
import MbbsIndia from "../../components/homepage/MbbsIndia";
import Stats from "../../components/homepage/Stats";
import Facilities from "../../components/homepage/Facilities";
import Webinar from "../../components/homepage/Webinar";
import Testimony from "../../components/homepage/Testimony";

const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />
      <Header />
      <StudyAbroad />
      <MbbsAbroad />
      <StudyIndia />
      <MbbsIndia />
      <Stats />
      <Facilities />
      <Webinar />
      <Testimony />
      <Footer />
    </div>
  );
};

export default Homepage;
