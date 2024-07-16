import React from "react";
import ServicesMain from "./components/services-main/ServicesMain";
import ServicesWork from "./components/services-work/ServicesWork";
import ServicesInfo from "./components/services-info/ServicesInfo";

const Services: React.FC = () => {
  return (
    <>
      <ServicesMain />
      <ServicesWork />
      <ServicesInfo />
    </>
  );
};

export default Services;
