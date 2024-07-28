import {
  Navigate,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";
import ThriftPayLandingPage from "./pages/ThriftPayLandingPage";
import ContactUs from "./pages/Contact";
import Root from "./pages/Root";

function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action, pathname]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  const router = createBrowserRouter([
    {
      // path: "/",
      // element: <ThriftPayLandingPage />,
      // // errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Root />,
          children: [
            {
              index: true,
              element: <Navigate to="/home" replace />,
            },
            { path: "/home", element: <ThriftPayLandingPage /> },
            { path: "/contactus", element: <ContactUs /> },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
  // return (
  //   <Routes>
  //     <Route path="/" element={<ThriftPayLandingPage />} />
  //     {/* <Route path="/contact" element={<ContactUs />} /> */}
  //   </Routes>
  // );
}

export default App;
