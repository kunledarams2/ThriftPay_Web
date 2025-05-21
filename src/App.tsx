import { Outlet, useLocation, useNavigate } from "react-router-dom";

import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const redirectedRef = useRef(false); // guard

  useEffect(() => {
    if (redirectedRef.current) return;

    if (
      location.search.includes("~and~") ||
      location.search.includes("&/&") ||
      location.search.length > 20
    ) {
      redirectedRef.current = true;
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

// function App() {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Clean up garbage query strings globally
//     if (
//       location.search.includes("~and~") ||
//       location.search.includes("&/&") ||
//       location.search.length > 20
//     ) {
//       // Rebuild the clean path (strip query and hash)
//       const cleanPath = location.pathname;
//       navigate(cleanPath, { replace: true });
//     }
//   }, [location, navigate]);

//   return (
//     <>
//       <TopNav />
//       <Outlet />
//       <Footer />
//     </>
//   );
// }

// export default App;
