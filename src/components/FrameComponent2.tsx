import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent2.css";

export type FrameComponentType = {
  className?: string;
  prop?: string;
  vector672?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
  prop,
  vector672,
  propMinWidth,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`number-parent ${className}`} style={frameDivStyle}>
      <div className="number1">
        <div className="div23">{prop}</div>
        <div className="wrapper-vector-672">
          <img
            className="wrapper-vector-672-child"
            loading="lazy"
            alt=""
            src={vector672}
          />
        </div>
      </div>
      <div className="real-time-transparency-parent">
        <h1 className="real-time-transparency">Real-time Transparency</h1>
        <div className="stay-informed-every">{`Stay informed every step of the way with our transparent transaction system. Easily track your thrift contributions, and payouts in real-time, directly from your mobile device. With ThriftPay, you have the power to monitor all thrift members and observe every transaction within your thrift group or plan in real-time. `}</div>
      </div>
    </div>
  );
};

export default FrameComponent;
