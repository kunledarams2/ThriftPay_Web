import { Outlet } from "react-router-dom";

import TopNav from "./components/TopNav";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
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
