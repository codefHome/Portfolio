import React from "react";

import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../customeTheme.ts";
import { useAppSelector } from "./store/hooks.ts";
import ReactDOM from "react-dom";

const RootApp = () => {
  const { isDark } = useAppSelector((state) => state.lading);
  return (
    <React.StrictMode>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
};

const AppWithRedux = () => (
  <Provider store={store}>
    <RootApp />
  </Provider>
);

ReactDOM.render(<AppWithRedux />, document.getElementById("root"));
