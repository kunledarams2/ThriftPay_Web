import { FunctionComponent } from "react";
// import "./Footer.css";
import styles from "./Footer.module.css";

export type FooterType = {
  className?: string;
};

const Footer: FunctionComponent<FooterType> = ({ className = "" }) => {
  return (
    <div className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.logoParent}>
          <div className={styles.logo}>
            <div className={styles.autoAddedFrame}>
              <div className={styles.logo1}>
                <img
                  className={styles.dreallogo12Icon}
                  alt=""
                  src="/dreallogo1-2-2.svg"
                />
                <div className={styles.thriftpay}>ThriftPay</div>
              </div>
            </div>
            <div className={styles.yourGatewayTo}>
              Your gateway to smarter savings. Join a community of savvy savers,
              track your progress, and achieve your financial goals with ease.
            </div>
            <div className={styles.ogunHousingEstateOgunStatParent}>
              <div className={styles.ogunHousingEstate}>
                Ogun Housing Estate, Ogun state, Nigeria.
              </div>
              <div className={styles.ogunHousingEstate}>+234 810 753 6436</div>
              <div className={styles.ogunHousingEstate}>RC - 7827136</div>
            </div>
          </div>
          <div className={styles.aboutUs}>About Us</div>
          <div className={styles.aboutUs}>FAQs</div>
          <div className={styles.aboutUs}>Contact Us</div>
          <div className={styles.aboutUs}>Terms of Use</div>
          <div className={styles.aboutUs}>Privacy Policy</div>
          <div className={styles.linkedinParent}>
            <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
            <img className={styles.linkedinIcon} alt="" src="/twitter.svg" />
            <img className={styles.linkedinIcon} alt="" src="/facebook.svg" />
            <img
              className={styles.facebookIcon1}
              alt=""
              src="/facebook-1@2x.png"
            />
            <img className={styles.linkedinIcon} alt="" src="/facebook-2.svg" />
          </div>
        </div>
      </div>
      <img className={styles.dividerIcon} alt="" src="Divider.svg" />
      <div className={styles.copyrightThriftPay2024Parent}>
        <div className={styles.copyrightThrift}>
          Copyright © Thrift Pay 2024 | ThriftPay by Jemivy Global Technology
          LTD.
        </div>
        <div className={styles.plot11Block29Road29OgunParent}>
          <div className={styles.ogunHousingEstate}>
            Plot 11 Block 29 Road 29, Ogun Housing Estate, Ogun state, Nigeria.
          </div>
          <div className={styles.ogunHousingEstate}>+234 810 753 6436</div>
        </div>
      </div>
    </div>
  );
  // <footer className={`footer ${className}`}>
  //   <div className="content4">
  //     <div className="logo2">
  //       <div className="auto-added-frame">
  //         <div className="logo3">
  //           <img
  //             className="dreallogo1-2-icon2"
  //             loading="lazy"
  //             alt=""
  //             src="/dreallogo1-2-2.svg"
  //           />
  //           <a className="thriftpay2">ThriftPay</a>
  //         </div>
  //       </div>
  //       <div className="ogunHousingEstateOgunStatParent">
  //         <div className="ogunHousingEstate">
  //           Ogun Housing Estate, Ogun state, Nigeria.
  //         </div>
  //         <div className="ogunHousingEstate">+234 810 753 6436</div>
  //         <div className="ogunHousingEstate">RC - 7827136</div>
  //       </div>
  //       <div className="your-gateway-to"></div>
  //     </div>
  //     <a className="about-us3">About Us</a>
  //     <div className="faqs3">FAQs</div>
  //     <div className="contact-us">Contact Us</div>
  //     <div className="terms-of-use">Terms of Use</div>
  //     <a className="privacy-policy">Privacy Policy</a>
  //     <div className="footer-social">
  //       <img
  //         className="linkedin-icon"
  //         loading="lazy"
  //         alt=""
  //         src="/linkedin.svg"
  //       />
  //       <img
  //         className="twitter-icon"
  //         loading="lazy"
  //         alt=""
  //         src="/twitter.svg"
  //       />
  //       <img
  //         className="facebook-icon"
  //         loading="lazy"
  //         alt=""
  //         src="/facebook.svg"
  //       />
  //       <img className="facebook-icon1" alt="" src="/facebook-1@2x.png" />
  //       <img className="facebook-icon2" alt="" src="/facebook-2.svg" />
  //     </div>
  //   </div>
  //   <img className="divider-icon2" alt="" src="/divider-2.svg" />
  //   <div className="copyright-thrift">
  //     Copyright © Thrift Pay 2024 | ThriftPay by Jemivy Global Technology LTD
  //   </div>
  // </footer>
  // );
};

export default Footer;
