import React from "react";
import HomeMain from "./components/home-main/HomeMain";
import HomeAbout from "./components/home-about/HomeAbout";
import HomeServices from "./components/home-services/HomeServices";

const Home: React.FC = () => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeServices />
    </>
  );
};

export default Home;
