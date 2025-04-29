import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";
import frame1 from "../assets/aboutUs/frame1.svg";
import frame2 from "../assets/aboutUs/Frame2.svg";
import frame3 from "../assets/aboutUs/Frame3.svg";
import frame4 from "../assets/aboutUs/Frame4.svg";
// import aboutUsFrame from "../assets/aboutUs/abouts_group_frame.svg";
import aboutUsFrame1 from "../assets/aboutUs/abouts_group_frame1.png";
import aboutUsFrame2 from "../assets/aboutUs/abouts_group_frame2.png";
import logo from "..//assets/tnLogo.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const itemsSlider = [
  aboutUsFrame2,
  aboutUsFrame1,
  aboutUsFrame2,
  aboutUsFrame1,
];

const NewAboUtUs: FunctionComponent = () => {
  return (
    <div className={styles.newThriftnestAboutUs}>
      {/* <div className={styles.pixel7ProMockup}>
        <img className={styles.shadowIcon} alt="" src="shadow.png" />
        <img className={styles.mainIcon} alt="" src="main.png" />
        <img
          className={styles.pixel7ProMockupLabel}
          alt=""
          src="Pixel 7 Pro Mockup label.png"
        />
        <div className={styles.checkIconParent}>
          <div className={styles.checkIcon}>
            <img className={styles.checkIcon1} alt="" src="check.svg" />
          </div>
          <div className={styles.idVerificationSubmittedSuccParent}>
            <div className={styles.idVerificationSubmitted}>
              ID verification submitted successfully
            </div>
            <div className={styles.supportingText}>
              Your will get notified of verification status as soon as possible.
              This usually takes 24 hours or less
            </div>
          </div>
        </div>
      </div> */}
      <div className={styles.frameParent}>
        <div className={styles.downloadAppParent}>
          <div className={styles.downloadApp}>
            <div className={styles.left}>
              <div className={styles.frameGroup}>
                <div className={styles.frameChild} />
                <div className={styles.aboutUs}>ABOUT US</div>
              </div>
              <div className={styles.empoweringFinancialGrowthOParent}>
                <div className={styles.empoweringFinancialGrowthContainer}>
                  <span className={styles.empoweringFinancialGrowthContainer1}>
                    <span>{`Grow `}</span>
                    <span className={styles.financialGrowth}>Financially</span>
                    <span>, One Thrift at a Time.</span>
                  </span>
                </div>
                <div className={styles.atThrifnestWe}>
                  At ThrifNest, we are passionate about empowering individuals
                  to take control of their financial futures. We believe that
                  everyone deserves the opportunity to save smartly, grow their
                  wealth, and achieve their financial goals.
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rectangleDiv}>
            <Swiper
              spaceBetween={0}
              slidesPerView={"auto"}
              loop={true}
              speed={4000} // 🛠️ 1 second transition speed (1000ms)
              // loop={true}
              modules={[Autoplay]}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              freeMode={true}
              grabCursor={true}
              allowTouchMove={false}
            >
              {itemsSlider.map((src, i) => (
                <SwiperSlide
                  key={i}
                  style={{ width: "auto", padding: "0 20px" }} // control spacing
                >
                  <img src={src} alt={`Icon ${i}`} />
                </SwiperSlide>
              ))}
              {/* <SwiperSlide>
                <img alt="" src={aboutUsFrame1} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={aboutUsFrame2} />
              </SwiperSlide>
              <SwiperSlide>
                <img alt="" src={aboutUsFrame1} />
              </SwiperSlide> */}
            </Swiper>
          </div>

          {/* <img className={styles.rectangleDiv} alt="" src={aboutUsFrame} /> */}

          <div className={styles.container1}>
            <div className={styles.containerChild} />
            <div className={styles.content}>
              <div className={styles.logoContainer}>
                <img className={styles.logoIcon} alt="" src={logo} />
              </div>
              <div className={styles.tagline}>
                Inspired by tradition. Driven by innovation.
              </div>
            </div>
            <div className={styles.containerChild} />
          </div>
          <div className={styles.frameWrapper4}>
            <div className={styles.frameParent48}>
              <div className={styles.ourMissionParent}>
                <div className={styles.ourMission}>Our Mission</div>
                <div className={styles.toMakeSavings}>
                  To make savings a shared and rewarding experience by providing
                  trusted tools that empower people and communities to build
                  financial security together.
                </div>
              </div>
              <div className={styles.ourMissionParent}>
                <div className={styles.ourMission}>Our Vision</div>
                <div className={styles.toMakeSavings}>
                  To become Africa’s leading digital financial wellbeing
                  platform—transforming the way people save, collaborate, and
                  achieve their financial goals.
                </div>
              </div>
            </div>
          </div>
          <div className={styles.container2}>
            <div className={styles.containerInner} />
            <div className={styles.textBlock}>
              <div className={styles.title}>Our story</div>
              <div className={styles.bodyText}>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  <span className={styles.weGrewUp}>
                    We grew up seeing thrift savings everywhere “
                  </span>
                  <span className={styles.ajo}>ajo</span>
                  <span className={styles.weGrewUp}>,” “</span>
                  <span className={styles.ajo}>esusu</span>
                  <span>
                    ,” or just the local thrift group down the street. It was
                    how families supported each other, how friends reached their
                    goals, and how communities built trust through shared
                    contributions.
                  </span>
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>&nbsp;</p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  But we also saw the struggles.
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>&nbsp;</p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  <span>
                    Late payments. Lost records. Misunderstandings. A lot of
                    stress on one person ”
                  </span>
                  <span className={styles.ajo}>The Coordinator”,</span>
                  <span> juggling everything with notebooks and hope.</span>
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>&nbsp;</p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  So we thought… there has to be a better way.
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>&nbsp;</p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  That’s what led us here—to build a platform that keeps the
                  heart of traditional thrift saving alive: community, trust,
                  support—but with the clarity, ease, and security that
                  technology can bring.
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>&nbsp;</p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  This isn’t just another app. It’s a new way to save—smarter,
                  together.
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>&nbsp;</p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  From savings plans that fit your goals to rewards that
                  motivate thrift groups to stay consistent, everything we build
                  is designed to help you take control of your financial
                  journey—whether you’re saving solo or leading a group.
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>&nbsp;</p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  And we’re only getting started.
                </p>
                <p className={styles.weGrewUpSeeingThriftSavin}>
                  Thanks for being on this journey with us.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.ourCoreValuesParent}>
            <div className={styles.ourCoreValuesContainer}>
              <p className={styles.weGrewUpSeeingThriftSavin}>Our Core</p>
              <p className={styles.weGrewUpSeeingThriftSavin}>Values</p>
            </div>
            <div className={styles.frameParent49}>
              <div className={styles.frameParent50}>
                <div className={styles.trustTransparencyParent}>
                  <div
                    className={styles.trustTransparency}
                  >{`Trust & Transparency`}</div>
                  <div className={styles.everythingWeBuild}>
                    Everything we build is rooted in clarity and honesty
                  </div>
                  <img className={styles.frameIcon1} alt="" src={frame1} />
                </div>
                <div className={styles.communityFirstParent}>
                  <div className={styles.trustTransparency}>
                    Community First
                  </div>
                  <div className={styles.everythingWeBuild}>
                    We believe in collective growth and shared success.
                  </div>
                  <img className={styles.frameIcon2} alt="" src={frame4} />
                </div>
              </div>
              <div className={styles.frameParent50}>
                <div className={styles.communityFirstParent}>
                  <div className={styles.trustTransparency}>
                    Rewarding Discipline
                  </div>
                  <div className={styles.everythingWeBuild}>
                    We celebrate consistency and smart money habits.
                  </div>
                  <img className={styles.frameIcon3} alt="" src={frame3} />
                </div>
                <div className={styles.trustTransparencyParent}>
                  <div className={styles.trustTransparency}>
                    Innovation with Purpose
                  </div>
                  <div className={styles.everythingWeBuild}>
                    We use technology to solve real financial problems.
                  </div>
                  <img className={styles.frameIcon4} alt="" src={frame2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAboUtUs;
