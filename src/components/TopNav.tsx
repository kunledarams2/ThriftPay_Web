import { FunctionComponent, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { scroller } from "react-scroll";
// import "./TopNav.css";  Link, animateScroll as scroll,
import styles from "./TopNav.module.css";
import { NavigateFunction, useNavigate } from "react-router-dom";
import logoIcon from "../assets/tnLogo.svg";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  let navigate: NavigateFunction = useNavigate();

  // const handleScrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  const [isOpenHomePage, setIsOpenHomePage] = useState(true);
  const [isOpenFAQPage, setIsOpenFAQPage] = useState(false);
  const [isOpenAboutPage, setIsOpenAboutPage] = useState(false);

  const selectedHomePage = () => {
    setIsOpenHomePage(true);
    setIsOpenFAQPage(false);
    setIsOpenAboutPage(false);
    navigate("/home");
  };

  const selectedAboutPage = () => {
    setIsOpenHomePage(false);
    setIsOpenFAQPage(false);
    setIsOpenAboutPage(true);
    navigate("/aboutus");
  };

  const selectedFAQPage = () => {
    setIsOpenHomePage(false);
    setIsOpenFAQPage(true);
    setIsOpenAboutPage(false);
    navigate("/faqs");
  };

  useEffect(() => {
    // Automatically scroll to the element when the component mounts
    scroller.scrollTo("autoFlowElement", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }, []);

  return (
    <header className={`top-nav ${className}`}>
      <motion.header
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,

          // backgroundColor: "lightcoral",
          padding: "20px",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
        <div className={styles.navbar}>
          <div className={styles.logoAndText}>
            <img className={styles.logoIcon} alt="" src={logoIcon} />
            <div className={styles.brandName}>ThriftNest</div>
          </div>
          <div className={styles.buttons}>
            <div className={styles.button}>
              <div className={styles.button1}>Login</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.button1}>Sign up</div>
            </div>
          </div>
          <div className={styles.container}>
            <div
              className={isOpenHomePage ? styles.button4 : ""}
              onClick={selectedHomePage}
            >
              <div className={styles.text}>Home</div>
            </div>
            <div
              className={isOpenAboutPage ? styles.button4 : ""}
              onClick={selectedAboutPage}
            >
              <div className={styles.text}>About Us</div>
            </div>
            <div
              className={isOpenFAQPage ? styles.button4 : ""}
              onClick={selectedFAQPage}
            >
              <div className={styles.text}>FAQs</div>
            </div>

            {/* <div className={styles.text1}>About Us</div>
            <div className={styles.text1}>FAQs</div> */}
          </div>
        </div>
      </motion.header>
    </header>
  );
};

export default TopNav;
