import { FunctionComponent } from "react";
import WhyUsInnerContent from "./WhyUsInnerContent";
import "./WhyUs.css";

export type WhyUs2Type = {
  className?: string;
};

const WhyUs2: FunctionComponent<WhyUs2Type> = ({ className = "" }) => {
  return (
    <div className={`why-us-3 ${className}`}>
      <WhyUsInnerContent
        numberInnerContainer="3"
        tailored="Secure "
        thriftPlans="Platform"
        ourThriftPlansAreMeticulo="Your financial security is paramount to us. At ThriftPay, we go the extra mile to ensure that every aspect of your savings experience is safeguarded. All thrift savers on our platform undergo thorough verification processes to ensure compliance and security in every thrift plan. We verify the creditworthiness of our users, providing you with peace of mind as you embark on your savings journey."
        propMinWidth="unset"
        propFlexWrap="wrap"
      />
      <div className="phone-mockup">
        <div className="mockup-container">
          <div className="phone-content-parent">
            <div className="phone-content">
              <img className="shadow-icon1" alt="" src="/shadow@2x.png" />
              <img className="main-icon1" alt="" src="/main@2x.png" />
            </div>
            <img
              className="pixel-7-pro-mockup-label1"
              loading="lazy"
              alt=""
              src="/pixel-7-pro-mockup-label-1@2x.png"
            />
          </div>
        </div>
        <div className="verification-content-parent">
          <div className="verification-content">
            <div className="check-icon">
              <img
                className="check-icon1"
                loading="lazy"
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
          <div className="verification-info">
            <div className="id-verification-submitted">
              ID verification submitted successfully
            </div>
            <div className="supporting-text">
              Your will get notified of verification status as soon as possible.
              This usually takes 24 hours or less
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs2;
