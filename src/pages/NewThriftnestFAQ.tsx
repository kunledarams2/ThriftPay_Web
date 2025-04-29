import { FunctionComponent, useState } from "react";
import styles from "./NewThriftnestFAQ.module.css";
import FAQ from "../components/FAQ";

const generalFaqs = [
  {
    howDoesTheThriftPlanWork: "How does a Thrift Plan work?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      " A thrift plan operates by pooling the contributions of members towards common financial goals. Each month, members contribute a fixed amount, and one member receives the total contributions as a payout. This rotation continues until all members have received payouts, promoting consistent savings and financial growth.",
  },
  {
    howDoesTheThriftPlanWork: "Is my money safe in a Thrift Plan?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "Absolutely. ThriftNest, we prioritize the security of your savings. All thrift plans are meticulously managed and monitored. Additionally, our platform employs top-notch encryption and security measures to safeguard your funds, ensuring a worry-free savings experience.",
  },

  {
    howDoesTheThriftPlanWork: "Can I create my Thrift Plan on this platform?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "Yes, you can! With ThriftNest, you have the flexibility to create your own custom Thrift Plan. Simply gather your friends, family, or colleagues, set your savings goals, and start your journey to financial growth together.",
  },

  {
    howDoesTheThriftPlanWork:
      "How long does it take for wallet transactions to reflect in my account?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "Wallet transactions typically reflect in your account within a few seconds, provided all servers are active and operational.",
  },

  {
    howDoesTheThriftPlanWork:
      "Can I withdraw from a Thrift Plan before it ends in case of emergency?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "No, you cannot withdraw from a Thrift Plan before it ends. The rotation must get to you before you can make a withdrawal.",
  },
  // Add more FAQs here
];

const loginFaqs = [
  {
    howDoesTheThriftPlanWork:
      "Can I log in with my email instead of my phone number?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "Yes! ThriftNest allows login using either your registered email or phone number.",
  },
  {
    howDoesTheThriftPlanWork:
      "I forgot the number I used to register. What should I do now?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "If you still have access to your email, use that to log in.Otherwise, contact our support team via the “Help” option on the login page for account recovery.",
  },

  {
    howDoesTheThriftPlanWork: "Can I use the same account on multiple devices?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "Yes, but for your safety, we may ask for OTP verification when logging in on a new device. Always keep your contact details updated.",
  },

  {
    howDoesTheThriftPlanWork: "I changed my phone number. How do I update it?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      " 1.Log in using your old number. \n2.Go to Settings > Profile. \n3.Update your phone number and verify it.",
  },

  {
    howDoesTheThriftPlanWork:
      "I’m having trouble logging in after registering. What can I do?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "If you're having trouble logging in, make sure you’re entering the correct email address or phone number and password. If you’ve forgotten your password, click on Forgot Password to reset it. If the issue persists, contact customer support for further assistance.",
  },
  // Add more FAQs here
];

const kycFaqs = [
  {
    howDoesTheThriftPlanWork: "Why is the KYC verification necessary?",
    howDoesTheThriftPlanWork1:
      "KYC (Know Your Customer) is a verification process designed to ensure the safety and security of all ThriftNest users. It helps us verify your identity and prevent fraud. Completing KYC is a necessary step to either join or create a Thrift group.",
  },
  {
    howDoesTheThriftPlanWork:
      "What if I made a mistake while entering my information?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "If you notice an error in the information you provided, you can update your details directly through the app’s settings or contact customer support. It’s important to provide accurate information to ensure smooth verification.",
  },

  {
    howDoesTheThriftPlanWork:
      "Why am I receiving a “KYC verification failed” message?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "A failed KYC verification usually happens if the ID photo is unclear, the information doesn't match, or there’s a mismatch between your selfie and your ID. Ensure the information you fill is the same with what is written in your document, also ensure it follows the same order.Try double-checking the clarity of your photo too. If issues persist, contact customer support for help.",
  },

  {
    howDoesTheThriftPlanWork: "Can I register without completing KYC?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      " Yes you can create an account and explore ThriftNest, completing KYC verification is required to fully access all features, including joining a public thrift group or creating a thrift group. It’s a simple process that helps keep your account secure.",
  },

  {
    howDoesTheThriftPlanWork: "What if my KYC is rejected? What should I do?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      " 1. Blurry or unclear selfie \n2. Expired or damaged ID \n3. Name mismatch between your BVN and ID \n4. Someone else’s ID was used.",
  },
  // Add more FAQs here
];

const thriftGroupFaqs = [
  {
    howDoesTheThriftPlanWork: "What are Thrift Groups?",
    howDoesTheThriftPlanWork1:
      "Thrift Saving Groups is also known as rotational savings, a traditional saving method where a group of people come together to contribute a fixed amount of money regularly. Each time they contribute, one person in the group gets the total sum according to the time they have stipulated, daily, bi-weekly, weekly or monthly. This cycle continues until everyone has received their payout. Whether you know it as Ajo, Esusu, Adashe, Susu, Chamas, Tontine, or simply contribution–we’ve just made it easier, safer, and more organized.",
  },
  {
    howDoesTheThriftPlanWork: "What’s a Public Thrift Savings Group?",
    howDoesTheThriftPlanWork1:
      "In this type of plan you join a group with other savers, contribute your set amount regularly, and when it is your turn you cash out. Everyone takes turns until the full circle is complete. It is public, which means you are saving with other members of our community, not just friends. The best part is you do not need to worry about manual tracking or chasing people around because ThriftNest handles all the structure. You just show up, stay consistent, and grow your savings.",
  },

  {
    howDoesTheThriftPlanWork: "When Can I Start Paying in a Thrift Group?",
    howDoesTheThriftPlanWork1:
      "Once the group is full and all members have confirmed their participation, you can start paying. You’ll be notified when it’s time to start contributing, and from there, payments are made on the schedule set by the group coordinator whether that’s a weekly, bi-weekly, or monthly contribution.",
  },

  {
    howDoesTheThriftPlanWork:
      "Can I withdraw from a Thrift Group before it ends?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      "Withdrawals are only possible when it’s your active slot, that is, after all members in the group have made their contributions for that round.",
  },

  {
    howDoesTheThriftPlanWork: "Can I leave a Thrift Plan once I've joined?",
    // icons="/icons-36.svg"
    howDoesTheThriftPlanWork1:
      " Yes, you can but only before the thrift plan officially starts (that is, before contributions begin). Most groups will clearly state their start date, and you’ll usually have up to 10 days before that to leave without issues. Once the plan begins, you’re expected to stay committed for the full cycle, so be sure before joining or exit early if plans change!",
  },
  // Add more FAQs here
];

const NewThriftnestFAQ: FunctionComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const [isOpenGeneral, setIsOpenGeneral] = useState(true);
  const [isOpenKYC, setIsOpenKYC] = useState(false);
  const [isOpenThriftGroup, setIsOpenThriftGroup] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);

  const selectedGeneral = () => {
    setIsOpenGeneral(true);
    setIsOpenKYC(false);
    setIsOpenThriftGroup(false);
    setIsOpenLogin(false);
  };

  const selectedKYC = () => {
    setIsOpenGeneral(false);
    setIsOpenThriftGroup(false);
    setIsOpenKYC(true);
    setIsOpenLogin(false);
  };

  const selectedThriftGroup = () => {
    setIsOpenGeneral(false);
    setIsOpenThriftGroup(true);
    setIsOpenKYC(false);
    setIsOpenLogin(false);
  };

  const selectedLogin = () => {
    setIsOpenGeneral(false);
    setIsOpenThriftGroup(false);
    setIsOpenKYC(false);
    setIsOpenLogin(true);
  };

  return (
    <div className={styles.newThriftnestFaq}>
      {/* <div className={styles.pixel7ProMockup}>
        <img className={styles.shadowIcon} alt="" src="shadow.png" />
        <img className={styles.mainIcon} alt="" src="main.png" />
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
      <div className={styles.faqsWrapper}>
        <div className={styles.faqs}>
          {isOpenGeneral ? (
            <>
              {generalFaqs.map((faq, index) => (
                <FAQ
                  key={index}
                  howDoesTheThriftPlanWork={faq.howDoesTheThriftPlanWork}
                  howDoesTheThriftPlanWork1={faq.howDoesTheThriftPlanWork1}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </>
          ) : isOpenKYC ? (
            <>
              {kycFaqs.map((faq, index) => (
                <FAQ
                  key={index}
                  howDoesTheThriftPlanWork={faq.howDoesTheThriftPlanWork}
                  howDoesTheThriftPlanWork1={faq.howDoesTheThriftPlanWork1}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </>
          ) : isOpenThriftGroup ? (
            <>
              {thriftGroupFaqs.map((faq, index) => (
                <FAQ
                  key={index}
                  howDoesTheThriftPlanWork={faq.howDoesTheThriftPlanWork}
                  howDoesTheThriftPlanWork1={faq.howDoesTheThriftPlanWork1}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </>
          ) : isOpenLogin ? (
            <>
              {loginFaqs.map((faq, index) => (
                <FAQ
                  key={index}
                  howDoesTheThriftPlanWork={faq.howDoesTheThriftPlanWork}
                  howDoesTheThriftPlanWork1={faq.howDoesTheThriftPlanWork1}
                  isOpen={openIndex === index}
                  onToggle={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </>
          ) : (
            <></>
          )}

          {/* <div className={styles.faq}>
            <div className={styles.howDoesTheThriftPlanWorkParent}>
              <div className={styles.howDoesThe}>
                How does a Thrift Plan work?
              </div>
              <img className={styles.icons} alt="" src="Icons.svg" />
            </div>
            <div className={styles.howDoesThe1}>
              A thrift plan operates by pooling the contributions of members
              towards common financial goals. Each month, members contribute a
              fixed amount, and one member receives the total contributions as a
              payout. This rotation continues until all members have received
              payouts, promoting consistent savings and financial growth.
            </div>
          </div>
          <div className={styles.faq1}>
            <div className={styles.howDoesTheThriftPlanWorkParent}>
              <div className={styles.howDoesThe}>
                Is my money safe in a Thrift Plan?
              </div>
              <img className={styles.icons} alt="" src="Icons.svg" />
            </div>
            <div className={styles.howDoesThe1}>
              Absolutely! At ThriftPay, we prioritize the security of your
              savings. All thrift plans are meticulously managed and monitored.
              Additionally, our platform employs top-notch encryption and
              security measures to safeguard your funds, ensuring a worry-free
              savings experience.
            </div>
          </div>
          <div className={styles.faq1}>
            <div className={styles.howDoesTheThriftPlanWorkParent}>
              <div className={styles.howDoesThe}>
                Can I create my Thrift Plan on this platform?
              </div>
              <img className={styles.icons} alt="" src="Icons.svg" />
            </div>
            <div className={styles.howDoesThe1}>
              Yes, you can! With ThriftPay, you have the flexibility to create
              your own custom Thrift Plan. Simply gather your friends, family,
              or colleagues, set your savings goals, and start your journey to
              financial growth together.
            </div>
          </div>
          <div className={styles.faq1}>
            <div className={styles.howDoesTheThriftPlanWorkParent}>
              <div className={styles.howDoesThe}>
                Are there any fees associated with using the Thrift app?
              </div>
              <img className={styles.icons} alt="" src="Icons.svg" />
            </div>
            <div className={styles.howDoesThe1}>
              No, it is absolutely free. You just need a data connection to
              access the app and carry out transactions.
            </div>
          </div>
          <div className={styles.faq1}>
            <div className={styles.howDoesTheThriftPlanWorkParent}>
              <div className={styles.howDoesThe}>
                How long does it take for wallet transactions to reflect in my
                account?
              </div>
              <img className={styles.icons} alt="" src="Icons.svg" />
            </div>
            <div className={styles.howDoesThe1}>
              Wallet transactions typically reflect in your account within a few
              minutes, provided all servers are active and operational.
            </div>
          </div>
          <div className={styles.faq1}>
            <div className={styles.howDoesTheThriftPlanWorkParent}>
              <div className={styles.howDoesThe}>
                Can I withdraw from a Thrift Plan before it ends in case of
                emergency?
              </div>
              <img className={styles.icons} alt="" src="Icons.svg" />
            </div>
            <div className={styles.howDoesThe1}>
              No, you cannot withdraw from a Thrift Plan before it ends. The
              rotation must get to you before you can make a withdrawal.
            </div>
          </div> */}
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frequentlyAskedQuestionsParent}>
            <div className={styles.frequentlyAskedQuestions}>
              Frequently asked questions
            </div>
            <div className={styles.yourQuestionsAnswered}>
              Your Questions Answered!
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.magnifyingGlassParent}>
              <img
                className={styles.magnifyingGlassIcon}
                alt=""
                src="magnifying-glass.svg"
              />
              <div className={styles.askAQuestion}>Ask a question</div>
            </div>
            <div className={styles.searchWrapper}>
              <div className={styles.search}>Search</div>
            </div>
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div
            className={
              isOpenGeneral ? styles.generalWrapper : styles.thriftPlanWrapper
            }
            onClick={selectedGeneral}
          >
            <div className={styles.general}>General</div>
          </div>
          <div
            className={
              isOpenLogin ? styles.generalWrapper : styles.thriftPlanWrapper
            }
            onClick={selectedLogin}
          >
            <div className={styles.general}>Login</div>
          </div>
          <div
            className={
              isOpenKYC ? styles.generalWrapper : styles.thriftPlanWrapper
            }
            onClick={selectedKYC}
          >
            <div className={styles.general}>KYC Verification</div>
          </div>
          <div
            className={
              isOpenThriftGroup
                ? styles.generalWrapper
                : styles.thriftPlanWrapper
            }
            onClick={selectedThriftGroup}
          >
            <div className={styles.general}>
              Thrift Contribution Plan & Group
            </div>
          </div>
          <div className={styles.thriftPlanWrapper}>
            <div className={styles.general}>Security & Wallet Transaction</div>
          </div>
        </div>
      </div>
      <div className={styles.frameParent2}>
        <div className={styles.contactUsParent}>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.cantFindWhat}>
            Can’t find what you're looking for? Chat with our team
          </div>
        </div>
        <div className={styles.frameParent3}>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.emailSupportParent}>
                <div className={styles.emailSupport}>Email Support</div>
                <div className={styles.sendUsAn}>
                  Send us an email and we’ll respond within 24 hours
                </div>
              </div>
              <div className={styles.infothriftnestco}>info@thriftnest.co</div>
            </div>
            <div className={styles.frameParent5}>
              <div className={styles.emailSupportParent}>
                <div className={styles.callUs}>Call Us</div>
                <div className={styles.weRecieveCalls}>
                  We recieve calls from Mon- Fri
                </div>
              </div>
              <div className={styles.div}>23456174578</div>
            </div>
          </div>
          <div className={styles.formWrapper}>
            <div className={styles.form}>
              <div className={styles.emailSupportParent}>
                <div className={styles.label}>Full name</div>
                <div className={styles.field}>
                  <div className={styles.input}>Enter full name</div>
                </div>
              </div>
              <div className={styles.emailSupportParent}>
                <div className={styles.label}>Email Address</div>
                <div className={styles.field}>
                  <div className={styles.input}>Enter email address</div>
                </div>
              </div>
              <div className={styles.emailSupportParent}>
                <div className={styles.label}>Phone Number (Optional)</div>
                <div className={styles.field}>
                  <div className={styles.input}>Enter Phone number</div>
                </div>
              </div>
              <div className={styles.inputtext3}>
                <div className={styles.label}>Your Message</div>
                <div className={styles.field3} />
              </div>
            </div>
            <div className={styles.button}>
              <div className={styles.button1}>Submit</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewThriftnestFAQ;
