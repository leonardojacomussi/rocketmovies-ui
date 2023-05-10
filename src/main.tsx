import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  </React.StrictMode>,
);
