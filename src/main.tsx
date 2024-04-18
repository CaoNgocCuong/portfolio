// Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Styles
import "./styles/index.css";
import "./styles/global.css";

// I18Next
import "./i18next.tsx";

// Providers
import { LanguageContextProvider, ThemeProvider } from "@/providers";

// Constants
import { THEME } from "@/constants";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeProvider defaultTheme={THEME.DARK}>
        <App />
      </ThemeProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
);
