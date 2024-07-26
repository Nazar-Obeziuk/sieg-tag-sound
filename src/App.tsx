import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import Portfolio from "./pages/portfolio/Portfolio";
import Blog from "./pages/blog/Blog";
import BlogDetails from "./pages/blog/components/blog-details/BlogDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Routes>
    </Layout>
  );
}

export default App;
