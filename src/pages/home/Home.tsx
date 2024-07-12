import React from "react";
import HomeMain from "./components/home-main/HomeMain";
import HomeAbout from "./components/home-about/HomeAbout";
import HomeServices from "./components/home-services/HomeServices";
import HomeTable from "./components/home-table/HomeTable";
import HomeUpload from "./components/home-upload/HomeUpload";
import HomePayment from "./components/home-payment/HomePayment";
import HomeForm from "./components/home-form/HomeForm";
import HomePortfolio from "./components/home-portfolio/HomePortfolio";
import HomeProcess from "./components/home-process/HomeProcess";
import HomeBlog from "./components/home-blog/HomeBlog";

const Home: React.FC = () => {
  return (
    <>
      <HomeMain />
      <HomeAbout />
      <HomeServices />
      <HomeTable />
      <HomeUpload />
      <HomePayment />
      <HomeForm />
      <HomePortfolio />
      <HomeProcess />
      <HomeBlog />
    </>
  );
};

export default Home;
