import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import PortfolioBanner from "./components/portfolio-banner/PortfolioBanner";
import PortfolioWorks from "./components/portfolio-works/PortfolioWorks";

const Portfolio: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>{t("portfolio.portfolioMeta.portfolioTitle")}</title>
        <meta name="description" content={t("portfolio.portfolioMeta.portfolioDescription")} />
        <meta name="keywords" content={t("portfolio.portfolioMeta.portfolioKeywords")} />
        <meta property="og:title" content={t("portfolio.portfolioMeta.portfolioTitle")} />
        <meta property="og:description" content={t("portfolio.portfolioMeta.portfolioDescription")} />
        <meta property="og:image" content="https://siegtagsound.com/images/portfolio-banner.webp" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
      <PortfolioBanner />
      <PortfolioWorks />
    </>
  );
};

export default Portfolio;
