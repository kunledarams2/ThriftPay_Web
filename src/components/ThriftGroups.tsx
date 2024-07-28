import { FunctionComponent } from "react";
import Benefit from "./Benefit";
import "./ThriftGroups.css";

export type ThriftGroupsType = {
  className?: string;
};

const ThriftGroups: FunctionComponent<ThriftGroupsType> = ({
  className = "",
}) => {
  return (
    <section className={`thrift-groups ${className}`}>
      <div className="content2">
        <div className="heading4">
          <h1 className="bringing-your-existing">{`Bringing your existing Thrift group or creating a new one has never been easier. `}</h1>
          <div className="empower-your-financial">
            Empower your financial journey by teaming up with friends, family,
            or colleagues. Create a private Thrift Group to pool resources and
            achieve shared savings goals.
          </div>
        </div>
        <div className="benefits-list">
          <div className="benefit-item">Benefits</div>
          <div className="benefit-parent">
            <div className="benefit1">
              <div className="icons-wrapper8">
                <img className="icons25" alt="" src="/icons-24.svg" />
              </div>
              <div className="seamless-management-parent">
                <div className="seamless-management1">Seamless Management</div>
                <div className="effortlessly-organize-your1">
                  Effortlessly organize your group contributions and schedules
                </div>
              </div>
            </div>
            <div className="benefit2">
              <div className="icons-wrapper9">
                <img className="icons26" alt="" src="/icons-25.svg" />
              </div>
              <div className="transparent-tracking-parent">
                <div className="transparent-tracking">Transparent Tracking</div>
                <div className="monitor-every-transaction">
                  Monitor every transaction and contribution with clarity.
                </div>
              </div>
            </div>
            <div className="benefit3">
              <div className="icons-wrapper10">
                <img className="icons27" alt="" src="/icons-26.svg" />
              </div>
              <div className="flexible-control-parent">
                <div className="flexible-control">Flexible Control</div>
                <div className="set-customized-rules">
                  Set customized rules and parameters for your group's needs.
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-details">
            <Benefit
              seamlessManagement="Seamless Management"
              effortlesslyOrganizeYourG="Effortlessly organize your group contributions and schedules"
            />
            <Benefit
              seamlessManagement="Transparent Tracking"
              effortlesslyOrganizeYourG="Monitor every transaction and contribution with clarity."
            />
            <Benefit
              seamlessManagement="Flexible Control"
              effortlesslyOrganizeYourG="Set customized rules and parameters for your group's needs."
            />
          </div>
        </div>
      </div>
      <div className="image1">
        <div className="image-child" />
        <div className="label-text-group">
          <div className="label-text4">Benefits</div>
          <div className="benefit-group">
            <div className="benefit4">
              <div className="icons-wrapper11">
                <img className="icons28" alt="" src="/icons-30.svg" />
              </div>
              <div className="seamless-management-group">
                <div className="seamless-management2">Seamless Management</div>
                <div className="effortlessly-organize-your2">
                  Effortlessly organize your group contributions and schedules
                </div>
              </div>
            </div>
            <div className="benefit5">
              <div className="icons-wrapper12">
                <img className="icons29" alt="" src="/icons-31.svg" />
              </div>
              <div className="transparent-tracking-group">
                <div className="transparent-tracking1">
                  Transparent Tracking
                </div>
                <div className="monitor-every-transaction1">
                  Monitor every transaction and contribution with clarity.
                </div>
              </div>
            </div>
            <div className="benefit6">
              <div className="icons-wrapper13">
                <img className="icons30" alt="" src="/icons-32.svg" />
              </div>
              <div className="flexible-control-group">
                <div className="flexible-control1">Flexible Control</div>
                <div className="set-customized-rules1">
                  Set customized rules and parameters for your group's needs.
                </div>
              </div>
            </div>
          </div>
          <div className="benefit-container">
            <div className="benefit7">
              <div className="icons-wrapper14">
                <img className="icons31" alt="" src="/icons-33.svg" />
              </div>
              <div className="seamless-management-container">
                <div className="seamless-management3">Seamless Management</div>
                <div className="effortlessly-organize-your3">
                  Effortlessly organize your group contributions and schedules
                </div>
              </div>
            </div>
            <div className="benefit8">
              <div className="icons-wrapper15">
                <img className="icons32" alt="" src="/icons-34.svg" />
              </div>
              <div className="transparent-tracking-container">
                <div className="transparent-tracking2">
                  Transparent Tracking
                </div>
                <div className="monitor-every-transaction2">
                  Monitor every transaction and contribution with clarity.
                </div>
              </div>
            </div>
            <div className="benefit9">
              <div className="icons-wrapper16">
                <img className="icons33" alt="" src="/icons-35.svg" />
              </div>
              <div className="flexible-control-container">
                <div className="flexible-control2">Flexible Control</div>
                <div className="set-customized-rules2">
                  Set customized rules and parameters for your group's needs.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThriftGroups;
