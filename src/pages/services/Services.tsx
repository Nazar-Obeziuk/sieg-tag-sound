import React from "react";
import ServicesMain from "./components/services-main/ServicesMain";
import ServicesWork from "./components/services-work/ServicesWork";
import ServicesInfo from "./components/services-info/ServicesInfo";
import ServicesOrder from "./components/services-order/ServicesOrder";
import ServicesAdvice from "./components/services-advice/ServicesAdvice";
import ServicesForm from "./components/services-form/ServicesForm";

const Services: React.FC = () => {
  return (
    <>
      <ServicesMain />
      <ServicesWork />
      <ServicesInfo />
      <ServicesOrder />
      <ServicesAdvice />
      <ServicesForm />
    </>
  );
};

export default Services;
