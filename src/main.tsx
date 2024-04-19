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

// Components
import ErrorBoundary from "@/components/error-boundary";

// eslint-disable-next-line react-refresh/only-export-components
const PATH = "src/main.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LanguageContextProvider>
      <ThemeProvider defaultTheme={THEME.DARK}>
        <ErrorBoundary path={PATH}>
          <App />
        </ErrorBoundary>
      </ThemeProvider>
    </LanguageContextProvider>
  </React.StrictMode>,
);
