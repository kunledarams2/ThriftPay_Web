import { FunctionComponent } from "react";
// import FrameComponent from "./FrameComponent";
import "./WhyUs1.css";
import WhyUsInnerContent from "./WhyUsInnerContent";

export type WhyUs1Type = {
  className?: string;
};

const WhyUs1: FunctionComponent<WhyUs1Type> = ({ className = "" }) => {
  return (
    <div className={`why-us-2 ${className}`}>
      <div className="frame-parent11">
        <div className="frame-parent12">
          <div className="basic-thrift-plan-i-container">
            <div className="basic-thrift-plan4">Basic Thrift Plan I</div>
            <div className="info-210">
              <img className="icons15" alt="" src="/icons.svg" />
              <div className="total-amount-contributed11">
                Total Amount Contributed for February
              </div>
              <div className="of-500001">₦40,000 of ₦50,000</div>
              <div className="progress-bar-container">
                <div className="progress-bar-inner-container">
                  <div className="progress-bar3">
                    <div className="progress-bar-fill" />
                    <div className="progress-bar-background" />
                  </div>
                </div>
                <div className="progress-placeholder1">80%</div>
              </div>
            </div>
            <div className="divider1" />
            <div className="payment-info">
              <div className="deposit-due1">
                <div className="div24">₦10,000</div>
                <div className="deposit-due2">Deposit Due</div>
              </div>
              <div className="payment-date">
                <div className="th-feb-20231">5th Feb. 2023</div>
                <div className="payment-due-date1">Payment Due Date</div>
              </div>
            </div>
          </div>
          <div className="member-payment-content-parent">
            <div className="member-payment-content">
              <div className="label-text2">RECENT ACTIVITIES</div>
              <div className="label-text3">See All</div>
            </div>
            <div className="payout-details">
              <div className="plan-11">
                <div className="today1">TODAY</div>
                <div className="payout-recipient">
                  <div className="payout-recipient-container">
                    <img className="icons16" alt="" src="/icons-9.svg" />
                  </div>
                  <div className="recipient-details">
                    <div className="info-211">
                      <div className="olawale-damilare7">Olawale Damilare</div>
                      <div className="slot-4-payout1">Slot 4 Payout</div>
                    </div>
                    <div className="div25">-₦100,000</div>
                  </div>
                </div>
                <div className="contribution-details">
                  <img className="icons16" alt="" src="/payin.svg" />
                  {/* <input
                    className="contribution-sender-container"
                    type="checkbox"
                  /> */}
                  <div className="sender-details">
                    <div className="info-212">
                      <div className="chinwe-cynthia1">Chinwe Cynthia</div>
                      <div className="slot-4-contribution4">
                        Slot 4 Contribution
                      </div>
                    </div>
                    <div className="div26">+₦20,000</div>
                  </div>
                </div>
              </div>
              <div className="plan-21">
                <div className="dec-30-20231">DEC 30, 2023</div>
                <div className="december-payout-recipient">
                  <input
                    className="december-recipient-container"
                    type="checkbox"
                  />
                  <div className="december-recipient-details">
                    <div className="info-213">
                      <div className="blessing-badare1">Blessing Badare</div>
                      <div className="slot-4-contribution5">
                        Slot 4 Contribution
                      </div>
                    </div>
                    <div className="div27">+₦20,000</div>
                  </div>
                </div>
              </div>
              <div className="plan-31">
                <div className="dec-28-20231">DEC 28, 2023</div>
                <div className="frame-parent13">
                  <div className="icons-wrapper3">
                    <img className="icons17" alt="" src="/icons-12.svg" />
                  </div>
                  <div className="info-2-parent4">
                    <div className="info-214">
                      <div className="olawale-damilare8">Olawale Damilare</div>
                      <div className="slot-4-contribution6">
                        Slot 4 Contribution
                      </div>
                    </div>
                    <div className="div28">+₦20,000</div>
                  </div>
                </div>
                <div className="frame-parent14">
                  <div className="icons-wrapper4">
                    <img className="icons18" alt="" src="/icons-13.svg" />
                  </div>
                  <div className="info-2-parent5">
                    <div className="info-215">
                      <div className="adeleke-omowunmi1">Adeleke Omowunmi</div>
                      <div className="slot-4-contribution7">
                        Slot 4 Contribution
                      </div>
                    </div>
                    <div className="div29">+₦20,000</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="member-receiving-payment-parent">
          <div className="member-receiving-payment2">
            <div className="member-receiving-payout2">
              <div className="member-receiving-payout3">
                Member Receiving Payout
              </div>
              <div className="payout-recipient-info">
                <img
                  className="avatars-icon8"
                  loading="lazy"
                  alt=""
                  src="/avatars-4@2x.png"
                />
                <div className="payout-recipient-details">
                  <div className="olawale-damilare9">Olawale Damilare</div>
                  <div className="johndoeexamplecom11">johndoe@example.com</div>
                </div>
                <div className="bagde12">
                  <div className="pay-out-received2">Pay out Received</div>
                </div>
              </div>
            </div>
          </div>
          <div className="recent-activities2">
            <div className="heading2">Members Contribution Status</div>
            <div className="activity-list1">
              <div className="thrift-member10">
                <div className="avatars-parent9">
                  <img
                    className="avatars-icon9"
                    loading="lazy"
                    alt=""
                    src="/avatars-7@2x.png"
                  />
                  <div className="john-doe-parent3">
                    <div className="john-doe6">Olawale Damilare</div>
                    <div className="johndoeexamplecom12">
                      johndoe@example.com
                    </div>
                  </div>
                </div>
                <div className="info-311">
                  <div className="slot10">Slot</div>
                  <div className="div30">1</div>
                </div>
                <div className="info-411">
                  <div className="total-amount-contributed12">
                    Total amount contributed
                  </div>
                  <div className="n010">N0</div>
                </div>
                <div className="bagde13">
                  <div className="paid9">Paid</div>
                </div>
              </div>
              <div className="thrift-member11">
                <div className="avatars-parent10">
                  <div className="avatars7">
                    <div className="jd7">FL</div>
                  </div>
                  <div className="frame-wrapper1">
                    <div className="john-doe-parent4">
                      <div className="john-doe7">Frank Lampard</div>
                      <div className="johndoeexamplecom13">
                        franklampard@example.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-312">
                  <div className="slot11">Slot</div>
                  <div className="div31">3</div>
                </div>
                <div className="info-412">
                  <div className="total-amount-contributed13">
                    Total amount contributed
                  </div>
                  <div className="n011">N0</div>
                </div>
                <div className="bagde-container">
                  <div className="bagde14">
                    <div className="paid10">PAid</div>
                  </div>
                </div>
              </div>
              <div className="thrift-member12">
                <div className="avatars-parent11">
                  <div className="avatars8">
                    <div className="jd8">JD</div>
                  </div>
                  <div className="profile-pic">
                    <div className="name-container">
                      <div className="john-doe8">Jane Doe</div>
                      <div className="johndoeexamplecom14">
                        janedoe@example.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-313">
                  <div className="slot12">Slot</div>
                  <div className="div32">7</div>
                </div>
                <div className="info-413">
                  <div className="total-amount-contributed14">
                    Total amount contributed
                  </div>
                  <div className="n012">N0</div>
                </div>
                <div className="badge-container">
                  <div className="bagde15">
                    <div className="paid11">PAid</div>
                  </div>
                </div>
              </div>
              <div className="thrift-member13">
                <div className="member-info">
                  <div className="avatars9">
                    <div className="jd9">AM</div>
                  </div>
                  <div className="member-name-container">
                    <div className="name-wrapper">
                      <div className="john-doe9">Ahmed Musa</div>
                      <div className="johndoeexamplecom15">
                        Ahmedmusa@example.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-314">
                  <div className="slot13">Slot</div>
                  <div className="div33">2</div>
                </div>
                <div className="info-414">
                  <div className="total-amount-contributed15">
                    Total amount contributed
                  </div>
                  <div className="n013">N0</div>
                </div>
                <div className="badge-holder">
                  <div className="bagde16">
                    <div className="paid12">PAid</div>
                  </div>
                </div>
              </div>
              <div className="thrift-member14">
                <div className="member-data">
                  <div className="avatars10">
                    <div className="jd10">OJ</div>
                  </div>
                  <div className="full-name-holder">
                    <div className="name-block">
                      <div className="john-doe10">Olawale Jumoke</div>
                      <div className="johndoeexamplecom16">
                        olawalejumoke@example.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="info-315">
                  <div className="slot14">Slot</div>
                  <div className="div34">6</div>
                </div>
                <div className="info-415">
                  <div className="total-amount-contributed16">
                    Total amount contributed
                  </div>
                  <div className="n014">N0</div>
                </div>
                <div className="badge-wrapper">
                  <div className="bagde17">
                    <div className="pending1">Pending</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhyUsInnerContent
        numberInnerContainer="2"
        tailored="Real-time "
        thriftPlans="Transparency"
        ourThriftPlansAreMeticulo="Stay informed every step of the way with our transparent transaction system. Easily track your thrift contributions, and payouts in real-time, directly from your mobile device. With ThriftPay, you have the power to monitor all thrift members and observe every transaction within your thrift group or plan in real-time."
      />
      {/* <FrameComponent /> */}
    </div>
  );
};

export default WhyUs1;
