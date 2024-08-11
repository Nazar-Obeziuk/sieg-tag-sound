import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blog/components/blog-details/BlogDetails";
import Admin from "./pages/admin/Admin";
import AdminLogin from "./pages/admin/components/admin-login/AdminLogin";
import AdminPortfolioUpdate from "./pages/admin/components/admin-portfolio/components/admin-portfolio-update/AdminPortfolioUpdate";
import AdminCodeUpdate from "./pages/admin/components/admin-code/components/admin-code-update/AdminCodeUpdate";
import AdminBlogUpdate from "./pages/admin/components/admin-blog/components/admin-blog-update/AdminBlogUpdate";
import Cookies from "./pages/cookies/Cookies";
import PrivacyPolicy from "./pages/privacy-policy/PrivacyPolicy";
import CartUpload from "./pages/cart/cart-upload/CartUpload";
import AdminPricesUpdate from "./pages/admin/components/admin-prices/components/admin-prices-update/AdminPricesUpdate";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cart-upload" element={<CartUpload />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin-blog-update/:id" element={<AdminBlogUpdate />} />
        <Route
          path="/admin-portfolio-update/:id"
          element={<AdminPortfolioUpdate />}
        />
        <Route
          path="/admin-promocode-update/:id"
          element={<AdminCodeUpdate />}
        />
        <Route path="/admin-price-update/:id" element={<AdminPricesUpdate />} />
      </Routes>
    </Layout>
  );
}

export default App;
