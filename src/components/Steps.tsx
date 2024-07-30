import { FunctionComponent } from "react";
import "./Steps.css";
import { motion } from "framer-motion";
import { Element } from "react-scroll";

export type StepsType = {
  className?: string;
};

const Steps: FunctionComponent<StepsType> = ({ className = "" }) => {
  return (
    <section className={`steps ${className}`}>
      <Element name="targetElementHowItWork">
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
          <div className="content-step ">
            <div className="steps-image">
              <img
                className="image-icon1"
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
            </div>
            <div className="right1">
              <div className="heading3">
                <h1 className="empowering-your-financial">
                  Empowering Your Financial Future With Few Steps
                </h1>
                <div className="lets-guide-you">
                  Lets guide you towards a brighter, wealthier tomorrow.
                </div>
              </div>
              <div className="content1">
                <div className="progress3">
                  <div className="steps-progress-items">
                    <div className="steps-progress-item">
                      <img
                        className="icons20"
                        loading="lazy"
                        alt=""
                        src="/icons-20.svg"
                      />
                    </div>
                  </div>
                  <div className="steps-progress-items1" />
                  <div className="steps-progress-items2">
                    <div className="icons-wrapper5">
                      <img
                        className="icons21"
                        loading="lazy"
                        alt=""
                        src="/icons-21.svg"
                      />
                    </div>
                  </div>
                  <div className="steps-progress-items3" />
                  <div className="steps-progress-items4">
                    <div className="icons-wrapper6">
                      <img
                        className="icons22"
                        loading="lazy"
                        alt=""
                        src="/icons-22.svg"
                      />
                    </div>
                  </div>
                  <div className="steps-progress-items5" />
                  <div className="steps-progress-items6">
                    <div className="icons-wrapper7">
                      <img
                        className="icons23"
                        loading="lazy"
                        alt=""
                        src="/icons-23.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="text1">
                  <div className="steps-progress-label">
                    <div className="sign-up">Sign Up</div>
                    <div className="download-our-mobile">
                      Download our mobile app, Create your account and complete
                      KYC.
                    </div>
                  </div>
                  <div className="steps-progress-label1">
                    <div className="discover-plans">Discover Plans</div>
                    <div className="choose-from-a">
                      Choose from a variety of Thrift plans based on your income
                      level.
                    </div>
                  </div>
                  <div className="steps-progress-label2">
                    <div className="join-a-plan">Join a Plan</div>
                    <div className="join-a-plan1">
                      Join a plan that suits your financial objectives.
                    </div>
                  </div>
                  <div className="steps-progress-label3">
                    <div className="track-progress">Track Progress</div>
                    <div className="monitor-your-savings">
                      Monitor your savings, payouts, and overall progress.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </Element>
    </section>
  );
};

export default Steps;
