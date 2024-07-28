import { FunctionComponent } from "react";
// import TopNav from "../components/TopNav";
import FrameComponent1 from "../components/FrameComponent1";
import WhyUs from "../components/WhyUs";
import WhyUs1 from "../components/WhyUs1";
import WhyUs2 from "../components/WhyUs2";
import FrameComponent from "../components/FrameComponent";
import AboutUS from "../components/AboutUS";
import Steps from "../components/Steps";
import ThriftGroups from "../components/ThriftGroups";
import Testimonials from "../components/Testimonials";
// import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
// import Footer from "../components/Footer";
import "./ThriftPayLandingPage.css";
import { motion } from "framer-motion";
import { Element } from "react-scroll";
import "../components/TopNav.css";

const ThriftPayLandingPage: FunctionComponent = () => {
  // const handleScrollToTop = () => {
  //   scroll.scrollToTop();
  // };

  return (
    <div className="thriftpay-landing-page">
      <section className="main">
        {/* <TopNav /> */}

        <div className="frame-parent">
          <FrameComponent3 />
          {/* <FrameComponent1 /> */}
          {/* Link to scroll to the target element */}
          {/* <Link to="targetElement" smooth={true} duration={500}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Scroll to Target Element
            </motion.button>
          </Link> */}

          <div className="why-us">
            <img className="divider-icon" alt="" src="/divider.svg" />

            <Element name="targetElement">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                whileHover={{ scale: 1.05 }}
                style={
                  {
                    // height: "200px",
                    // backgroundColor: "lightblue",
                    // display: "flex",
                    // justifyContent: "center",
                    // alignItems: "center",
                  }
                }
              >
                <div className="why-us-content">
                  <h1 className="why-us1">Why Us?</h1>
                  <div className="thriftpay-is-your">
                    ThriftPay is your trusted Thrift savings partner, offering a
                    seamless platform for you to achieve your financial goals.
                    Our platform connects you with a community of like-minded
                    savers, where you can join Thrift plans tailored to your
                    needs.
                  </div>
                </div>
              </motion.div>
            </Element>
          </div>
          <WhyUs2 />
          <WhyUs1 />
          <WhyUs />
        </div>
      </section>

      <AboutUS />
      <Steps />
      <ThriftGroups />
      <Testimonials />
      <FrameComponent1 />
      <FrameComponent />
      {/* <FrameComponent3 /> */}
      {/* <FrameComponent2 /> */}

      {/* <Footer /> */}
    </div>
  );
};

export default ThriftPayLandingPage;
