import { FunctionComponent } from "react";
import "./Footer.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <footer className={`footer ${className}`}>
      <div className="content4">
        <div className="logo2">
          <div className="auto-added-frame">
            <div className="logo3">
              <img
                className="dreallogo1-2-icon2"
                loading="lazy"
                alt=""
                src="/dreallogo1-2-2.svg"
              />
              <a className="thriftpay2">ThriftPay</a>
            </div>
          </div>
          <div className="your-gateway-to">
            Your gateway to smarter savings. Join a community of savvy savers,
            track your progress, and achieve your financial goals with ease.
          </div>
        </div>
        <a className="about-us3">About Us</a>
        <div className="faqs3">FAQs</div>
        <div className="contact-us">Contact Us</div>
        <div className="terms-of-use">Terms of Use</div>
        <a className="privacy-policy">Privacy Policy</a>
        <div className="footer-social">
          <img
            className="linkedin-icon"
            loading="lazy"
            alt=""
            src="/linkedin.svg"
          />
          <img
            className="twitter-icon"
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
          <img
            className="facebook-icon"
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
          <img className="facebook-icon1" alt="" src="/facebook-1@2x.png" />
          <img className="facebook-icon2" alt="" src="/facebook-2.svg" />
        </div>
      </div>
      <img className="divider-icon2" alt="" src="/divider-2.svg" />
      <div className="copyright-thrift">Copyright © Thrift Pay 2024</div>
    </footer>
  );
};

export default Footer;
