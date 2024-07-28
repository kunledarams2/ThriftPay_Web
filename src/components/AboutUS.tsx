import { FunctionComponent } from "react";
import "./AboutUS.css";
import { motion } from "framer-motion";
import { Link, Element, animateScroll as scroll } from "react-scroll";

export type AboutUSType = {
  className?: string;
};

const AboutUS: FunctionComponent<AboutUSType> = ({ className = "" }) => {
  return (
    <section className={`about-us1 ${className}`}>
      <img className="lines-icon" alt="" src="/lines@2x.png" />
      <Element name="targetElementAboutUs">
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
          <h1 className="about-us2">About Us</h1>
          <div className="text-wrapper">
            <div className="at-thriftpay-we">
              At ThriftPay, we are passionate about empowering individuals to
              take control of their financial futures. We believe that everyone
              deserves the opportunity to save smartly, grow their wealth, and
              achieve their financial goals. With a commitment to transparency,
              community, and innovation, we've built a platform that redefines
              the way people approach Thrift saving.
            </div>
            <button className="button4">
              <a className="button5">Learn More</a>
              <img className="icons19" alt="" src="/icons-19.svg" />
            </button>
          </div>
          <img
            className="divider-icon1"
            loading="lazy"
            alt=""
            src="/divider-1.svg"
          />
        </motion.div>
      </Element>
    </section>
  );
};

export default AboutUS;
