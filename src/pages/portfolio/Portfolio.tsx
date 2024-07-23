import React from "react";
import PortfolioBanner from "./components/portfolio-banner/PortfolioBanner";
import PortfolioWorks from "./components/portfolio-works/PortfolioWorks";

const Portfolio: React.FC = () => {
  return (
    <>
      <PortfolioBanner />
      <PortfolioWorks />
    </>
  );
};

export default Portfolio;
