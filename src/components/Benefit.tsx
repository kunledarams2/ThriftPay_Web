import { FunctionComponent } from "react";
import "./Benefit.css";

export type BenefitType = {
  className?: string;
  seamlessManagement?: string;
  effortlesslyOrganizeYourG?: string;
};

const Benefit: FunctionComponent<BenefitType> = ({
  className = "",
  seamlessManagement,
  effortlesslyOrganizeYourG,
}) => {
  return (
    <div className={`benefit ${className}`}>
      <div className="benefit-management-icon">
        <img className="icons24" loading="lazy" alt="" src="/icons-27.svg" />
      </div>
      <div className="benefit-management-description">
        <h2 className="seamless-management">{seamlessManagement}</h2>
        <div className="effortlessly-organize-your">
          {effortlesslyOrganizeYourG}
        </div>
      </div>
    </div>
  );
};

export default Benefit;
