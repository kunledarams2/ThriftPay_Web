import { FunctionComponent } from "react";
import Benefit from "./Benefit";
import styles from "./ThriftGroups.module.css";
import closeImageWithPhone from "../assets/thriftGroup/close_with_phone.png";
import thriftGroupsImage from "../assets/ThriftGroupsImage.svg";
import moneyIcon from "../assets/thriftGroup/money_icon.svg";
import groupIcon from "../assets/thriftGroup/group_icon.svg";
import lockIcon from "../assets/thriftGroup/lock_icon.svg";
import connectIcon from "../assets/thriftGroup/connect_icon.svg";

export type ThriftGroupsType = {
  className?: string;
};

const ThriftGroups: FunctionComponent<ThriftGroupsType> = (
  {
    // className = "",
  }
) => {
  return (
    <div className={styles.thriftGroups}>
      <div className={styles.thriftGroupsContainer}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <div
              className={styles.thriftGroupsHeading}
            >{`Bring Your Thrift Group & Get Rewarded!`}</div>
            <div className={styles.thriftGroupsSubheading}>
              Empower your financial journey by teaming up with friends, family,
              or colleagues. Bring your thrift group to ThriftNest and earn N500
              per active member when they complete registration, join your
              group, and start contributing.
            </div>
          </div>
          <div className={styles.thriftGroupsBenefitsContain}>
            <div className={styles.thriftGroupsBenefitsContain1}>
              <Benefit
                title="Earn N500 Per Member"
                body="As a coordinator, you get rewarded for every member who
                    joins and contributes."
                icon={moneyIcon}
              />
              <Benefit
                title="Effortless Group Management"
                body="Automate contributions, track payments, and manage members
                    with ease."
                icon={groupIcon}
              />
              <Benefit
                title="Transparent & Secure Trackin"
                body=" Monitor every transaction and ensure seamless payouts."
                icon={lockIcon}
              />
              <Benefit
                title="Flexible Control"
                body="Set customized rules and parameters for your group's needs."
                icon={connectIcon}
              />
            </div>
          </div>
        </div>
        <div className={styles.thriftGroupsImageContainer}>
          <img
            className={styles.closeupOfTwoBeautifulBlack}
            alt=""
            src={closeImageWithPhone}
          />
          <div className={styles.thriftGroupsImage} />
          <img
            className={styles.thriftGroupsImage1}
            alt=""
            src={thriftGroupsImage}
          />
          {/* <div className={styles.thriftBalanceCardWrapper}>
            <div className={styles.thriftBalanceCard}>
              <div className={styles.frameParent}>
                <div className={styles.nextDepositDueParent}>
                  <div className={styles.nextDepositDue}>Next Deposit Due</div>
                  <div className={styles.div}>₦20,000</div>
                </div>
                <div className={styles.nextDepositDueParent}>
                  <div className={styles.nextDepositDue}>Next Deposit Date</div>
                  <div className={styles.thFeb2023}>5th Feb. 2023</div>
                </div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameWrapper}>
                  <div className={styles.frameContainer}>
                    <div className={styles.totalRewardBalanceParent}>
                      <div className={styles.totalRewardBalance}>
                        Total Reward Balance
                      </div>
                      <div className={styles.icons7} />
                    </div>
                    <div className={styles.div1}>₦50,000.00</div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.nextDepositDueGroup}>
                    <div className={styles.unclaimedRewards}>
                      Next Deposit Due
                    </div>
                    <div className={styles.div2}>₦20,000</div>
                  </div>
                  <div className={styles.nextDepositDueGroup}>
                    <div className={styles.unclaimedRewards}>
                      Next Deposit Date
                    </div>
                    <div className={styles.thFeb20231}>5th Feb. 2023</div>
                  </div>
                </div>
                <div className={styles.button}>
                  <div className={styles.button1}>{`Redeem `}</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.pendingRewardsParent}>
                  <div
                    className={styles.pendingRewards}
                  >{`Pending Rewards `}</div>
                  <div className={styles.div3}>₦5,000</div>
                </div>
                <div className={styles.pendingRewardsParent}>
                  <div
                    className={styles.unclaimedRewards}
                  >{`Unclaimed Rewards `}</div>
                  <div className={styles.div3}>₦3,000</div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>

    // <section className={`thrift-groups ${className}`}>
    //   <div className="content2">
    //     <div className="heading4">
    //       <h1 className="bringing-your-existing">{`Bringing your existing Thrift group or creating a new one has never been easier. `}</h1>
    //       <div className="empower-your-financial">
    //         Empower your financial journey by teaming up with friends, family,
    //         or colleagues. Create a private Thrift Group to pool resources and
    //         achieve shared savings goals.
    //       </div>
    //     </div>
    //     <div className="benefits-list">
    //       <div className="benefit-item">Benefits</div>
    //       <div className="benefit-parent">
    //         <div className="benefit1">
    //           <div className="icons-wrapper8">
    //             <img className="icons25" alt="" src="/icons-24.svg" />
    //           </div>
    //           <div className="seamless-management-parent">
    //             <div className="seamless-management1">Seamless Management</div>
    //             <div className="effortlessly-organize-your1">
    //               Effortlessly organize your group contributions and schedules
    //             </div>
    //           </div>
    //         </div>
    //         <div className="benefit2">
    //           <div className="icons-wrapper9">
    //             <img className="icons26" alt="" src="/icons-25.svg" />
    //           </div>
    //           <div className="transparent-tracking-parent">
    //             <div className="transparent-tracking">Transparent Tracking</div>
    //             <div className="monitor-every-transaction">
    //               Monitor every transaction and contribution with clarity.
    //             </div>
    //           </div>
    //         </div>
    //         <div className="benefit3">
    //           <div className="icons-wrapper10">
    //             <img className="icons27" alt="" src="/icons-26.svg" />
    //           </div>
    //           <div className="flexible-control-parent">
    //             <div className="flexible-control">Flexible Control</div>
    //             <div className="set-customized-rules">
    //               Set customized rules and parameters for your group's needs.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="benefit-details">
    //         <Benefit
    //           seamlessManagement="Seamless Management"
    //           effortlesslyOrganizeYourG="Effortlessly organize your group contributions and schedules"
    //         />
    //         <Benefit
    //           seamlessManagement="Transparent Tracking"
    //           effortlesslyOrganizeYourG="Monitor every transaction and contribution with clarity."
    //         />
    //         <Benefit
    //           seamlessManagement="Flexible Control"
    //           effortlesslyOrganizeYourG="Set customized rules and parameters for your group's needs."
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   <div className="image1">
    //     <div className="image-child" />
    //     <div className="label-text-group">
    //       <div className="label-text4">Benefits</div>
    //       <div className="benefit-group">
    //         <div className="benefit4">
    //           <div className="icons-wrapper11">
    //             <img className="icons28" alt="" src="/icons-30.svg" />
    //           </div>
    //           <div className="seamless-management-group">
    //             <div className="seamless-management2">Seamless Management</div>
    //             <div className="effortlessly-organize-your2">
    //               Effortlessly organize your group contributions and schedules
    //             </div>
    //           </div>
    //         </div>
    //         <div className="benefit5">
    //           <div className="icons-wrapper12">
    //             <img className="icons29" alt="" src="/icons-31.svg" />
    //           </div>
    //           <div className="transparent-tracking-group">
    //             <div className="transparent-tracking1">
    //               Transparent Tracking
    //             </div>
    //             <div className="monitor-every-transaction1">
    //               Monitor every transaction and contribution with clarity.
    //             </div>
    //           </div>
    //         </div>
    //         <div className="benefit6">
    //           <div className="icons-wrapper13">
    //             <img className="icons30" alt="" src="/icons-32.svg" />
    //           </div>
    //           <div className="flexible-control-group">
    //             <div className="flexible-control1">Flexible Control</div>
    //             <div className="set-customized-rules1">
    //               Set customized rules and parameters for your group's needs.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="benefit-container">
    //         <div className="benefit7">
    //           <div className="icons-wrapper14">
    //             <img className="icons31" alt="" src="/icons-33.svg" />
    //           </div>
    //           <div className="seamless-management-container">
    //             <div className="seamless-management3">Seamless Management</div>
    //             <div className="effortlessly-organize-your3">
    //               Effortlessly organize your group contributions and schedules
    //             </div>
    //           </div>
    //         </div>
    //         <div className="benefit8">
    //           <div className="icons-wrapper15">
    //             <img className="icons32" alt="" src="/icons-34.svg" />
    //           </div>
    //           <div className="transparent-tracking-container">
    //             <div className="transparent-tracking2">
    //               Transparent Tracking
    //             </div>
    //             <div className="monitor-every-transaction2">
    //               Monitor every transaction and contribution with clarity.
    //             </div>
    //           </div>
    //         </div>
    //         <div className="benefit9">
    //           <div className="icons-wrapper16">
    //             <img className="icons33" alt="" src="/icons-35.svg" />
    //           </div>
    //           <div className="flexible-control-container">
    //             <div className="flexible-control2">Flexible Control</div>
    //             <div className="set-customized-rules2">
    //               Set customized rules and parameters for your group's needs.
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default ThriftGroups;
