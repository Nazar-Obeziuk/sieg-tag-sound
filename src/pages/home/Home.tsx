import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
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
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>{t("home.homeMeta.homeTitle")}</title>
        <meta name="description" content={t("home.homeMeta.homeDescription")} />
        <meta name="keywords" content={t("home.homeMeta.homeKeywords")} />
        <meta property="og:title" content={t("home.homeMeta.homeTitle")} />
        <meta property="og:description" content={t("home.homeMeta.homeDescription")} />
        <meta property="og:image" content="https://siegtagsound.com/images/home-about.webp" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
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
