import { FunctionComponent } from "react";
import styles from "./ProvacyPolicy.module.css";

const ProvacyPolicy: FunctionComponent = () => {
  // const onLogoAndTextClick = useCallback(() => {
  //   // Add your code here
  // }, []);

  return (
    <div className={styles.provacyPolicy}>
      <div className={styles.content}>
        <div className={styles.content1}>
          <div className={styles.dateModifiedWrapper}>
            <div className={styles.dateModified}>
              <div className={styles.lastModified}>Last modified:</div>
              <div className={styles.stMay2025}>21st May, 2025</div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.paramountStudentsTermsAndC}>
            <div className={styles.thriftnestPrivacyAnd}>
              ThriftNest Privacy and Policy Information
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.introduction}>
              <div className={styles.childrensPrivacy}>
                <p className={styles.aInformationYou}>Introduction</p>
              </div>
              <div className={styles.welcomeToThriftnest}>
                Welcome to ThriftNest. We value your privacy and are committed
                to protecting your personal information. This Privacy Policy
                explains how we collect, use, disclose, and protect your
                information when you use our website, mobile application, or any
                other services we offer (collectively, the “Platform”).
              </div>
            </div>
            <div className={styles.overview}>
              <div className={styles.informationWeCollectContainer}>
                <p className={styles.aInformationYou}>
                  1. Information We Collect
                </p>
              </div>
              <div className={styles.weCollectThe}>
                We collect the following types of personal information when you
                interact with ThriftNest:
              </div>
              <div className={styles.aInformationYouContainer}>
                <p className={styles.aInformationYou}>
                  A. Information You Provide to Us
                </p>
                <ul className={styles.accountInformationNameEma}>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>
                      Account Information: Name, email address, phone number,
                      username, password, date of birth.
                    </span>
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>
                      Verification Details: Bank Verification Number (BVN),
                      National ID, driver's license, utility bill, or any
                      government-issued ID.
                    </span>
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>
                      Financial Information: Bank account details, card
                      information (processed via secure third-party gateways),
                      wallet activity, transaction history.
                    </span>
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>
                      Savings and Group Info: Goals you create or join,
                      contributions made, members invited.
                    </span>
                  </li>
                  <li>
                    <span>
                      Support Requests: When you contact support, we may collect
                      conversation history and support-related data.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.aInformationYouContainer}>
                <p className={styles.aInformationYou}>
                  B. Information We Collect Automatically
                </p>
                <ul className={styles.accountInformationNameEma}>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>
                      Device Information: IP address, device type, operating
                      system, browser type, app version.
                    </span>
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>
                      Usage Data: Pages visited, features used, time spent on
                      platform, links clicked.
                    </span>
                  </li>
                  <li>
                    <span>{`Cookies & Similar Technologies: We use cookies to track sessions, store preferences, and analyze site traffic. You may choose to disable cookies via your browser settings.`}</span>
                  </li>
                </ul>
              </div>
              <div className={styles.aInformationYouContainer}>
                <p className={styles.aInformationYou}>
                  C. Information from Third Parties
                </p>
                <ul className={styles.accountInformationNameEma}>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>
                      Identity Verification Partners (e.g., for KYC/AML
                      compliance): May share results of identity checks.
                    </span>
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    <span>{`Banking APIs & Payment Processors: Share transaction status and confirmation.`}</span>
                  </li>
                  <li>
                    <span>
                      Social Media (if connected): We may collect publicly
                      available profile info or profile picture.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.dataCollectionAndUses}>
              <div className={styles.informationWeCollectContainer}>
                <p className={styles.aInformationYou}>
                  2. How We Use Your Information
                </p>
              </div>
              <div className={styles.weUseYour}>We use your data to:</div>
              <div className={styles.aInformationYouContainer}>
                <ul className={styles.createAndManageYourThriftn}>
                  <li className={styles.createAndManage}>
                    Create and manage your ThriftNest account.
                  </li>
                  <li className={styles.createAndManage}>
                    Facilitate savings, withdrawals, group goals, and
                    transactions.
                  </li>
                  <li className={styles.createAndManage}>
                    Send alerts, reminders, and goal progress updates.
                  </li>
                  <li className={styles.createAndManage}>
                    Verify your identity to prevent fraud.
                  </li>
                  <li className={styles.createAndManage}>
                    Offer personalized features or recommendations.
                  </li>
                  <li className={styles.createAndManage}>
                    Conduct analytics to improve our services.
                  </li>
                  <li className={styles.createAndManage}>
                    Communicate promotions or updates (with your consent).
                  </li>
                  <li>Comply with legal or regulatory obligations.</li>
                </ul>
              </div>
            </div>
            <div className={styles.dataCollectionAndUses}>
              <div className={styles.informationWeCollectContainer}>
                <p className={styles.aInformationYou}>
                  3. Data Sharing and Disclosure
                </p>
              </div>
              <div className={styles.aInformationYouContainer}>
                We may share your information with:
              </div>
              <div className={styles.aInformationYouContainer}>
                <ul className={styles.createAndManageYourThriftn}>
                  <li className={styles.verificationDetailsBankVer}>
                    Third-Party Service Providers: For payments, KYC, cloud
                    hosting, notifications, analytics, etc.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Group Participants: Only limited information (e.g., name and
                    contributions) will be visible to group members if you join
                    a Shared Goal.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Law Enforcement/Regulatory Bodies: When required by law or
                    court order.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Partners (With Consent): If we run a co-branded savings
                    campaign, we may share relevant data with your permission.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Business Transfers: In case of merger, acquisition, or sale
                    of company assets.
                  </li>
                </ul>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  We do not sell your personal data.
                </p>
              </div>
            </div>
            <div className={styles.dataCollectionAndUses}>
              <div className={styles.informationWeCollectContainer}>
                <p className={styles.aInformationYou}>
                  4. Your Privacy Rights
                  {/* <li>Your Privacy Rights</li> */}
                </p>
              </div>
              <div className={styles.aInformationYouContainer}>
                Depending on your location, you may have the right to:
              </div>
              <div className={styles.aInformationYouContainer}>
                <ul className={styles.createAndManageYourThriftn}>
                  <li className={styles.verificationDetailsBankVer}>
                    Access the personal data we hold about you.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Request correction of inaccurate or outdated information.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Delete your account or personal data (subject to regulatory
                    retention rules).
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Object to processing or request data portability.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Withdraw consent where applicable (e.g., unsubscribe from
                    marketing).
                  </li>
                </ul>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  To exercise these rights, please contact info@thriftnest.co
                </p>
              </div>
            </div>
            <div className={styles.dataCollectionAndUses}>
              <div className={styles.informationWeCollectContainer}>
                <p className={styles.aInformationYou}>
                  5. Data Retention and Deletion
                </p>
              </div>
              <div className={styles.aInformationYouContainer}>
                We retain your data as long as necessary to:
              </div>
              <div className={styles.aInformationYouContainer}>
                <ul className={styles.createAndManageYourThriftn}>
                  <li className={styles.verificationDetailsBankVer}>
                    Provide our services.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Fulfill the purposes outlined in this policy.
                  </li>
                  <li className={styles.verificationDetailsBankVer}>
                    Comply with legal, tax, or regulatory obligations (e.g., KYC
                    retention rules).
                  </li>
                </ul>
                <p className={styles.blankLine}>&nbsp;</p>
                <p className={styles.blankLine}>
                  Once retention is no longer necessary, your data will be
                  deleted or anonymized.
                </p>
              </div>
            </div>
            <div className={styles.dataSharingAndDisclosure4}>
              <div className={styles.childrensPrivacy}>
                <p className={styles.aInformationYou}>6. Children’s Privacy</p>
              </div>
              <div className={styles.thriftnestIsNot}>
                ThriftNest is not intended for individuals under 16. We do not
                knowingly collect data from children without parental consent.
                If we discover such data was collected unintentionally, we will
                delete it promptly.
              </div>
            </div>
            <div className={styles.dataSharingAndDisclosure4}>
              <div className={styles.childrensPrivacy}>
                <p className={styles.aInformationYou}>
                  7. Updates to This Policy
                </p>
              </div>
              <div className={styles.thriftnestIsNot}>
                We may update this Privacy Policy periodically. Changes will be
                posted on our website or app and, where required, we will notify
                you via email or in-app notifications.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.provacyPolicyInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.privacyPolicyWrapper}>
            <div className={styles.privacyPolicy}>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvacyPolicy;
