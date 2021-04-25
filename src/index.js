import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background-color:${({ theme }) => theme.colors.whisper};
  -moz-osx-font-smoothing: grayscale;
}
`;

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
