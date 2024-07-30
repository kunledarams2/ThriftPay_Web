import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// import "./index.css";
import "./global.css";
import {
  // Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import Root from "./pages/Root.tsx";
import ThriftPayLandingPage from "./pages/ThriftPayLandingPage.tsx";
import ContactUs from "./pages/Contact.tsx";

const router = createBrowserRouter([
  {
    // path: "/",
    // element: <ThriftPayLandingPage />,
    // // errorElement: <ErrorPage />,
    children: [
      {
        path: "/ThriftPay_Web/",
        element: <App />,
        children: [
          // {
          //   index: true,

          //   element: <Navigate to="/home" replace />,
          // },
          { path: "/ThriftPay_Web/home", element: <ThriftPayLandingPage /> },
          { path: "/ThriftPay_Web/contactus", element: <ContactUs /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
