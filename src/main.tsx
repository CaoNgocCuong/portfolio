// Libraries
import React from "react";
import ReactDOM from "react-dom/client";

// Styles
import "./styles/index.css";
import "./styles/global.css";

// I18Next
import "./i18next.tsx";

// Providers
import { LanguageContextProvider, ThemeProvider } from "@/providers";

// Constants
import { THEME } from "@/constants";

// Components
import { RouterProvider } from "react-router-dom";

// Routers
import { router } from "@/routes/root.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeProvider defaultTheme={THEME.DARK}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
);
