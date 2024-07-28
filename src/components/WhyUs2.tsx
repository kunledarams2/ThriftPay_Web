import { FunctionComponent } from "react";
import WhyUsInnerContent from "./WhyUsInnerContent";
import "./WhyUs2.css";

export type WhyUsType = {
  className?: string;
};

const WhyUs: FunctionComponent<WhyUsType> = ({ className = "" }) => {
  return (
    <div className={`why-us-1 ${className}`}>
      <WhyUsInnerContent
        numberInnerContainer="1"
        tailored="Tailored "
        thriftPlans="Thrift Plans"
        ourThriftPlansAreMeticulo="Our Thrift plans are meticulously designed to match your income level and financial aspirations. Whether you're saving for a dream vacation, a new home, or simply building a rainy-day fund, ThriftPay offers plans that suit your specific needs."
      />
      <div className="number-background-parent">
        <div className="number-background">
          <img className="shadow-icon" alt="" src="/shadow@2x.png" />
          <img className="main-icon" alt="" src="/main@2x.png" />
        </div>
        <img
          className="pixel-7-pro-mockup-label"
          alt=""
          src="/pixel-7-pro-mockup-label@2x.png"
        />
      </div>
      <div className="thrift-plan-cards">
        <div className="card-container">
          <div className="plan-card-wrapper">
            <div className="thriftplan-card1">
              <div className="plan-name-container">
                <div className="basic-thrift-plan2">Olawale Family</div>
                <div className="start-date-group">
                  <div className="start-date1">Start Date:</div>
                  <div className="july-14-20231">July 14, 2023</div>
                </div>
              </div>
              <div className="plan-details">
                <div className="info-28">
                  <img className="icons9" alt="" src="/icons-3.svg" />
                  <div className="contribution-amount">
                    <div className="div20">₦10,000</div>
                    <div className="per-member1">Per Member</div>
                  </div>
                </div>
                <div className="info-51">
                  <img className="icons10" alt="" src="/icons-4.svg" />
                  <div className="duration-value">
                    <div className="months1">10 Months</div>
                    <div className="duration1">Duration</div>
                  </div>
                </div>
                <div className="info-61">
                  <img className="icons11" alt="" src="/icons-5.svg" />
                  <div className="remittance-amount">
                    <div className="div21">₦500,000</div>
                    <div className="total-remit1">Total Remit</div>
                  </div>
                </div>
              </div>
              <div className="progress2">
                <div className="progress-bar-wrapper">
                  <div className="progress-bar2">
                    <div className="progress-background" />
                    <div className="progress-fill" />
                  </div>
                </div>
                <div className="progress-placeholder">50%</div>
              </div>
              <div className="coordinator-info">
                <img
                  className="avatars-icon6"
                  loading="lazy"
                  alt=""
                  src="/avatars-4@2x.png"
                />
                <div className="coordinator-details">
                  <div className="coordinator-name-container">
                    <div className="olawale-damilare5">Olawale Damilare</div>
                    <div className="johndoeexamplecom9">
                      johndoe@example.com
                    </div>
                  </div>
                  <div className="thrift-coordinator1">Thrift Coordinator</div>
                </div>
              </div>
            </div>
          </div>
          <div className="thriftplan-card2">
            <div className="plan-title-container">
              <div className="basic-thrift-plan3">School Fees Thrift</div>
            </div>
            <div className="plan-information">
              <div className="info-29">
                <img className="icons12" alt="" src="/icons-3.svg" />
                <div className="cost-details">
                  <div className="div22">₦10,000</div>
                  <div className="per-member2">Per Member</div>
                </div>
              </div>
              <div className="info-52">
                <img className="icons13" alt="" src="/icons-4.svg" />
                <div className="duration-information">
                  <div className="months2">10 Months</div>
                  <div className="duration2">Duration</div>
                </div>
              </div>
              <div className="info-410">
                <img className="icons14" alt="" src="/icons-8.svg" />
                <div className="slots-details">
                  <div className="slot-count">2/10</div>
                  <div className="filled-slots">Filled Slots</div>
                </div>
              </div>
            </div>
            <div className="frame-parent9">
              <div className="starts-on-january-31-2023-wrapper">
                <div className="starts-on-january">
                  Starts On January 31, 2023
                </div>
              </div>
              <div className="days-to-go">28 Days to Go</div>
            </div>
            <div className="avatars-parent8">
              <img className="avatars-icon7" alt="" src="/avatars-4@2x.png" />
              <div className="frame-parent10">
                <div className="olawale-damilare-container">
                  <div className="olawale-damilare6">Olawale Damilare</div>
                  <div className="johndoeexamplecom10">johndoe@example.com</div>
                </div>
                <div className="thrift-coordinator2">Thrift Coordinator</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
