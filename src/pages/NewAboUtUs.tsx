import { FunctionComponent } from "react";
import styles from "./AboutUs.module.css";
import frame1 from "../assets/aboutUs/frame1.svg";
import frame2 from "../assets/aboutUs/Frame2.svg";
import frame3 from "../assets/aboutUs/Frame3.svg";
import frame4 from "../assets/aboutUs/Frame4.svg";
import logo from "..//assets/tnLogo.svg";

const NewAboUtUs: FunctionComponent = () => {
  return (
    <div className={styles.newThriftnestAboutUs}>
      <div className={styles.pixel7ProMockup}>
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
      </div>
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
                    <span>{`Empowering `}</span>
                    <span className={styles.financialGrowth}>
                      Financial Growth
                    </span>
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
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.frameParent1}>
                <img className={styles.frameItem} alt="" src={frame1} />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="Frame 2147225881.png"
                />
              </div>
              <div className={styles.frameParent2}>
                <div className={styles.frameWrapper}>
                  <div className={styles.freeMockupOfFemaleHandHolParent}>
                    <img
                      className={styles.freeMockupOfFemaleHandHol}
                      alt=""
                      src="Free mockup of female hand holding iPhone 14 Pro (Mockuuups Studio).png"
                    />
                    <div className={styles.thriftplanCard}>
                      <div className={styles.basicThriftPlanIParent}>
                        <div className={styles.basicThriftPlan}>
                          Basic Thrift Plan I
                        </div>
                        <div className={styles.startDateParent}>
                          <div className={styles.startDate}>Start Date:</div>
                          <div className={styles.july142023}>July 14, 2023</div>
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
                            <div className={styles.div}>₦10,000</div>
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
                            <div className={styles.div}>10 Months</div>
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
                            <div className={styles.div}>₦500,000</div>
                            <div className={styles.perMember}>Total Remit</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressBarChild} />
                          <div className={styles.progressBarItem} />
                        </div>
                        <div className={styles.div}>50%</div>
                      </div>
                      <div className={styles.avatarsParent}>
                        <img
                          className={styles.avatarsIcon}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilareParent}>
                            <div className={styles.olawaleDamilare}>
                              Olawale Damilare
                            </div>
                            <div className={styles.johndoeexamplecom}>
                              johndoe@example.com
                            </div>
                          </div>
                          <div className={styles.thriftCoordinator}>
                            Thrift Coordinator
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.thriftplanCard1}>
                      <div className={styles.basicThriftPlanIWrapper}>
                        <div className={styles.basicThriftPlan1}>
                          School Fees Thrift
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
                            <div className={styles.johnDoe}>₦10,000</div>
                            <div className={styles.filledSlots}>Per Member</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>10 Months</div>
                            <div className={styles.filledSlots}>Duration</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>2/10</div>
                            <div className={styles.filledSlots}>
                              Filled Slots
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.startsOnJanuary312023Wrapper}>
                          <div className={styles.startsOnJanuary}>
                            Starts On January 31, 2023
                          </div>
                        </div>
                        <div className={styles.daysToGo}>28 Days to Go</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="Frame 2147225880.png"
                />
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.labelTextParent}>
                      <div className={styles.labelText}>RECENT ACTIVITIES</div>
                      <div className={styles.labelText1}>See All</div>
                    </div>
                    <div className={styles.plan1Parent}>
                      <div className={styles.plan1}>
                        <div className={styles.today}>TODAY</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsWrapper}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Payout
                              </div>
                            </div>
                            <div className={styles.div5}>-₦100,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Chinwe Cynthia
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan2}>
                        <div className={styles.dec302023}>DEC 30, 2023</div>
                        <div className={styles.frameParent9}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Blessing Badare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan3}>
                        <div className={styles.today}>DEC 28, 2023</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Adeleke Omowunmi
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberReceivingPayment}>
                    <div className={styles.memberReceivingPayoutParent}>
                      <div className={styles.memberReceivingPayout}>
                        Member Receiving Payout
                      </div>
                      <div className={styles.avatarsGroup}>
                        <img
                          className={styles.avatarsIcon1}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilare3}>
                            Olawale Damilare
                          </div>
                          <div className={styles.johndoeexamplecom1}>
                            johndoe@example.com
                          </div>
                        </div>
                        <div className={styles.bagde}>
                          <div className={styles.startsOnJanuary}>
                            Pay out Received
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.recentActivities}>
                    <div className={styles.basicThriftPlanIWrapper}>
                      <div className={styles.heading}>
                        Members Contribution Status
                      </div>
                    </div>
                    <div className={styles.thriftMemberParent}>
                      <div className={styles.thriftMember}>
                        <div className={styles.avatarsContainer}>
                          <img
                            className={styles.avatarsIcon2}
                            alt=""
                            src="Avatars.png"
                          />
                          <div className={styles.johnDoeWrapper}>
                            <div className={styles.johnDoe}>
                              Olawale Damilare
                            </div>
                          </div>
                        </div>
                        <div className={styles.bagde1}>
                          <div className={styles.startsOnJanuary}>Paid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd}>FL</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Frank Lampard</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars1}>
                            <div className={styles.jd}>JD</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Jane Doe</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd2}>AM</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Ahmed Musa</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars3}>
                            <div className={styles.jd}>OJ</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Olawale Jumoke</div>
                          </div>
                        </div>
                        <div className={styles.bagde5}>
                          <div className={styles.startsOnJanuary}>Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent12}>
              <div className={styles.frameParent13}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="Frame 2147225879.png"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="Frame 2147225881.png"
                />
              </div>
              <div className={styles.frameParent14}>
                <div className={styles.frameWrapper}>
                  <div className={styles.freeMockupOfFemaleHandHolParent}>
                    <img
                      className={styles.freeMockupOfFemaleHandHol}
                      alt=""
                      src="Free mockup of female hand holding iPhone 14 Pro (Mockuuups Studio).png"
                    />
                    <div className={styles.thriftplanCard}>
                      <div className={styles.basicThriftPlanIParent}>
                        <div className={styles.basicThriftPlan}>
                          Basic Thrift Plan I
                        </div>
                        <div className={styles.startDateParent}>
                          <div className={styles.startDate}>Start Date:</div>
                          <div className={styles.july142023}>July 14, 2023</div>
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
                            <div className={styles.div}>₦10,000</div>
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
                            <div className={styles.div}>10 Months</div>
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
                            <div className={styles.div}>₦500,000</div>
                            <div className={styles.perMember}>Total Remit</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressBarChild} />
                          <div className={styles.progressBarItem} />
                        </div>
                        <div className={styles.div}>50%</div>
                      </div>
                      <div className={styles.avatarsParent}>
                        <img
                          className={styles.avatarsIcon}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilareParent}>
                            <div className={styles.olawaleDamilare}>
                              Olawale Damilare
                            </div>
                            <div className={styles.johndoeexamplecom}>
                              johndoe@example.com
                            </div>
                          </div>
                          <div className={styles.thriftCoordinator}>
                            Thrift Coordinator
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.thriftplanCard1}>
                      <div className={styles.basicThriftPlanIWrapper}>
                        <div className={styles.basicThriftPlan1}>
                          School Fees Thrift
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
                            <div className={styles.johnDoe}>₦10,000</div>
                            <div className={styles.filledSlots}>Per Member</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>10 Months</div>
                            <div className={styles.filledSlots}>Duration</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>2/10</div>
                            <div className={styles.filledSlots}>
                              Filled Slots
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.startsOnJanuary312023Wrapper}>
                          <div className={styles.startsOnJanuary}>
                            Starts On January 31, 2023
                          </div>
                        </div>
                        <div className={styles.daysToGo}>28 Days to Go</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="Frame 2147225880.png"
                />
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.labelTextParent}>
                      <div className={styles.labelText}>RECENT ACTIVITIES</div>
                      <div className={styles.labelText1}>See All</div>
                    </div>
                    <div className={styles.plan1Parent}>
                      <div className={styles.plan1}>
                        <div className={styles.today}>TODAY</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsWrapper}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Payout
                              </div>
                            </div>
                            <div className={styles.div5}>-₦100,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Chinwe Cynthia
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan2}>
                        <div className={styles.dec302023}>DEC 30, 2023</div>
                        <div className={styles.frameParent9}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Blessing Badare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan3}>
                        <div className={styles.today}>DEC 28, 2023</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Adeleke Omowunmi
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberReceivingPayment}>
                    <div className={styles.memberReceivingPayoutParent}>
                      <div className={styles.memberReceivingPayout}>
                        Member Receiving Payout
                      </div>
                      <div className={styles.avatarsGroup}>
                        <img
                          className={styles.avatarsIcon1}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilare3}>
                            Olawale Damilare
                          </div>
                          <div className={styles.johndoeexamplecom1}>
                            johndoe@example.com
                          </div>
                        </div>
                        <div className={styles.bagde}>
                          <div className={styles.startsOnJanuary}>
                            Pay out Received
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.recentActivities}>
                    <div className={styles.basicThriftPlanIWrapper}>
                      <div className={styles.heading}>
                        Members Contribution Status
                      </div>
                    </div>
                    <div className={styles.thriftMemberParent}>
                      <div className={styles.thriftMember}>
                        <div className={styles.avatarsContainer}>
                          <img
                            className={styles.avatarsIcon2}
                            alt=""
                            src="Avatars.png"
                          />
                          <div className={styles.johnDoeWrapper}>
                            <div className={styles.johnDoe}>
                              Olawale Damilare
                            </div>
                          </div>
                        </div>
                        <div className={styles.bagde1}>
                          <div className={styles.startsOnJanuary}>Paid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd}>FL</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Frank Lampard</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars1}>
                            <div className={styles.jd}>JD</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Jane Doe</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd2}>AM</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Ahmed Musa</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars3}>
                            <div className={styles.jd}>OJ</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Olawale Jumoke</div>
                          </div>
                        </div>
                        <div className={styles.bagde5}>
                          <div className={styles.startsOnJanuary}>Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent24}>
              <div className={styles.frameParent25}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="Frame 2147225879.png"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="Frame 2147225881.png"
                />
              </div>
              <div className={styles.frameParent14}>
                <div className={styles.frameWrapper}>
                  <div className={styles.freeMockupOfFemaleHandHolParent}>
                    <img
                      className={styles.freeMockupOfFemaleHandHol}
                      alt=""
                      src="Free mockup of female hand holding iPhone 14 Pro (Mockuuups Studio).png"
                    />
                    <div className={styles.thriftplanCard}>
                      <div className={styles.basicThriftPlanIParent}>
                        <div className={styles.basicThriftPlan}>
                          Basic Thrift Plan I
                        </div>
                        <div className={styles.startDateParent}>
                          <div className={styles.startDate}>Start Date:</div>
                          <div className={styles.july142023}>July 14, 2023</div>
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
                            <div className={styles.div}>₦10,000</div>
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
                            <div className={styles.div}>10 Months</div>
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
                            <div className={styles.div}>₦500,000</div>
                            <div className={styles.perMember}>Total Remit</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressBarChild} />
                          <div className={styles.progressBarItem} />
                        </div>
                        <div className={styles.div}>50%</div>
                      </div>
                      <div className={styles.avatarsParent}>
                        <img
                          className={styles.avatarsIcon}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilareParent}>
                            <div className={styles.olawaleDamilare}>
                              Olawale Damilare
                            </div>
                            <div className={styles.johndoeexamplecom}>
                              johndoe@example.com
                            </div>
                          </div>
                          <div className={styles.thriftCoordinator}>
                            Thrift Coordinator
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.thriftplanCard1}>
                      <div className={styles.basicThriftPlanIWrapper}>
                        <div className={styles.basicThriftPlan1}>
                          School Fees Thrift
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
                            <div className={styles.johnDoe}>₦10,000</div>
                            <div className={styles.filledSlots}>Per Member</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>10 Months</div>
                            <div className={styles.filledSlots}>Duration</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>2/10</div>
                            <div className={styles.filledSlots}>
                              Filled Slots
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.startsOnJanuary312023Wrapper}>
                          <div className={styles.startsOnJanuary}>
                            Starts On January 31, 2023
                          </div>
                        </div>
                        <div className={styles.daysToGo}>28 Days to Go</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="Frame 2147225880.png"
                />
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.labelTextParent}>
                      <div className={styles.labelText}>RECENT ACTIVITIES</div>
                      <div className={styles.labelText1}>See All</div>
                    </div>
                    <div className={styles.plan1Parent}>
                      <div className={styles.plan1}>
                        <div className={styles.today}>TODAY</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsWrapper}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Payout
                              </div>
                            </div>
                            <div className={styles.div5}>-₦100,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Chinwe Cynthia
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan2}>
                        <div className={styles.dec302023}>DEC 30, 2023</div>
                        <div className={styles.frameParent9}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Blessing Badare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan3}>
                        <div className={styles.today}>DEC 28, 2023</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Adeleke Omowunmi
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberReceivingPayment}>
                    <div className={styles.memberReceivingPayoutParent}>
                      <div className={styles.memberReceivingPayout}>
                        Member Receiving Payout
                      </div>
                      <div className={styles.avatarsGroup}>
                        <img
                          className={styles.avatarsIcon1}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilare3}>
                            Olawale Damilare
                          </div>
                          <div className={styles.johndoeexamplecom1}>
                            johndoe@example.com
                          </div>
                        </div>
                        <div className={styles.bagde}>
                          <div className={styles.startsOnJanuary}>
                            Pay out Received
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.recentActivities}>
                    <div className={styles.basicThriftPlanIWrapper}>
                      <div className={styles.heading}>
                        Members Contribution Status
                      </div>
                    </div>
                    <div className={styles.thriftMemberParent}>
                      <div className={styles.thriftMember}>
                        <div className={styles.avatarsContainer}>
                          <img
                            className={styles.avatarsIcon2}
                            alt=""
                            src="Avatars.png"
                          />
                          <div className={styles.johnDoeWrapper}>
                            <div className={styles.johnDoe}>
                              Olawale Damilare
                            </div>
                          </div>
                        </div>
                        <div className={styles.bagde1}>
                          <div className={styles.startsOnJanuary}>Paid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd}>FL</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Frank Lampard</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars1}>
                            <div className={styles.jd}>JD</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Jane Doe</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd2}>AM</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Ahmed Musa</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars3}>
                            <div className={styles.jd}>OJ</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Olawale Jumoke</div>
                          </div>
                        </div>
                        <div className={styles.bagde5}>
                          <div className={styles.startsOnJanuary}>Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent36}>
              <div className={styles.frameParent25}>
                <img
                  className={styles.frameItem}
                  alt=""
                  src="Frame 2147225879.png"
                />
                <img
                  className={styles.frameInner}
                  alt=""
                  src="Frame 2147225881.png"
                />
              </div>
              <div className={styles.frameParent38}>
                <div className={styles.frameWrapper}>
                  <div className={styles.freeMockupOfFemaleHandHolParent}>
                    <img
                      className={styles.freeMockupOfFemaleHandHol}
                      alt=""
                      src="Free mockup of female hand holding iPhone 14 Pro (Mockuuups Studio).png"
                    />
                    <div className={styles.thriftplanCard}>
                      <div className={styles.basicThriftPlanIParent}>
                        <div className={styles.basicThriftPlan}>
                          Basic Thrift Plan I
                        </div>
                        <div className={styles.startDateParent}>
                          <div className={styles.startDate}>Start Date:</div>
                          <div className={styles.july142023}>July 14, 2023</div>
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
                            <div className={styles.div}>₦10,000</div>
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
                            <div className={styles.div}>10 Months</div>
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
                            <div className={styles.div}>₦500,000</div>
                            <div className={styles.perMember}>Total Remit</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.progress}>
                        <div className={styles.progressBar}>
                          <div className={styles.progressBarChild} />
                          <div className={styles.progressBarItem} />
                        </div>
                        <div className={styles.div}>50%</div>
                      </div>
                      <div className={styles.avatarsParent}>
                        <img
                          className={styles.avatarsIcon}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilareParent}>
                            <div className={styles.olawaleDamilare}>
                              Olawale Damilare
                            </div>
                            <div className={styles.johndoeexamplecom}>
                              johndoe@example.com
                            </div>
                          </div>
                          <div className={styles.thriftCoordinator}>
                            Thrift Coordinator
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.thriftplanCard1}>
                      <div className={styles.basicThriftPlanIWrapper}>
                        <div className={styles.basicThriftPlan1}>
                          School Fees Thrift
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
                            <div className={styles.johnDoe}>₦10,000</div>
                            <div className={styles.filledSlots}>Per Member</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>10 Months</div>
                            <div className={styles.filledSlots}>Duration</div>
                          </div>
                        </div>
                        <div className={styles.info21}>
                          <img
                            className={styles.icons3}
                            alt=""
                            src="Icons.svg"
                          />
                          <div className={styles.container}>
                            <div className={styles.johnDoe}>2/10</div>
                            <div className={styles.filledSlots}>
                              Filled Slots
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.frameParent4}>
                        <div className={styles.startsOnJanuary312023Wrapper}>
                          <div className={styles.startsOnJanuary}>
                            Starts On January 31, 2023
                          </div>
                        </div>
                        <div className={styles.daysToGo}>28 Days to Go</div>
                      </div>
                    </div>
                  </div>
                </div>
                <img
                  className={styles.frameIcon}
                  alt=""
                  src="Frame 2147225880.png"
                />
                <div className={styles.frameParent5}>
                  <div className={styles.frameParent6}>
                    <div className={styles.labelTextParent}>
                      <div className={styles.labelText}>RECENT ACTIVITIES</div>
                      <div className={styles.labelText1}>See All</div>
                    </div>
                    <div className={styles.plan1Parent}>
                      <div className={styles.plan1}>
                        <div className={styles.today}>TODAY</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsWrapper}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Payout
                              </div>
                            </div>
                            <div className={styles.div5}>-₦100,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Chinwe Cynthia
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan2}>
                        <div className={styles.dec302023}>DEC 30, 2023</div>
                        <div className={styles.frameParent9}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Blessing Badare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.plan3}>
                        <div className={styles.today}>DEC 28, 2023</div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Olawale Damilare
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                        <div className={styles.frameParent7}>
                          <div className={styles.iconsContainer}>
                            <img
                              className={styles.icons6}
                              alt=""
                              src="Icons.svg"
                            />
                          </div>
                          <div className={styles.info2Container}>
                            <div className={styles.info22}>
                              <div className={styles.chinweCynthia}>
                                Adeleke Omowunmi
                              </div>
                              <div className={styles.slot4Payout}>
                                Slot 4 Contribution
                              </div>
                            </div>
                            <div className={styles.div6}>+₦20,000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.memberReceivingPayment}>
                    <div className={styles.memberReceivingPayoutParent}>
                      <div className={styles.memberReceivingPayout}>
                        Member Receiving Payout
                      </div>
                      <div className={styles.avatarsGroup}>
                        <img
                          className={styles.avatarsIcon1}
                          alt=""
                          src="Avatars.png"
                        />
                        <div className={styles.olawaleDamilareGroup}>
                          <div className={styles.olawaleDamilare3}>
                            Olawale Damilare
                          </div>
                          <div className={styles.johndoeexamplecom1}>
                            johndoe@example.com
                          </div>
                        </div>
                        <div className={styles.bagde}>
                          <div className={styles.startsOnJanuary}>
                            Pay out Received
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.recentActivities}>
                    <div className={styles.basicThriftPlanIWrapper}>
                      <div className={styles.heading}>
                        Members Contribution Status
                      </div>
                    </div>
                    <div className={styles.thriftMemberParent}>
                      <div className={styles.thriftMember}>
                        <div className={styles.avatarsContainer}>
                          <img
                            className={styles.avatarsIcon2}
                            alt=""
                            src="Avatars.png"
                          />
                          <div className={styles.johnDoeWrapper}>
                            <div className={styles.johnDoe}>
                              Olawale Damilare
                            </div>
                          </div>
                        </div>
                        <div className={styles.bagde1}>
                          <div className={styles.startsOnJanuary}>Paid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd}>FL</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Frank Lampard</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars1}>
                            <div className={styles.jd}>JD</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Jane Doe</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars}>
                            <div className={styles.jd2}>AM</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Ahmed Musa</div>
                          </div>
                        </div>
                        <div className={styles.bagde2}>
                          <div className={styles.startsOnJanuary}>PAid</div>
                        </div>
                      </div>
                      <div className={styles.thriftMember1}>
                        <div className={styles.avatarsContainer}>
                          <div className={styles.avatars3}>
                            <div className={styles.jd}>OJ</div>
                          </div>
                          <div className={styles.johnDoeContainer}>
                            <div className={styles.johnDoe}>Olawale Jumoke</div>
                          </div>
                        </div>
                        <div className={styles.bagde5}>
                          <div className={styles.startsOnJanuary}>Pending</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild10} />
          </div>
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
