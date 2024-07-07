import React from "react";
import "./App.css";
import Layout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>{/* <Route path="*" element={} /> */}</Routes>
    </Layout>
  );
}

export default App;
