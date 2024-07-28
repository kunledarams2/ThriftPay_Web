import { FunctionComponent } from "react";
import FAQ from "./FAQ";
import "./FrameComponent1.css";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={`faqs-wrapper ${className}`}>
      <div className="faqs1">
        <Element name="targetElementFAQ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.05 }}
            style={
              {
                // height: "200px",
                // backgroundColor: "lightblue",
                // display: "flex",
                // justifyContent: "center",
                // alignItems: "center",
              }
            }
          >
            <div className="heading5">
              <h2 className="your-savings-your">
                Your Savings, Your Questions Answered!
              </h2>
              <div className="lets-guide-you1">
                Lets guide you towards a brighter, wealthier tomorrow.
              </div>
            </div>
            <div className="faqs2">
              <FAQ
                howDoesTheThriftPlanWork="How does the Thrift Plan work?"
                // icons="/icons-36.svg"
                howDoesTheThriftPlanWork1="A thrift plan operates by pooling the contributions of members towards common financial goals. Each month, members contribute a fixed amount, and one member receives the total contributions as a payout. This rotation continues until all members have received payouts, promoting consistent savings and financial growth."
                // showHowDoesThe
              />
              <FAQ
                howDoesTheThriftPlanWork="Is my money safe in a Thrift Plan?"
                // icons="/icons-36.svg"
                howDoesTheThriftPlanWork1="Absolutely. ThriftPay, we prioritize the security of your savings. All thrift plans are meticulously managed and monitored. Additionally, our platform employs top-notch encryption and security measures to safeguard your funds, ensuring a worry-free savings experience."
                // showHowDoesThe
              />
              <FAQ
                howDoesTheThriftPlanWork="Can I create my Thrift Plan on this platform?"
                // icons="/icons-36.svg"
                howDoesTheThriftPlanWork1="Yes, you can! With ThriftPay, you have the flexibility to create your own custom Thrift Plan. Simply gather your friends, family, or colleagues, set your savings goals, and start your journey to financial growth together."
                // showHowDoesThe
              />
              <FAQ
                howDoesTheThriftPlanWork="Can I create my Thrift Plan on this platform?"
                // icons="/icons-39.svg"
                howDoesTheThriftPlanWork1="How does the Thrift Plan work?"
                // showHowDoesThe={false}
              />
              <FAQ
                howDoesTheThriftPlanWork="How long does it take for wallet transactions to reflect in my account?"
                // icons="/icons-39.svg"
                howDoesTheThriftPlanWork1="How does the Thrift Plan work?"
                // showHowDoesThe={false}
              />
              <FAQ
                howDoesTheThriftPlanWork="Can I withdraw from a Thrift Plan before it ends?"
                // icons="/icons-39.svg"
                howDoesTheThriftPlanWork1="How does the Thrift Plan work?"
                // showHowDoesThe={false}
              />
            </div>
          </motion.div>
        </Element>
      </div>
    </section>
  );
};

export default FrameComponent2;
