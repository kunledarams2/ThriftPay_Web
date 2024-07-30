import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import "./App.css";
import ThriftPayLandingPage from "./pages/ThriftPayLandingPage";
import ContactUs from "./pages/Contact";
import Root from "./pages/Root";

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <nav>
        <Link to="/vite-react-router/">Home</Link>
        {" | "}
        <Link to="/vite-react-router/contact">Contact</Link>
      </nav>

      <Outlet />

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );

  // const router = createBrowserRouter([
  //   {
  //     // path: "/",
  //     // element: <ThriftPayLandingPage />,
  //     // // errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Root />,
  //         children: [
  //           {
  //             index: true,
  //             element: <Navigate to="/home" replace />,
  //           },
  //           { path: "/home", element: <ThriftPayLandingPage /> },
  //           { path: "/contactus", element: <ContactUs /> },
  //         ],
  //       },
  //     ],
  //   },
  // ]);

  // return <RouterProvider router={router} />;
}

export default App;
