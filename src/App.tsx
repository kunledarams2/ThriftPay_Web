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
}

export default App;
