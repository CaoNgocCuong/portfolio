// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Styles
import "./styles/global.css";

// I18Next
import "./i18next.tsx";

// Providers
import { LanguageContextProvider } from "@/providers";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <App />
    </LanguageContextProvider>
  </React.StrictMode>,
);
