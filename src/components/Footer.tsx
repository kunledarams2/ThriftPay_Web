import { FunctionComponent, useEffect } from "react";
// import "./Footer.css";
import styles from "./Footer.module.css";
import mobileImage from "../assets/footer/mobile_handle.png";
import appLogo from "../assets/tnLogo.svg";
import playstoreIcon from "../assets/footer/Google Play.svg";
import applestoreIcon from "../assets/footer/App Store.svg";
import linkedinIcon from "../assets/footer/Linkedin.svg";
import twitterIcon from "../assets/footer/Twitter.svg";
import facebookIcon from "../assets/footer/Facebook.svg";
import instagramIcon from "../assets/footer/Instagram.svg";
import youtubeIcon from "../assets/footer/Youtube.svg";
import dividerIcon from "../assets/footer/Divider.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavigateFunction, useNavigate } from "react-router-dom";

// import { NavigateFunction, useNavigate } from "react-router";

export type FooterType = {
  className?: string;
};

// import { FunctionComponent } from "react";
// import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4, // trigger when 40% is visible
  });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 100 });
    }
  }, [inView, controls]);

  let navigate: NavigateFunction = useNavigate();

  const selectedPrivacyPage = () => {
    navigate("/privacy");
  };

  // useEffect(() => {
  //   if (location.search.includes("~and~") || location.search.length > 20) {
  //     // clean redirect
  //     navigate("/privacy", { replace: true });
  //   }
  // }, [location]);

  return (
    <div className={styles.frameParent}>
      <div className={styles.downloadAppWrapper}>
        <div className={styles.downloadApp}>
          <img className={styles.downloadAppChild} alt="" src={mobileImage} />
          <div className={styles.downloadAppInner}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.left}>
            <motion.div
              ref={ref}
              animate={controls}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className={styles.transformYourSavings}>
                Transform Your Savings Experience with ThriftNest!
              </div>
              <div className={styles.downloadNowAnd}>
                Download now and start thriving!
              </div>
            </motion.div>

            <div className={styles.appStoreParent}>
              <img
                className={styles.appStoreIcon}
                alt=""
                src={applestoreIcon}
              />
              <img
                className={styles.googlePlayIcon}
                alt=""
                src={playstoreIcon}
              />
            </div>
          </div>
          <div className={styles.downloadAppItem} />
          <div className={styles.frameDiv} />
          <img
            className={styles.freeMockupOfFemaleHandHol}
            alt=""
            src={mobileImage}
          />
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.logoParent}>
            <div className={styles.logo}>
              <div className={styles.autoAddedFrame}>
                <div className={styles.logoGroup}>
                  <img className={styles.logoIcon} alt="" src={appLogo} />
                  <div className={styles.thriftnest}>ThriftNest</div>
                </div>
              </div>
              <div className={styles.yourGatewayTo}>
                Your gateway to smarter savings. Join a community of savvy
                savers, track your progress, and achieve your financial goals
                with ease.
              </div>
              <div className={styles.ogunHousingEstateOgunStatParent}>
                <div className={styles.ogunHousingEstate}>
                  Ogun Housing Estate, Ogun state, Nigeria.
                </div>
                <div className={styles.ogunHousingEstate}>
                  +234 810 753 6436
                </div>
                <div className={styles.ogunHousingEstate}>RC - 7827136</div>
              </div>
            </div>
            <div className={styles.aboutUs}>About Us</div>
            <div className={styles.aboutUs}>FAQs</div>
            <div className={styles.aboutUs}>Contact Us</div>
            <div className={styles.aboutUs}>Terms of Use</div>
            <div className={styles.aboutUs} onClick={selectedPrivacyPage}>
              Privacy Policy{" "}
            </div>
          </div>
        </div>
        <img className={styles.dividerIcon} alt="" src={dividerIcon} />
        <div className={styles.frameGroup}>
          <div className={styles.copyrightThriftPay2024Parent}>
            <div className={styles.copyrightThrift}>
              Copyright © Thrift Nest 2024 | ThriftPay by Jemivy Global
              Technology LTD.
            </div>
            <div className={styles.plot11Block29Road29OgunParent}>
              <div className={styles.ogunHousingEstate}>
                Plot 11 Block 29 Road 29, Ogun Housing Estate, Ogun state,
                Nigeria.
              </div>
              <div className={styles.ogunHousingEstate}>+234 810 753 6436</div>
            </div>
          </div>
          <div className={styles.linkedinParent}>
            <img className={styles.linkedinIcon} alt="" src={linkedinIcon} />
            <img className={styles.linkedinIcon} alt="" src={twitterIcon} />
            <img className={styles.linkedinIcon} alt="" src={facebookIcon} />
            <img className={styles.facebookIcon1} alt="" src={instagramIcon} />
            <img className={styles.linkedinIcon} alt="" src={youtubeIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;

// import { FunctionComponent } from "react";
// import styles from "./Footer.module.css";

// const Footer: FunctionComponent = () => {
//   return (
//     <div className={styles.footer}>
//       <div className={styles.content}>
//         <div className={styles.logoParent}>
//           <div className={styles.logo}>
//             <div className={styles.autoAddedFrame}>
//               <div className={styles.logoGroup}>
//                 <img className={styles.logoIcon} alt="" src="Logo.svg" />
//                 <div className={styles.thriftnest}>ThriftNest</div>
//               </div>
//             </div>
//             <div className={styles.yourGatewayTo}>
//               Your gateway to smarter savings. Join a community of savvy savers,
//               track your progress, and achieve your financial goals with ease.
//             </div>
//             <div className={styles.ogunHousingEstateOgunStatParent}>
//               <div className={styles.ogunHousingEstate}>
//                 Ogun Housing Estate, Ogun state, Nigeria.
//               </div>
//               <div className={styles.ogunHousingEstate}>+234 810 753 6436</div>
//               <div className={styles.ogunHousingEstate}>RC - 7827136</div>
//             </div>
//           </div>
//           <div className={styles.aboutUs}>About Us</div>
//           <div className={styles.aboutUs}>FAQs</div>
//           <div className={styles.aboutUs}>Contact Us</div>
//           <div className={styles.aboutUs}>Terms of Use</div>
//           <div className={styles.aboutUs}>Privacy Policy</div>
//         </div>
//       </div>
//       <img className={styles.dividerIcon} alt="" src="Divider.svg" />
//       <div className={styles.frameParent}>
//         <div className={styles.copyrightThriftPay2024Parent}>
//           <div className={styles.copyrightThrift}>
//             Copyright © Thrift Pay 2024 | ThriftPay by Jemivy Global Technology
//             LTD.
//           </div>
//           <div className={styles.plot11Block29Road29OgunParent}>
//             <div className={styles.ogunHousingEstate}>
//               Plot 11 Block 29 Road 29, Ogun Housing Estate, Ogun state,
//               Nigeria.
//             </div>
//             <div className={styles.ogunHousingEstate}>+234 810 753 6436</div>
//           </div>
//         </div>
//         <div className={styles.linkedinParent}>
//           <img className={styles.linkedinIcon} alt="" src="Linkedin.svg" />
//           <img className={styles.linkedinIcon} alt="" src="Twitter.svg" />
//           <img className={styles.linkedinIcon} alt="" src="Facebook.svg" />
//           <img className={styles.facebookIcon1} alt="" src="Facebook.png" />
//           <img className={styles.linkedinIcon} alt="" src="Facebook.svg" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Footer;

// const Footer: FunctionComponent<FooterType> = ({}) => {
//   let navigate: NavigateFunction = useNavigate();
//   return (
//     <div className={styles.footer}>
//       <div className={styles.content}>
//         <div className={styles.logoParent}>
//           <div className={styles.logo}>
//             <div className={styles.autoAddedFrame}>
//               <div className={styles.logo1}>
//                 <img
//                   className={styles.dreallogo12Icon}
//                   alt=""
//                   src="/dreallogo1-2-2.svg"
//                 />
//                 <div className={styles.thriftpay}>ThriftPay</div>
//               </div>
//             </div>
//             <div className={styles.yourGatewayTo}>
//               Your gateway to smarter savings. Join a community of savvy savers,
//               track your progress, and achieve your financial goals with ease.
//             </div>
//             <div className={styles.ogunHousingEstateOgunStatParent}>
//               <div className={styles.ogunHousingEstate}>
//                 Ogun Housing Estate, Ogun state, Nigeria.
//               </div>
//               <div className={styles.ogunHousingEstate}>+234 810 753 6436</div>
//               <div className={styles.ogunHousingEstate}>RC - 7827136</div>
//             </div>
//           </div>
//           <div className={styles.aboutUs}>About Us</div>
//           <div className={styles.aboutUs}>FAQs</div>
//           <div className={styles.aboutUs}>Contact Us</div>
//           <div className={styles.aboutUs}>Terms of Use</div>
//           <div className={styles.aboutUs} onClick={() => navigate("/privacy")}>
//             Privacy Policy{" "}
//           </div>
//           <div className={styles.linkedinParent}>
//             <img className={styles.linkedinIcon} alt="" src="/linkedin.svg" />
//             <img className={styles.linkedinIcon} alt="" src="/twitter.svg" />
//             <img className={styles.linkedinIcon} alt="" src="/facebook.svg" />
//             <img
//               className={styles.facebookIcon1}
//               alt=""
//               src="/facebook-1@2x.png"
//             />
//             <img className={styles.linkedinIcon} alt="" src="/facebook-2.svg" />
//           </div>
//         </div>
//       </div>
//       <img className={styles.dividerIcon} alt="" src="Divider.svg" />
//       <div className={styles.copyrightThriftPay2024Parent}>
//         <div className={styles.copyrightThrift}>
//           Copyright © Thrift Pay 2024 | ThriftPay by Jemivy Global Technology
//           LTD.
//         </div>
//         <div className={styles.plot11Block29Road29OgunParent}>
//           <div className={styles.ogunHousingEstate}>
//             Plot 11 Block 29 Road 29, Ogun Housing Estate, Ogun state, Nigeria.
//           </div>
//           <div className={styles.ogunHousingEstate}>+234 810 753 6436</div>
//         </div>
//       </div>
//     </div>
//   );

//   //   <div className="content4">
//   //     <div className="logo2">
//   //       <div className="auto-added-frame">
//   //         <div className="logo3">
//   //           <img
//   //             className="dreallogo1-2-icon2"
//   //             loading="lazy"
//   //             alt=""
//   //             src="/dreallogo1-2-2.svg"
//   //           />
//   //           <a className="thriftpay2">ThriftPay</a>
//   //         </div>
//   //       </div>
//   //       <div className="ogunHousingEstateOgunStatParent">
//   //         <div className="ogunHousingEstate">
//   //           Ogun Housing Estate, Ogun state, Nigeria.
//   //         </div>
//   //         <div className="ogunHousingEstate">+234 810 753 6436</div>
//   //         <div className="ogunHousingEstate">RC - 7827136</div>
//   //       </div>
//   //       <div className="your-gateway-to"></div>
//   //     </div>
//   //     <a className="about-us3">About Us</a>
//   //     <div className="faqs3">FAQs</div>
//   //     <div className="contact-us">Contact Us</div>
//   //     <div className="terms-of-use">Terms of Use</div>
//   //     <a className="privacy-policy">Privacy Policy</a>
//   //     <div className="footer-social">
//   //       <img
//   //         className="linkedin-icon"
//   //         loading="lazy"
//   //         alt=""
//   //         src="/linkedin.svg"
//   //       />
//   //       <img
//   //         className="twitter-icon"
//   //         loading="lazy"
//   //         alt=""
//   //         src="/twitter.svg"
//   //       />
//   //       <img
//   //         className="facebook-icon"
//   //         loading="lazy"
//   //         alt=""
//   //         src="/facebook.svg"
//   //       />
//   //       <img className="facebook-icon1" alt="" src="/facebook-1@2x.png" />
//   //       <img className="facebook-icon2" alt="" src="/facebook-2.svg" />
//   //     </div>
//   //   </div>
//   //   <img className="divider-icon2" alt="" src="/divider-2.svg" />
//   //   <div className="copyright-thrift">
//   //     Copyright © Thrift Pay 2024 | ThriftPay by Jemivy Global Technology LTD
//   //   </div>
//   // </footer>
//   // );
// };

// export default Footer;
