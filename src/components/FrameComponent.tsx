import { FunctionComponent } from "react";
import "./FrameComponent.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <section className={`content-container ${className}`}>
      <div className="content3">
        <div className="download-call-to-action-wrapper">
          <div className="download-call-to-action">
            <h1 className="transform-your-savings">
              Transform Your Savings Experience with ThriftPay!
            </h1>
            <div className="download-now-and">
              Download now and start thriving!
            </div>
            <img
              className="google-play-icon"
              loading="lazy"
              alt=""
              src="/google-play.svg"
            />
          </div>
        </div>
        <div className="mock-up">
          <div className="galaxy-s24-ultra-mockup-titani">
            <div className="download-mockup-container">
              <img className="shadow-icon2" alt="" src="/shadow-2@2x.png" />
              <img className="main-icon2" alt="" src="/main-2@2x.png" />
            </div>
            <img
              className="galaxy-s24-ultra-mockup-titani1"
              loading="lazy"
              alt=""
              src="/galaxy-s24-ultra-mockup-titanium-gray-right-label@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
