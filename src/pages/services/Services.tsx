import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import ServicesMain from "./components/services-main/ServicesMain";
import ServicesWork from "./components/services-work/ServicesWork";
import ServicesInfo from "./components/services-info/ServicesInfo";
import ServicesOrder from "./components/services-order/ServicesOrder";
import ServicesAdvice from "./components/services-advice/ServicesAdvice";
import ServicesForm from "./components/services-form/ServicesForm";

const Services: React.FC = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const currentUrl = `${window.location.origin}${location.pathname}`;
  return (
    <>
      <Helmet>
        <title>{t("services.servicesMeta.servicesTitle")}</title>
        <meta name="description" content={t("services.servicesMeta.servicesDescription")} />
        <meta name="keywords" content={t("services.servicesMeta.servicesKeywords")} />
        <meta property="og:title" content={t("services.servicesMeta.servicesTitle")} />
        <meta property="og:description" content={t("services.servicesMeta.servicesDescription")} />
        <meta property="og:image" content="https://siegtagsound.com/images/services-item-1.webp" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>
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
