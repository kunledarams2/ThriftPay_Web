import { FunctionComponent, useState } from "react";
import FAQ from "./FAQ";
// import "./FrameComponent1.css";
// import { motion } from "framer-motion";
// import { Element } from "react-scroll";

import styles from "./FrameComponent1.module.css";

const Frame: FunctionComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      howDoesTheThriftPlanWork: "How does the Thrift Plan work?",
      // icons="/icons-36.svg"
      howDoesTheThriftPlanWork1:
        "A thrift plan operates by pooling the contributions of members towards common financial goals. Each month, members contribute a fixed amount, and one member receives the total contributions as a payout. This rotation continues until all members have received payouts, promoting consistent savings and financial growth.",
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

  return (
    <div className={styles.frameParent}>
      <div className={styles.frequentlyAskedQuestionsParent}>
        <div className={styles.frequentlyAskedQuestions}>
          Frequently asked questions
        </div>
        <div className={styles.yourQuestionsAnswered}>
          Your Questions Answered!
        </div>
      </div>
      <div className={styles.faqs}>
        <div className={styles.faqs}>
          {faqs.map((faq, index) => (
            <FAQ
              key={index}
              howDoesTheThriftPlanWork={faq.howDoesTheThriftPlanWork}
              howDoesTheThriftPlanWork1={faq.howDoesTheThriftPlanWork1}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frame;
