import React from "react";
import Footer from "../../Shared/Footer/Footer";
import AboutDoctor from "../AboutDoctor/AboutDoctor";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <AboutDoctor></AboutDoctor>
      <Footer></Footer>
    </div>
  );
};

export default Home;
