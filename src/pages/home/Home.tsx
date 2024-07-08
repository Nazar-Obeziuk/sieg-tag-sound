import React from "react";
import HomeMain from "./components/home-main/HomeMain";
import HomeAbout from "./components/home-about/HomeAbout";
import HomeServices from "./components/home-services/HomeServices";
import HomeTable from "./components/home-table/HomeTable";
import HomeUpload from "./components/home-upload/HomeUpload";

const Home: React.FC = () => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeServices />
      <HomeTable />
      <HomeUpload />
    </>
  );
};

export default Home;
