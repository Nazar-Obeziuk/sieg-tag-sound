import React, { ReactNode } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="box">
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
