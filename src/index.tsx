import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./languages/config/i18n";
import { BrowserRouter } from "react-router-dom";
import { AudioProvider } from "./context/AudiContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <AudioProvider>
      <App />
    </AudioProvider>
  </BrowserRouter>
);
