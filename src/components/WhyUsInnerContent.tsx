import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./WhyUsInnerContent.css";

export type WhyUsInnerContentType = {
  className?: string;
  numberInnerContainer?: string;
  tailored?: string;
  thriftPlans?: string;
  ourThriftPlansAreMeticulo?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propFlexWrap?: CSSProperties["flexWrap"];
};

const WhyUsInnerContent: FunctionComponent<WhyUsInnerContentType> = ({
  className = "",
  numberInnerContainer,
  tailored,
  thriftPlans,
  ourThriftPlansAreMeticulo,
  propMinWidth,
  propFlexWrap,
}) => {
  const whyUsInnerContentStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
      flexWrap: propFlexWrap,
    };
  }, [propMinWidth, propFlexWrap]);

  return (
    <div
      className={`why-us-inner-content ${className}`}
      style={whyUsInnerContentStyle}
    >
      <div className="number">
        <div className="number-inner-container">{numberInnerContainer}</div>
        <div className="wrapper-member-payment">
          <img
            className="member-payment-icon"
            loading="lazy"
            alt=""
            src="/vector-672.svg"
          />
        </div>
      </div>
      <div className="plans-activities">
        <h1 className="tailored-thrift-plans-container">
          <p className="tailored">{tailored}</p>
          <p className="thrift-plans">{thriftPlans}</p>
        </h1>
        <div className="our-thrift-plans">{ourThriftPlansAreMeticulo}</div>
      </div>
    </div>
  );
};

export default WhyUsInnerContent;
