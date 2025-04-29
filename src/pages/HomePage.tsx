import { FunctionComponent, useEffect } from "react";
import styles from "./HomePage.module.css";
import FrameComponent1 from "../components/FrameComponent1";
import Testimonials from "../components/Testimonials";
import ThriftGroups from "../components/ThriftGroups";
import basicPhonePlan from "../assets/basic_plan.svg";
import guyWithPhone from "../assets/guy_with_phone.svg";
import ladyWithPhone from "../assets/lady_with_phone.svg";
import image70 from "../assets/image 70.svg";
import image72 from "../assets/image 72.svg";
import image73 from "../assets/image 73.svg";
import shadowOverlayIcon from "../assets/Shadow Overlay.svg";
import frame3 from "../assets/Frame3.svg";
import frame4 from "../assets/Frame4.svg";
import frame5 from "../assets/Frame5.svg";
import stepImage from "../assets/StepImage.svg";
import stepImage1 from "../assets/StepImage1.svg";
import stepImage2 from "../assets/Stepmage2.svg";
import stepImage3 from "../assets/StepImage3.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HomePage: FunctionComponent = () => {
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

  const [ref1, inView1] = useInView({
    threshold: 0.4, // trigger when 40% is visible
  });

  const controls1 = useAnimation();

  useEffect(() => {
    if (inView1) {
      controls1.start({ opacity: 1, y: 0 });
    } else {
      controls1.start({ opacity: 0, y: 100 });
    }
  }, [inView1, controls]);

  const [ref2, inView2] = useInView({
    threshold: 0.4, // trigger when 40% is visible
  });

  const controls2 = useAnimation();

  useEffect(() => {
    if (inView2) {
      controls2.start({ opacity: 1, y: 0 });
    } else {
      controls2.start({ opacity: 0, y: 100 });
    }
  }, [inView2, controls2]);

  const controls3 = useAnimation();
  const [ref3, inView3] = useInView({
    threshold: 0.4, // 40% of the div needs to be in view
  });

  useEffect(() => {
    if (inView3) {
      controls3.start({ opacity: 1, x: 0 });
    } else {
      controls3.start({ opacity: 0, x: -100 }); // slide left and disappear
    }
  }, [inView3, controls3]);

  return (
    <div className={styles.newThriftnestNewHeroSectio}>
      {/* <div className={styles.noiseTexture} /> */}
      <div className={styles.frameParent}>
        <div className={styles.ellipseParent}>
          <div className={styles.frameChild} />
          <div className={styles.frameItem} />
          <div className={styles.heroText}>
            <div className={styles.heroTextInner}>
              <div className={styles.saveSmarterTogetherParent}>
                <motion.div
                  ref={ref1}
                  animate={controls1}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className={styles.saveSmarterTogether}>
                    Save Smarter, Together
                  </div>
                </motion.div>

                <motion.div
                  ref={ref2}
                  animate={controls2}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.8,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className={styles.joinThousandsOf}>
                    Join thousands of savers achieving their financial goals
                    with ThriftNest
                  </div>
                </motion.div>
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>Get The App</div>
            </div>
          </div>
          <motion.div
            ref={ref3}
            animate={controls3}
            initial={{ opacity: 0, x: -100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.8,
              ease: "easeOut",
            }}
            // viewport={{ once: true, amount: 0.5 }}
          >
            <img className={styles.icon} alt="" src={guyWithPhone} />
          </motion.div>
          <motion.div
            ref={ref3}
            animate={controls3}
            initial={{ opacity: 0, x: -100 }}
            // whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              // delay: 0.8,
              ease: "easeOut",
            }}
            // viewport={{ once: true, amount: 0.5 }}
          >
            <img
              className={styles.expressiveAfricanAmericanWoIcon}
              alt=""
              src={ladyWithPhone}
            />
          </motion.div>

          <div className={styles.frameInner} />
          <div className={styles.ellipseDiv} />
          <motion.div
            ref={ref2}
            animate={controls2}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.2,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img className={styles.image72Icon} alt="" src={image72} />
          </motion.div>

          <motion.div
            ref={ref2}
            animate={controls2}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.8,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img className={styles.image73Icon} alt="" src={image73} />
          </motion.div>

          <div className={styles.frameDiv} />
          <img
            className={styles.shadowOverlayIcon}
            alt=""
            src={shadowOverlayIcon}
          />

          <motion.div
            ref={ref2}
            animate={controls2}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 1.95,
              ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <img className={styles.image70Icon} alt="" src={image70} />
          </motion.div>
        </div>

        {/* <div className={styles.heroSection}>
          <div className={styles.heroSection}>
            <div className={styles.heroSectionChild} />
            <div className={styles.heroSectionItem} />
            <div className={styles.heroText}>
              <div className={styles.heroTextContainer}>
                <div className={styles.heroTextContent}>
                  <div className={styles.mainHeading}>
                    Save Smarter, Together
                  </div>
                  <div className={styles.subheading}>
                    Join thousands of savers achieving their financial goals
                    with ThriftNest
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <div className={styles.button1}>Get The App</div>
              </div>
            </div>
            <img className={styles.icon} alt="" src={guyWithPhone} />
            <img
              className={styles.expressiveAfricanAmericanWoIcon}
              alt=""
              src={ladyWithPhone}
            />
            <div className={styles.heroSectionInner} />
            <div className={styles.ellipseDiv} />
            <img className={styles.appScreenshotIcon} alt="" src={image72} />
            <img className={styles.appScreenshotIcon1} alt="" src={image73} />
            <div className={styles.taglineContainer} />

            <img className={styles.phoneImageIcon} alt="" src={image70} />
          </div>
          <img
            className={styles.shadowOverlayIcon}
            alt=""
            src={shadowOverlayIcon}
          />
        </div> */}

        <div className={styles.frameParent1}>
          <div className={styles.iphone15ProBlackTitaniumMWrapper}>
            <motion.div
              ref={ref}
              animate={controls}
              initial={{ opacity: 0, y: 1000 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
              }}
              viewport={{ once: true, amount: 0.5 }}
              className={styles.iphone15ProBlackTitaniumM}
            >
              <img
                className={styles.iphone15ProBlackTitaniumM1}
                alt=""
                src={basicPhonePlan}
              />
            </motion.div>
            {/* <div className={styles.iphone15ProBlackTitaniumM}> */}
            {/* <img className={styles.shadowIcon} alt="" src="shadow.png" /> */}
            {/* <img className={styles.mainIcon} alt="" src="main.png" /> */}
            {/* </div> */}
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.frameParent3}>
              <div className={styles.frameChild4} />
              <div className={styles.aboutUs}>ABOUT US</div>
            </div>
            <div className={styles.growYourWealthAndAchieveParent}>
              <div className={styles.growYourWealth}>
                Grow your wealth, and achieve your financial goals.
              </div>
              <div className={styles.atThrifnestWe}>
                At ThrifNest, we are passionate about empowering individuals to
                take control of their financial futures. We believe that
                everyone deserves the opportunity to save smartly, grow their
                wealth, and achieve their financial goals. With a commitment to
                transparency, community, and innovation, we've built a platform
                that redefines the way people approach Thrift saving.
              </div>
            </div>
            <div className={styles.button2}>
              <div className={styles.button1}>Learn More</div>
              <img className={styles.icons3} alt="" src="Icons.svg" />
            </div>
          </div>
        </div>
        <div className={styles.whyChooseUs}>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.frameChild4} />
                {/* <div className={styles.whyChooseUs1}>Why choose Us?</div> */}
              </div>
              <div className={styles.whyThriftnest}>Why ThriftNest?</div>
            </div>
            <div className={styles.thriftnestIsYour}>
              ThriftNest is your trusted partner for smarter savings. Join our
              community of like-minded savers and explore tailored Thrift plans
              designed just for you. Let's help you achieve your financial
              goals!
            </div>
          </div>
          <div className={styles.frameParent7}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent8}>
                <img className={styles.frameIcon} alt="" src={frame3} />
                <div className={styles.saveSmarterTogetherParent}>
                  <div className={styles.tailoredThriftPlans}>
                    Tailored Thrift Plans
                  </div>
                  <div className={styles.ourThriftPlans}>
                    Our Thrift plans are meticulously designed to match your
                    income level and financial aspirations. Whether you're
                    saving for a dream vacation, a new home, or simply building
                    a rainy-day fund, ThriftPay offers plans that suit your
                    specific needs.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent8}>
                <img className={styles.frameIcon} alt="" src={frame4} />
                <div className={styles.saveSmarterTogetherParent}>
                  <div className={styles.realTimeTransparency}>
                    Real-time Transparency
                  </div>
                  <div className={styles.stayInformedEvery}>
                    Stay informed every step of the way with our transparent
                    transaction system. Easily track your thrift contributions
                    and payouts in real-time, directly from your mobile device.
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.frameParent8}>
                <img className={styles.frameIcon} alt="" src={frame5} />
                <div className={styles.saveSmarterTogetherParent}>
                  <div className={styles.securePlatform}>Secure Platform</div>
                  <div className={styles.ourThriftPlans}>
                    Your security is our priority. Every thrift saver undergoes
                    thorough verification to ensure compliance and trust. We
                    assess creditworthiness, giving you peace of mind as you
                    save.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.stepsSection}>
          <div className={styles.stepsHeadingContainer}>
            <div className={styles.stepsHeading}>
              Take charge of your financial future with a few simple steps
            </div>
            <div className={styles.stepsSubheading}>
              Let’s guide you towards a brighter, wealthier tomorrow.
            </div>
          </div>
          <div className={styles.stepsContentContainer}>
            <div className={styles.stepsRow}>
              <div className={styles.stepsRow1}>
                <div className={styles.stepContainer}>
                  <img
                    className={styles.spiral2Icon}
                    alt=""
                    src="Spiral 2.svg"
                  />
                  <img
                    className={styles.stepImageIcon}
                    alt=""
                    src={stepImage}
                  />
                  <div className={styles.stepIcon} />
                  <div className={styles.div}>
                    <div className={styles.stepTitle}>Sign Up</div>
                    <div className={styles.stepDescription}>
                      Download our mobile app, Create your account and complete
                      KYC.
                    </div>
                  </div>
                </div>
                <div className={styles.stepContainer1}>
                  {/* <img className={styles.groupIcon} alt="" src={stepImage3} />
                  <img
                    className={styles.spiral2Icon}
                    alt=""
                    src="Spiral 2.svg"
                  />
                  <div className={styles.stepIcon1}>
                    <div className={styles.thriftplanCard}>
                      <div className={styles.basicThriftPlanIWrapper}>
                        <div className={styles.basicThriftPlan}>
                          Basic Thrift Plan I
                        </div>
                      </div>
                      <div className={styles.info2Parent}>
                        <div className={styles.info2}>
                          <img
                            className={styles.icons}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.parent}>
                            <div className={styles.months}>₦10,000</div>
                            <div className={styles.perMember}>Per Member</div>
                          </div>
                        </div>
                        <div className={styles.info2}>
                          <img
                            className={styles.icons}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.parent}>
                            <div className={styles.months}>10 Months</div>
                            <div className={styles.perMember}>Duration</div>
                          </div>
                        </div>
                        <div className={styles.info2}>
                          <img
                            className={styles.icons}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.parent}>
                            <div className={styles.months}>₦500,000</div>
                            <div className={styles.perMember}>Total Remit</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressBarChild} />
                          <div className={styles.progressBarItem} />
                        </div>
                        <div className={styles.months}>50%</div>
                      </div>
                      <div className={styles.avatarsParent}>
                        <img
                          className={styles.avatarsIcon}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.frameParent}>
                          <div className={styles.olawaleDamilareWrapper}>
                            <div className={styles.months}>
                              Olawale Damilare
                            </div>
                          </div>
                          <div className={styles.perMember}>
                            Thrift Coordinator
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.thriftplanCard1}>
                      <div className={styles.basicThriftPlanIContainer}>
                        <div className={styles.basicThriftPlan}>
                          Basic Thrift Plan I
                        </div>
                      </div>
                      <div className={styles.info2Group}>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.months}>₦10,000</div>
                            <div className={styles.perMember}>Per Member</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.months}>10 Months</div>
                            <div className={styles.perMember}>Duration</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.months}>2/10</div>
                            <div className={styles.perMember}>Filled Slots</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameGroup}>
                        <div className={styles.startsOnJanuary312023Wrapper}>
                          <div className={styles.startsOnJanuary}>
                            Starts On January 31, 2025
                          </div>
                        </div>
                        <div className={styles.daysToGo}>28 Days to Go</div>
                      </div>
                    </div>
                  </div> */}
                  <img
                    className={styles.stepImageIcon1}
                    alt=""
                    src={stepImage3}
                  />
                  <div className={styles.stepContainerChild} />
                  <div className={styles.stepTitle1}>
                    <div className={styles.stepTitle}>Discover Plans</div>
                    <div className={styles.stepDescription}>
                      Choose from a variety of Thrift plans based on your income
                      level.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.stepsRow}>
              <div className={styles.stepsRow1}>
                <div className={styles.stepContainer2}>
                  <div className={styles.stepIcon2} />
                  <img className={styles.groupIcon1} alt="" src="Group.svg" />
                  <img
                    className={styles.stepImageIcon2}
                    alt=""
                    src={stepImage2}
                  />
                  <div className={styles.stepIcon3} />
                  <div className={styles.stepTitle3}>
                    <div className={styles.stepTitle}>Join a Plan</div>
                    <div className={styles.stepDescription}>
                      Join a plan that suits your financial objectives.
                    </div>
                  </div>
                </div>
                <div className={styles.stepContainer3}>
                  <div className={styles.stepTitle5}>
                    <div className={styles.stepTitle}>Track Progress</div>
                    <div className={styles.stepDescription}>
                      Monitor your savings, payouts, and overall progress.
                    </div>
                  </div>
                  <img className={styles.depthIcon} alt="" src="Depth.svg" />
                  <img
                    className={styles.stepImageIcon3}
                    alt=""
                    src={stepImage1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <ThriftGroups />
        <Testimonials />
        <FrameComponent1 />
      </div>
    </div>
  );
};

export default HomePage;
