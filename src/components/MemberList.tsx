import { FunctionComponent } from "react";
import "./MemberList.css";

export type MemberListType = {
  className?: string;
};

const MemberList: FunctionComponent<MemberListType> = ({ className = "" }) => {
  return (
    <div className={`member-list ${className}`}>
      <div className="thrift-member">
        <div className="member-item">
          <img
            className="avatars-icon1"
            loading="lazy"
            alt=""
            src="/avatars-1@2x.png"
          />
          <div className="member-name">
            <div className="john-doe">Olawale Damilare</div>
            <div className="johndoeexamplecom1">johndoe@example.com</div>
          </div>
        </div>
        <div className="info-3">
          <div className="slot">Slot</div>
          <div className="div3">1</div>
        </div>
        <div className="info-4">
          <div className="total-amount-contributed">
            Total amount contributed
          </div>
          <div className="n0">N0</div>
        </div>
        <div className="bagde">
          <div className="paid">Paid</div>
        </div>
      </div>
      <div className="thrift-member1">
        <div className="avatars-group">
          <div className="avatars">
            <div className="jd">FL</div>
          </div>
          <div className="frank-lampard-wrapper">
            <div className="frank-lampard">Frank Lampard</div>
          </div>
        </div>
        <div className="franklampardexamplecom">franklampard@example.com</div>
        <div className="info-31">
          <div className="slot1">Slot</div>
          <div className="div4">3</div>
        </div>
        <div className="info-41">
          <div className="total-amount-contributed1">
            Total amount contributed
          </div>
          <div className="n01">N0</div>
        </div>
        <div className="bagde-wrapper">
          <div className="bagde1">
            <div className="paid1">PAid</div>
          </div>
        </div>
      </div>
      <div className="thrift-member2">
        <div className="avatars-container">
          <img
            className="avatars-icon2"
            loading="lazy"
            alt=""
            src="/avatars-2.svg"
          />
          <div className="jane-doe-parent">
            <a className="jane-doe">Jane Doe</a>
            <div className="janedoeexamplecom">janedoe@example.com</div>
          </div>
        </div>
        <div className="info-32">
          <div className="slot2">Slot</div>
          <div className="div5">7</div>
        </div>
        <div className="info-42">
          <div className="total-amount-contributed2">
            Total amount contributed
          </div>
          <div className="n02">N0</div>
        </div>
        <div className="bagde2">
          <div className="paid2">PAid</div>
        </div>
      </div>
      <div className="thrift-member3">
        <div className="frame-div">
          <div className="avatars1">
            <div className="jd1">AM</div>
          </div>
          <div className="ahmed-musa-wrapper">
            <div className="ahmed-musa">Ahmed Musa</div>
          </div>
        </div>
        <div className="ahmedmusaexamplecom">Ahmedmusa@example.com</div>
        <div className="info-33">
          <div className="slot3">Slot</div>
          <div className="div6">2</div>
        </div>
        <div className="info-43">
          <div className="total-amount-contributed3">
            Total amount contributed
          </div>
          <div className="n03">N0</div>
        </div>
        <div className="bagde-container">
          <div className="bagde3">
            <div className="paid3">PAid</div>
          </div>
        </div>
      </div>
      <div className="thrift-member4">
        <div className="avatars-parent1">
          <div className="avatars2">
            <div className="jd2">OJ</div>
          </div>
          <div className="olawale-jumoke-wrapper">
            <div className="olawale-jumoke">Olawale Jumoke</div>
          </div>
        </div>
        <div className="olawalejumokeexamplecom">olawalejumoke@example.com</div>
        <div className="info-34">
          <div className="slot4">Slot</div>
          <div className="div7">6</div>
        </div>
        <div className="info-44">
          <div className="total-amount-contributed4">
            Total amount contributed
          </div>
          <div className="n04">N0</div>
        </div>
        <div className="bagde-frame">
          <div className="bagde4">
            <div className="paid4">PAid</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberList;
