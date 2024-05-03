import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PageOverlay from "./components/base/PageOverlay";
import Header from "./components/header/Header";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Header />
    <PageOverlay>
      <App />
    </PageOverlay>
  </React.StrictMode>,
);
