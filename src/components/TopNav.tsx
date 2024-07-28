import { FunctionComponent, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, Element, animateScroll as scroll, scroller } from "react-scroll";
import "./TopNav.css";
import { NavigateFunction, useNavigate } from "react-router-dom";

export type TopNavType = {
  className?: string;
};

const TopNav: FunctionComponent<TopNavType> = ({ className = "" }) => {
  let navigate: NavigateFunction = useNavigate();
  const handleScrollToTop = () => {
    scroll.scrollToTop();
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
        <div className="logo">
          <img className="dreallogo1-2-icon" alt="" src="/dreallogo1-2.svg" />
          <div className="thriftpay">ThriftPay</div>
        </div>
        <div className="container">
          <div className="logo1">
            <img
              className="dreallogo1-2-icon1"
              loading="lazy"
              alt=""
              src="/dreallogo1-2-1.svg"
            />
            <div className="thriftpay1">ThriftPay</div>
          </div>
          <div className="links">
            <a
              className="home"
              onClick={() => {
                navigate("/home");
                handleScrollToTop;
              }}
            >
              Home
            </a>
            <a className="why-us2">
              {" "}
              <Link to="targetElement" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  Why Us?
                </motion.a>
              </Link>
            </a>
            <a className="about-us">
              <Link to="targetElementAboutUs" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  About Us
                </motion.a>
              </Link>
            </a>
            <a className="how-it-works">
              <Link to="targetElementHowItWork" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  How it Works
                </motion.a>
              </Link>
            </a>
            <a className="faqs">
              <Link to="targetElementFAQ" smooth={true} duration={500}>
                <motion.a whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  FAQs
                </motion.a>
              </Link>
            </a>
          </div>
          <button className="button" onClick={() => navigate("/contactus")}>
            <div className="button1">Contact Us</div>
          </button>
        </div>
      </motion.header>

      {/* <Element name="autoFlowElement">
        <motion.div
          initial={{ y: "-100vh", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 50 }}
          style={{
            position: "fixed",
            height: "20px",
            backgroundColor: "lightblue",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
            zIndex: 1000,
          }}
        ></motion.div>
      </Element> */}

      {/* <motion.header
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "lightcoral",
          padding: "20px",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
      
      </motion.header> */}
    </header>
  );
};

export default TopNav;
