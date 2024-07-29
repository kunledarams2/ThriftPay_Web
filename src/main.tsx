import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "./global.css";
// import { BrowserRouter } from "react-router-dom";
// import ThriftPayLandingPage from "./pages/ThriftPayLandingPage.tsx";

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// const container = document.getElementById("root");
// const root = createRoot(container!);

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
