import { FunctionComponent } from "react";
import "./FrameComponent3.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <div className={`hero-wrapper ${className}`}>
      <div className="hero">
        <div className="hero-container">
          <div className="right">
            <div className="text">
              <h1 className="save-smarter-together">Save Smarter, Together</h1>
              <div className="join-thousands-of">
                Join thousands of savers achieving their financial goals with
                ThriftPay
              </div>
            </div>
            <button className="buttons">
              <img className="app-store-icon" alt="" src="/app-store.svg" />
              <div className="button2">
                <div className="button3">Get the App</div>
              </div>
            </button>
          </div>
        </div>
        <div className="image">
          <div className="phone-hero">
            <div className="hero-right">
              <div className="activity-preview">
                <div className="recent-activities1">
                  <div className="activity-heading">
                    <div className="heading1">Members Contribution Status</div>
                  </div>
                  <div className="activity-list">
                    <div className="thrift-member5">
                      <div className="activity-user">
                        <img
                          className="avatars-icon2"
                          loading="lazy"
                          alt=""
                          src="/avatars@2x.png"
                        />
                        <div className="single-name">
                          <div className="john-doe5">Olawale Damilare</div>
                          <div className="johndoeexamplecom6">
                            johndoe@example.com
                          </div>
                        </div>
                      </div>
                      <div className="info-35">
                        <div className="slot5">Slot</div>
                        <div className="div12">1</div>
                      </div>
                      <div className="info-45">
                        <div className="total-amount-contributed6">
                          Total amount contributed
                        </div>
                        <div className="n05">N0</div>
                      </div>
                      <div className="bagde6">
                        <div className="paid4">Paid</div>
                      </div>
                    </div>
                    <div className="thrift-member6">
                      <div className="activity-users">
                        <div className="avatars4">
                          <div className="jd4">FL</div>
                        </div>
                        <div className="user-name">
                          <div className="full-name">
                            <div className="frank-lampard">Frank Lampard</div>
                            <div className="franklampardexamplecom">
                              franklampard@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="info-36">
                        <div className="slot6">Slot</div>
                        <div className="div13">3</div>
                      </div>
                      <div className="info-46">
                        <div className="total-amount-contributed7">
                          Total amount contributed
                        </div>
                        <div className="n06">N0</div>
                      </div>
                      <div className="activity-status">
                        <div className="bagde7">
                          <div className="paid5">PAid</div>
                        </div>
                      </div>
                    </div>
                    <div className="activity-container">
                      <div className="thrift-member7">
                        <div className="avatars-parent4">
                          <img
                            className="avatars-icon3"
                            loading="lazy"
                            alt=""
                            src="/avatars-1.svg"
                          />
                          <div className="list-activity-name">
                            <div className="jane-doe">Jane Doe</div>
                            <div className="janedoeexamplecom">
                              janedoe@example.com
                            </div>
                          </div>
                        </div>
                        <div className="info-37">
                          <div className="slot7">Slot</div>
                          <div className="div14">7</div>
                        </div>
                        <div className="info-47">
                          <div className="total-amount-contributed8">
                            Total amount contributed
                          </div>
                          <div className="n07">N0</div>
                        </div>
                        <div className="bagde8">
                          <div className="paid6">PAid</div>
                        </div>
                      </div>
                      <div className="another-activity">
                        <div className="thrift-member8">
                          <div className="avatars-parent5">
                            <div className="avatars5">
                              <div className="jd5">AM</div>
                            </div>
                            <div className="user-name-activity-repeat">
                              <div className="full-name-container">
                                <div className="ahmed-musa">Ahmed Musa</div>
                                <div className="ahmedmusaexamplecom">
                                  Ahmedmusa@example.com
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="info-38">
                            <div className="slot8">Slot</div>
                            <div className="div15">2</div>
                          </div>
                          <div className="info-48">
                            <div className="total-amount-contributed9">
                              Total amount contributed
                            </div>
                            <div className="n08">N0</div>
                          </div>
                          <div className="activity-status-repeat">
                            <div className="bagde9">
                              <div className="paid7">PAid</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="thrift-member9">
                      <div className="avatars-parent6">
                        <div className="avatars6">
                          <div className="jd6">OJ</div>
                        </div>
                        <div className="frame-wrapper">
                          <div className="olawale-jumoke-parent">
                            <div className="olawale-jumoke">Olawale Jumoke</div>
                            <div className="olawalejumokeexamplecom">
                              olawalejumoke@example.com
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="info-39">
                        <div className="slot9">Slot</div>
                        <div className="div16">6</div>
                      </div>
                      <div className="info-49">
                        <div className="total-amount-contributed10">
                          Total amount contributed
                        </div>
                        <div className="n09">N0</div>
                      </div>
                      <div className="bagde-wrapper">
                        <div className="bagde10">
                          <div className="paid8">PAid</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="member-receiving-payment1">
                <div className="payout-container">
                  <div className="member-receiving-payout1">
                    Member Receiving Payout
                  </div>
                  <div className="payout-user">
                    <img
                      className="avatars-icon4"
                      loading="lazy"
                      alt=""
                      src="/avatars-2@2x.png"
                    />
                    <div className="payout-name">
                      <div className="olawale-damilare3">Olawale Damilare</div>
                      <div className="johndoeexamplecom7">
                        johndoe@example.com
                      </div>
                    </div>
                    <div className="bagde11">
                      <div className="pay-out-received1">Pay out Received</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="thriftplan-card">
            <div className="basic-thrift-plan-i-group">
              <div className="basic-thrift-plan1">Basic Thrift Plan I</div>
              <div className="start-date-parent">
                <div className="start-date">Start Date:</div>
                <div className="july-14-2023">July 14, 2023</div>
              </div>
            </div>
            <div className="info-2-parent3">
              <div className="info-26">
                <img className="icons6" alt="" src="/icons.svg" />
                <div className="group">
                  <div className="div17">₦10,000</div>
                  <div className="per-member">Per Member</div>
                </div>
              </div>
              <div className="info-5">
                <img className="icons7" alt="" src="/icons-1.svg" />
                <div className="months-parent">
                  <div className="months">10 Months</div>
                  <div className="duration">Duration</div>
                </div>
              </div>
              <div className="info-6">
                <img className="icons8" alt="" src="/icons-2.svg" />
                <div className="parent1">
                  <div className="div18">₦500,000</div>
                  <div className="total-remit">Total Remit</div>
                </div>
              </div>
            </div>
            <div className="progress1">
              <div className="progress-bar1">
                <div className="progress-bar-inner" />
                <div className="rectangle-div" />
              </div>
              <div className="div19">50%</div>
            </div>
            <div className="avatars-parent7">
              <img className="avatars-icon5" alt="" src="/avatars-3@2x.png" />
              <div className="frame-parent8">
                <div className="olawale-damilare-group">
                  <div className="olawale-damilare4">Olawale Damilare</div>
                  <div className="johndoeexamplecom8">johndoe@example.com</div>
                </div>
                <div className="thrift-coordinator">Thrift Coordinator</div>
              </div>
            </div>
          </div>
          <div className="phone-bottom">
            <div className="wrapper-image">
              <img
                className="image-icon"
                loading="lazy"
                alt=""
                src="/image@2x.png"
              />
            </div>
            <div className="slot-info">
              <div className="info-27">
                <div className="slot-container">
                  <div className="slot-3">Slot 3</div>
                </div>
                <div className="active-slot">Active Slot</div>
              </div>
              <div className="info-divider" />
              <div className="info-310">
                <div className="slot-7-wrapper">
                  <a className="slot-7">Slot 7</a>
                </div>
                <div className="your-slot">Your Slot</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
